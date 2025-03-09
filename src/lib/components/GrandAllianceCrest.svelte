<script lang="ts">
  import order from "$lib/assets/order.png";
  import chaos from "$lib/assets/chaos.png";
  import death from "$lib/assets/death.png";
  import destruction from "$lib/assets/destruction.png";
  let { ga } = $props();

  let wrapperStyle = $state("ga-image-wrapper");

  if (ga === "order") {
    wrapperStyle = "ga-image-wrapper bg-order-color";
  } else if (ga === "chaos") {
    wrapperStyle = "ga-image-wrapper bg-chaos-color";
  } else if (ga === "death") {
    wrapperStyle = "ga-image-wrapper bg-death-color";
  } else if (ga === "destruction") {
    wrapperStyle = "ga-image-wrapper bg-destruction-color";
  }


</script>

<div class={wrapperStyle}>
  {#if ga === "order"}
    <img alt={ga} src={order} />
  {:else if ga === "chaos"}
    <img alt={ga} src={chaos} />
  {:else if ga === "death"}
    <img alt={ga} src={death} />
  {:else if ga === "destruction"}
    <img alt={ga} src={destruction} />
  {/if}
  {ga}
</div>

<style>

  .ga-image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 2px 8px 2px 8px !important;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: .6em;
  }
  img {
    width: 28px; 
    height: 28px;
  }
</style>