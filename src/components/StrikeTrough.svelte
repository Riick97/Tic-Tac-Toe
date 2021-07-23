<script>
    export let strikeTrough = 'row1'
</script>

<div class="strikeTrough {strikeTrough} "></div>

<style>
    .strikeTrough{
        position: absolute;
        width: 300px;
        height: 10px;
        background-color: rgb(37, 37, 37);
        display: none;
    }
    .row1{
        display: block;
        transform: translateY(-100px);
    }
    .row2{
        display: block;
        transform: translate(0);
    }
    .row3{
        display: block;
        transform: translateY(100px);
    }
    .col1{
        display: block;
        transform: rotateZ(90deg) translateY(100px);
    }
    .col2{
        display: block;
        transform: rotateZ(90deg);
    }
    .col3{
        display: block;
        transform: rotateZ(90deg) translateY(-100px);
    }
    .diag1{
        display: block;
        width: 370px;
        transform: rotateZ(45deg);
    }
    .diag2{
        display: block;
        width: 370px;
        transform: rotateZ(135deg);
    }
</style>