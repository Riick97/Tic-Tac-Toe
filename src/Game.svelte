<script>
    import Turn from './components/Turn.svelte'
    import Board from './components/Board.svelte'
    import Scores from './components/Scores.svelte'
    import page from 'page'
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    
    export let game = {};
    export let newGame
    export let localPlayer

    if (window.location.pathname === '/game' && !game.ticTac)  {
        window.location.pathname = '/'
    }

    let ticTac 
    let board;
    let strikeTrough
    let player;
    $: ticTac = game.ticTac;
    $: board = ticTac.board;
    $: player = ticTac.player;
    $: strikeTrough = ticTac.strikeTrough;
    
    
	function forward(event) {
        if(ticTac.winner) {
            newGame();
            return;
        }
        
        if (game.mode === 'online' && player === 1 && localPlayer.uid !== game.player1Uid) return
        if (game.mode === 'online' && player === 2 && localPlayer.uid !== game.player2Uid) return

        let row = event.detail.location.row
        let col = event.detail.location.col
        if(board[row][col] !== 0) return;

		dispatch('chosen', event.detail);
	}

</script>

<section class="game">
    <div class="top">
        <Scores {game} />
    </div>
    <div class="middle centered">
        <Board on:chosen="{forward}" {board} {strikeTrough} />
    </div>
    <div class="bottom centered">
        <Turn turn={player} />
    </div>
</section>

<style>
    .top{
        height: 100px;
    }

    .middle {
        padding: 20px;
    }
    
</style>