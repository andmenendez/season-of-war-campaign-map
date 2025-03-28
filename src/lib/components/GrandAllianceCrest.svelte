<script lang="ts">
  import order from "$lib/assets/order.png";
  import chaos from "$lib/assets/chaos.png";
  import death from "$lib/assets/death.png";
  import destruction from "$lib/assets/destruction.png";
  import none from "$lib/assets/none.png";
  import { GA, type GAType } from "$lib/territories";

  let { ga, className } : {ga: string; className?: string;} = $props();
  let wrapperStyle = $state("ga-image-wrapper");

  $effect(()=> {
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
  })


</script>
<div class={`${className}`}>
  <div class={wrapperStyle}>
    {#if ga === GA.Order}
      <img alt={ga} src={order} />
    {:else if ga === GA.Chaos}
      <img alt={ga} src={chaos} />
    {:else if ga === GA.Death}
      <img alt={ga} src={death} />
    {:else if ga === GA.Destruction}
      <img alt={ga} src={destruction} />
    {:else}
      <img alt={ga} src={none} />
    {/if}

    {#if `${ga}` === "undefined" || ga === GA.None}
      -
    {:else}
      {#if `${ga}` === "undefined"}
        <span class="text-[6px] mt-1">Unclaimed</span>
      {:else if `${ga}`.length > 5}
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
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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