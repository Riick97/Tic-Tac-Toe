<script>
    import page from 'page'

    export let path = '/';
    let show = false;

    document.addEventListener('click', (e) => {
        let bars = document.querySelector('.fa-bars')
        if ((e.target) !== bars) {show = false;}
    })

    function toggle() {
        show =! show;
    }
</script>

<nav>
    <div class="nav">
        <div class="left">
            {#if path === '/game' || path === '/lobby'}
            <i on:click="{() => page('/')}" class="fas fa-chevron-left"></i>
            {:else}
            <!-- <i class="fas fa-user"></i> -->
            {/if}
        </div>
        <div class="middle"></div>
        <!-- <div on:click="{toggle}" class="right centered">
            <i class="fas fa-bars"></i>
        </div> -->
    </div>
    <div class="dropdown" class:show={show === true}>
        <button class="item">
            Login
        </button>
        {#if path==='/game'}
        <div class="divider"></div>
        <button class="item">
            Restart
        </button>
        {/if}
    </div>
</nav>

<style>
    nav{
        position: relative;
        box-shadow: 1px 3px 10px hsla(10, 10%, 10%, .2);
        padding: 7px;
    }
    .divider{
        width: 90%;
        height: 2px;
        background-color: hsl(200, 10%, 90%);
        margin: auto;
    }
    .nav {
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
    }
    .left{
        padding-left: 20px;
    }
    .dropdown{
        position: fixed;
        right: 10px;
        top: 50px;
        border-radius: 20px;
        overflow: hidden;
        display: none;
    }
    .show{
        display: block;
    }
    .item{
        padding: 20px 100px;
        background-color: white;
        border: none;
    }
</style>