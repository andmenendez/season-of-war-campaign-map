<script lang="ts">
  import { myGlobalState } from "$lib/state.svelte";

  const {src, name, id} = $props<{ src: string; name?: string; id?: any }>()
  import { inview } from "svelte-inview";
  import type { ObserverEventDetails, Options } from "svelte-inview";
  import { fade } from "svelte/transition";

  let isInView: boolean = $state(false);
  let render: boolean = $state(false);
  
  $effect(()=> {
    if (isInView) {
      setTimeout(()=>render = true, 100);
    } else {
      render = false;
    }
  });

  const options: Options = {
    rootMargin: "50px",
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
    (isInView = detail.inView);
  
  const handleClick = ()=> {
    myGlobalState.image = {src: src, name: name, id:id};
  }
</script>


<button
  onclick={handleClick}
  use:inview={options}
  oninview_change={handleChange}
  class="transition-all group rounded-md h-full min-h-[200px] w-full overflow-hidden bg-black/30"
>
  {#if render && isInView}
    <div
      in:fade={{ duration: 250, delay: 50 }}
      out:fade={{ duration: 250, delay: 50 }}
      class="group-hover:scale-105 transition-transform duration-200 rounded-md h-full min-h-[300px] w-full image-cover"
      style={`--loupe-image:URL(${src})`}
      ></div>
      <!-- <img alt="Image" src="path/to/image.jpg" /> -->
  {:else}
    <div class="h-full min-h-[300px] w-full"></div>
  {/if}
</button>

<style>
  .image-cover {
    background-color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-image: var(--loupe-image);
  }
</style>
