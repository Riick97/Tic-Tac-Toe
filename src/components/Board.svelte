<script>
    import TicTac from './TicTac.svelte';
    import StrikeTrough from './StrikeTrough.svelte'
    import { createEventDispatcher } from 'svelte'
    
    export let board = [];
    export let strikeTrough = ''

    const dispatch = createEventDispatcher();

	function chosen(row, col) {
        let location = {}
        location.row = row;
        location.col = col;
		dispatch('chosen', {
			location: location
		});
	}


</script>

<div class="board">
    <div class="row">
        <div on:click={() => chosen(0, 0)} class="col right bottom"><TicTac choice={board[0][0]}  /></div>
        <div on:click={() => chosen(0, 1)} class="col bottom"><TicTac choice={board[0][1]} /></div>
        <div on:click={() => chosen(0, 2)} class="col left bottom"><TicTac choice={board[0][2]} /></div>
    </div>
    <div class="row">
        <div on:click={() => chosen(1, 0)} class="col right"><TicTac choice={board[1][0]} /></div>
        <div on:click={() => chosen(1, 1)} class="col"><TicTac choice={board[1][1]} /></div>
        <div on:click={() => chosen(1, 2)} class="col left"><TicTac choice={board[1][2]} /></div>
    </div>
    <div class="row">
        <div on:click={() => chosen(2, 0)} class="col right up"><TicTac choice={board[2][0]} /></div>
        <div on:click={() => chosen(2, 1)} class="col up"><TicTac choice={board[2][1]} /></div>
        <div on:click={() => chosen(2, 2)} class="col left up"><TicTac choice={board[2][2]} /></div>
    </div>
</div>
<StrikeTrough {strikeTrough} />


<style>
    .board{
        border-radius: 15px;
        border: hsl(240, 100%, 96%) 8px solid;
        background-color: hsl(240, 100%, 96%);
    }
    .row{
        display: flex;
        border: none;
    }
    .col{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
        border: none;
    }
    .bottom{
        border-bottom: hsl(240, 50%, 90%) 3px solid;
    }
    .up {
        border-top: hsl(240, 50%, 90%) 3px solid;
    }
    .left{
        border-left: hsl(240, 50%, 90%) 3px solid;
    }
    .right{
        border-right: hsl(240, 50%, 90%) 3px solid;
    }
    
</style>