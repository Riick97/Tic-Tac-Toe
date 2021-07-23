<script>
    import Button from './components/Button.svelte'
    import page from 'page'
    import {createEventDispatcher} from 'svelte'

    let dispatch = createEventDispatcher()

    function startLocal() {
        dispatch('startLocal')
    }
    function startOnline() {
        dispatch('startOnline')
        page('/lobby')
    }

</script>

<main>
    <div class="top centered">
        <h1>Tic Tac Toe</h1>
    </div>
    <div class="middle centered">
        <div class="logo"></div>
    </div>
    <div class="bottom">
        <Button on:click={startLocal} name={'Play Local'} color={'blue'} />
        <Button on:click={startOnline} name={'Play Online'} color={'blue'} />

    </div>
</main>

<style>
    h1{
        font-size: 3.5rem;
        color: rgb(37, 37, 37);
        font-weight: 400;
    }
    .top{
        padding: 50px 0;
    }
    .middle{
        min-height: 200px;
        padding: 20px
    }
    .bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .logo{
        height: 200px;
        width: 200px;
        background-size: cover;
        background-image: url('./assets/Logo.svg');
    }
</style>