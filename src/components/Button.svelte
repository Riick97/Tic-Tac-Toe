<script>
    export let name = 'button'
    export let color = 'green'

</script>

<button 
on:click
class:green="{color === 'green'}"
class:blue="{color === 'blue'}">
    {name}
</button>

<style>
    button{
        height: 40px;
        width: 200px;
        margin-bottom: 15px;
        border: none;
        border-radius: 6px;
        color: white;
        font-size: 1.5rem;
    }
    .green{
        background-color: hsl(107, 63%, 61%);
    }
    .blue{
        background-color: hsl(200, 60%, 60%);
    }
</style>