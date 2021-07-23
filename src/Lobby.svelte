<script>
    import Button from './components/Button.svelte'
    import Spinner from './components/Spinner.svelte'

    import {createEventDispatcher} from 'svelte'

    let dispatch = createEventDispatcher()
    let lobbyId;

    function startOnline() {
        dispatch('startOnline', {lobbyId})
    }

    async function joinLobby() {
        dispatch('joinLobby', {lobbyId})
        
    }


</script>

<div class="container">
    <div class="top">
        <Spinner />
        <div class="message-top">waiting...</div>
    </div>
    <div class="middle">
        <div class="input">
            <input bind:value="{lobbyId}" placeholder="Lobby Name" type="text">
            <div class="copy centered"></div>
        </div>
        <div class="message">send this lobby name to your friend</div>
    </div>
    <div class="bottom">
        <button on:click="{startOnline}">create</button>
        <button on:click="{joinLobby}">join</button>
    </div>
</div>

<style>
    input{
        height: 100%;
        width: 80%;
        padding: 10px;
        background-color: transparent;
        border: none;
    }
    button{
        width: 48%;
        height: 45px;
        background-color: hsl(79, 100%, 36%);
        border: none;
        border-radius: 7px;
        color: white;
        font-size: 1.5rem;
    }
    .input{
        height: 50px;
        background-color: hsl(204, 15%, 94%);
        border-color: hsl(204, 15%, 80%);
        border-width: 2px;
        display: flex;
        justify-content: space-between;
        border-radius: 7px;
    }
    .copy{
        padding: 5px;
    }
    .top{
        padding-top: 100px;
        padding-bottom: 40px;
    }
    .middle{
        width: 100%;
        height: 100px;
    }
    .bottom{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-top: 20px;
    }
    .message{
        margin-top: 10px;
    }
</style>