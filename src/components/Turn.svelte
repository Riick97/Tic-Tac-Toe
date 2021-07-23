<script>
    export let turn = 2;
</script>

<div class="wrapper">
    <div class="left" class:selected={turn === 2}>X</div>
    <div class="right" class:selected={turn === 1}>O</div>
</div>

<style>
    .wrapper{
        display: flex;
        justify-content: center;
        background-color: hsl(200, 50%, 90%);
        border-radius: 15px;
        overflow: hidden;
    }
    .left, .right{
        padding: 1px 5px;
    }

    .selected{
        background-color: hsl(200, 50%, 50%);
        color: hsl(200, 100%, 100%)
    }
</style>