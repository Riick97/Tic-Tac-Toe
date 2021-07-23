<script>
  // import { Router, Route, Link, navigate } from "svelte-routing";
  import Navbar from "./components/Navbar.svelte";
  import Home from "./Home.svelte";
  import Game from "./Game.svelte";
  import Lobby from "./Lobby.svelte";
  import { db } from "./firebase";
  import page from 'page';


  let current;

  page('/', () => current = Home);
  page('/game', () => current = Game);
  page('/lobby', () => current = Lobby);

  page.start();

  import * as ticTacToe from "./tictactoe.js";

  let game = {};
  let gameId = ''
  let localPlayer = {
    uid: Math.floor(Math.random() * 1000),
  };

  let path = window.location.pathname;
  function updatePath() {
    path = window.location.pathname;
  }

  function choose(e) {
    let game1 = game;
    let location = e.detail.location;
    let ticTac = game1.ticTac;
    ticTac = ticTacToe.setChoice(ticTac, location);
    ticTac = ticTacToe.changePlayer(ticTac);
    ticTac = ticTacToe.checkWin(ticTac);
    game1.ticTac = ticTac;
    if (game.mode === 'online') updateGameInDb(gameId);
    else game.ticTac = ticTac;
  }

  function newGame() {
    let winner = game.ticTac.winner;

    //Update win
    if (winner === 1) {
      game.player1Wins++;
    }
    if (winner === 2) {
      game.player2Wins++;
    }
    if (winner === 3) {
      game.draws++;
    }

    //Swap first player
    if (game.first === 1) game.first = 2;
    else if (game.first === 2) game.first = 1;

    game.ticTac = ticTacToe.ticTacToe(game.first);
  }

  function createGame(p1Uid) {
    let game = {};
    game.player1Uid = p1Uid || null;
    game.player2Uid = null;
    game.player1Wins = 0;
    game.player2Wins = 0;
    game.draws = 0;
    game.first = 1;
    game.ticTac = ticTacToe.ticTacToe(game.first);
    return game;
  }

  function startLocal() {
    game = createGame();
    game.mode = 'offline'
    page('/game')
  }

  async function startOnline(e) {
    let lobbyId = e.detail.lobbyId;
    if (lobbyId === '') return;
    game = createGame(localPlayer.uid);
    game.mode = "online";
    await addGameToDb(game, lobbyId);
    await startListening(gameId)
    page('/game')
  }

  async function joinLobby(e) {
    gameId = e.detail.lobbyId
    await startListening(gameId);
    game.player2Uid = localPlayer.uid;
    updateGameInDb(gameId)
    page('/game')
  }



  function addGameToDb(game, lobbyId) {
    return new Promise(resolve => {
      db.collection("games").doc(lobbyId)
        .set(game)
        .then(function (docRef) {
          gameId = lobbyId;
          console.log("document written with ID", lobbyId);
          resolve()
        })
        .catch(function (error) {
          console.error("error adding documents", error);
        });
    })
  }

  function updateGameInDb(gameId) {
    db.collection("games")
      .doc(gameId)
      .update(game)

      .then(function () {
        console.log("document written with ID", gameId);
      })
      .catch(function (error) {
        console.error("error adding documents", error);
      });
  }

  function startListening(id) {
    return new Promise (resolve => {
      db.collection("games").doc(id)
        .onSnapshot((doc) => {
          game = doc.data()
          console.log("Current data: ", doc.data());
          resolve()
        });
    })
  }

</script>

<svelte:window on:click={updatePath} />

<Navbar { path } />
{#if current === Home} <Home on:startLocal={startLocal} />{/if}
{#if current === Game}  <Game {game} {newGame} {localPlayer} on:chosen={choose} /> {/if}
{#if current === Lobby} <Lobby on:startOnline={startOnline} on:joinLobby={joinLobby} /> {/if}

