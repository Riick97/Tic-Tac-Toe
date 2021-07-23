<script>
    export let game = {};

    let player1;
    let player2;
    let draws;

    $: player1 = game.player1Wins
    $: player2 = game.player2Wins
    $: draws = game.draws


</script>

<div class="wrapper">
    <div class="left">
        <i class="far fa-circle"></i>
        <p>{player1} wins</p>
    </div>
    <div class="middle">
        <i class="fas fa-times"></i>
        <p>{player2} wins</p>
    </div>
    <div class="right">
        <i class="far fa-times-circle"></i>
        <p>{draws} draws</p>
    </div>
</div>

<style>
    .wrapper{
        width: 80vw;
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding-top: 20px;
    }
    .wrapper div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .wrapper p{
        margin-top: 5px;
    }
</style>