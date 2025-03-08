<script>
  import { myGlobalState } from "$lib/state.svelte";
  import { fade } from "svelte/transition";
  import "../app.css";
  let { children } = $props();

  /**
   * @param {{ key: any; preventDefault: () => void; }} event
   */
  function handleKeyPress(event) {
    switch (event.key) {
      case "Escape":
      myGlobalState.image = null

        event.preventDefault();
        break;
    }
  }

</script>

<svelte:window
    on:keydown={handleKeyPress}
/>

<div class="bg-black bg-noise bg-repeat">
  <div class="bg-black/90">
    <main class="bg-gradient-to-b from-layout/80 to-layout/90 pb-10 md:!pb-40 min-h-screen">
      <div class="flex flex-col px-4 md:!px-40 pt-20 h-[30vh] gap-2">
        <div class="flex flex-col h-full gap-2">
          <h1 class="text-8xl">Fotografía</h1>
          <h2 class="text-xl">Aurelio Menendez</h2>
        </div>
      </div>
      {@render children()}
      {#if myGlobalState.image}
        <button 
        in:fade={{ duration: 250, delay: 50 }}
        out:fade={{ duration: 250, delay: 50 }}
        onclick={()=>myGlobalState.image = null} class="fixed flex justify-center items-center top-0 right-0 w-screen h-screen bg-black/50 backdrop-blur-sm">
          <img class="w-auto max-w-[80vw] max-h-[80vh] rounded-xl border-2 vignette border-white/30" src={myGlobalState.image?.src} alt={myGlobalState.image?.name} />
        </button>
      {/if}
    </main>
  </div>
</div>

<style>
  .vignette:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: red;;
    /* background: radial-gradient(ellipse at center, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%,rgba(255,255,255,1) 100%); */
    border-radius: 50%;
    position: absolute;
    top: 0; left: 0;
}
</style>