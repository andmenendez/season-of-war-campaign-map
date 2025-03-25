<script lang="ts">
  import "../../app.css";

  import order from "$lib/assets/order.png";
  import chaos from "$lib/assets/chaos.png";
  import death from "$lib/assets/death.png";
  import destruction from "$lib/assets/destruction.png";
  import all from "$lib/assets/all.png";
  import { selectedFactions } from "$lib/store";
  import { GA } from "$lib/territories";
  import { fade } from "svelte/transition";

  $selectedFactions

</script>
<div
  in:fade
  out:fade
  class="ga-selector-wrapper flex items-center gap-4 h-min md:py-1 px-1 py-2 m-2 rounded-full border-1 bg-white/10 border-black/30 backdrop-blur-sm"
>
  <button onclick={()=>selectedFactions.update(sf=> {
    if (sf.length ===4) {
      return [GA.Order]
    }
      if (sf.includes(GA.Order)) {
        return sf.filter( fctn => fctn !== GA.Order);
      }
      return [...sf, GA.Order]
    })}>
    <img 
      class={
          $selectedFactions.includes(GA.Order) 
          ? "bg-order-color hover:!opacity-75 active" 
          : "inactive hover:!opacity-75"
      } 
      alt={"order"} 
      src={order} />
  </button>
  <button onclick={()=>selectedFactions.update(sf=> {
    if (sf.length ===4) {
      return [GA.Chaos]
    }
      if (sf.includes(GA.Chaos)) {
        return sf.filter( fctn => fctn !== GA.Chaos);
      }
      return [...sf, GA.Chaos]
    })}>
    <img 
      class={
          $selectedFactions.includes(GA.Chaos) 
          ? "bg-chaos-color hover:!opacity-75 active" 
          : "inactive hover:!opacity-75"
      } 
      alt={"chaos"} 
      src={chaos} />
  </button>
  <button onclick={()=>selectedFactions.update(sf=> {
    if (sf.length ===4) {
      return [GA.Death]
    }
      if (sf.includes(GA.Death)) {
        return sf.filter( fctn => fctn !== GA.Death);
      }
      return [...sf, GA.Death]
    })}>
    <img 
      class={
          $selectedFactions.includes(GA.Death) 
          ? "bg-death-color hover:!opacity-75 active" 
          : "inactive hover:!opacity-75"
      } 
      alt={"death"} 
      src={death} />
  </button>
  <button onclick={()=>selectedFactions.update(sf=> {
    if (sf.length ===4) {
      return [GA.Destruction]
    }
      if (sf.includes(GA.Destruction)) {
        return sf.filter( fctn => fctn !== GA.Destruction);
      }
      return [...sf, GA.Destruction]
    })}>
    <img 
      class={
          $selectedFactions.includes(GA.Destruction) 
          ? "bg-destruction-color hover:!opacity-75 active" 
          : "inactive hover:!opacity-75"
      } 
      alt={"destruction"} 
      src={destruction} />
  </button>
  <div class="h-full w-1 -mr-2 border-r-1 border-r-black/30 text-transparent">-</div>
  <button onclick={()=>selectedFactions.update(sf=> {
      if (sf.length === 4) {
        return []
      }
      return [GA.Order, GA.Chaos, GA.Death, GA.Destruction]
    })}>
    <img id="all-factions" class={`-my-2 ${$selectedFactions.length === 4 ? "hover:!opacity-75 active" : "inactive hover:!opacity-75"}`} alt={"all"} src={all} />
  </button>
</div>

<style>
  .ga-selector-wrapper {
    margin: 8px auto;
  }
  
  @media only screen and (min-width: 640px) {
    .ga-selector-wrapper {
    margin: unset;
    }
  }
  .active {
    opacity: 1;
    border: 1px solid rgba(255,255,255,0.3)
  }
  .inactive {
    opacity: .2;
  }
  img {
    border-radius: 100%;
    padding: 2px;
    width: 48px;
    max-width: 48px;
    height: 48px;
    max-height: 48px;
    flex-shrink: 0;
  }
  #all-factions {
    width: 82px;
    height: 82px;
    padding: 0px;
    border: 0px;
  }
</style>