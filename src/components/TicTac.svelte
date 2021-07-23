<script>
  import { scale } from "svelte/transition";
  import { fly } from "svelte/transition";

  import { elasticInOut } from "svelte/easing";

  const customTransition = () => {
    return {
      css: (t) => {
        return `
        transform: scale(${t});
        `;
      },
      easing: elasticInOut,
      duration: 500,
    };
  };

  export let choice = 1;
</script>

<div class="wrapper">
  {#if choice === 1}
    <div in:fly={{ y: -20 }} class="o" />
  {:else if choice === 2}
    <div in:fly={{ y: -20 }} class="x" />
  {:else}
    <div class="empty" />
  {/if}
</div>

<style>
  .x {
    background-image: url("../assets/x.svg");
    background-size: cover;
    height: 50px;
    width: 50px;
  }
  .o {
    background-image: url("../assets/o.svg");
    background-size: cover;
    height: 50px;
    width: 50px;
  }
</style>
