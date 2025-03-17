<script lang="ts">
  import order from "$lib/assets/order.png";
  import chaos from "$lib/assets/chaos.png";
  import death from "$lib/assets/death.png";
  import destruction from "$lib/assets/destruction.png";
  import none from "$lib/assets/none.png";
  import { hideSpoilers } from "$lib/store";
  import type { GAType } from "$lib/territories";

  let { ga, className } : {ga: string; className?: string;} = $props();
  let wrapperStyle = $state("ga-image-wrapper");

  $effect(()=> {
    if ($hideSpoilers){
      wrapperStyle = "ga-image-wrapper bg-none-color";
    } else {
      if (ga === "order") {
        wrapperStyle = "ga-image-wrapper bg-order-color";
      } else if (ga === "chaos") {
        wrapperStyle = "ga-image-wrapper bg-chaos-color";
      } else if (ga === "death") {
        wrapperStyle = "ga-image-wrapper bg-death-color";
      } else if (ga === "destruction") {
        wrapperStyle = "ga-image-wrapper bg-destruction-color";
      } else {
        wrapperStyle = "ga-image-wrapper bg-none-color";
      }
    }
  })


</script>
<div class={`${className} ${$hideSpoilers ? "blur-this" : ""}`}>
  <div class={wrapperStyle}>
    {#if $hideSpoilers}
      <img alt={ga} src={none} />
    {:else if ga === "order"}
      <img alt={ga} src={order} />
    {:else if ga === "chaos"}
      <img alt={ga} src={chaos} />
    {:else if ga === "death"}
      <img alt={ga} src={death} />
    {:else if ga === "destruction"}
      <img alt={ga} src={destruction} />
    {:else}
      <img alt={ga} src={none} />
    {/if}


    {#if $hideSpoilers || `${ga}`.length <= 4}
      {#if $hideSpoilers}
        secret
      {:else}
        -
      {/if}
    {:else}
      {#if `${ga}`.length > 5}
        {`${(ga as string)}`.slice(0,6)}
      {:else}
        {ga}
      {/if}
    {/if}
  </div>
</div>

<style>
  .blur-this {
    filter: blur(4px)
  }
  .ga-image-wrapper {
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    padding: 2px 10px 2px 10px !important;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: .6em;
  }
  img {
    width: 28px; 
    height: 28px;
  }
</style>