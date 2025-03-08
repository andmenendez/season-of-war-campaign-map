<script>
  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";
  import ImagePreview from "$lib/components/image-preview.svelte";
  import pics from "$lib/image-bank";
  import { shuffleArray } from "$lib/utlils";
  import { goto } from "$app/navigation";

  const colCount = 5;
  const full_pics = shuffleArray(pics);
  var render = false;

  onMount(() => {
    render = true;
  });

  
</script>

<div class="flex flex-row w-full gap-4 px-4 md:!px-40">
  {#if render}
    <div
      class="flex gap-2 items-end w-full ring-1 ring-white/5 rounded-lg p-2"
      in:slide={{
        duration: 250,
        delay: 0,
      }}
      out:slide={{
        duration: 250,
        delay: 0,
      }}
    >
      <button
        on:click={() => {
          render = false;
          setTimeout(() => goto("/"), 500);

        }}
      >
        <h3>Fotografía</h3></button
      >
      <span class="translate-y-[1px]">></span>
      <button
        on:click={() => {
          render = false;
          setTimeout(() => goto("/all"), 500);

        }}
      >
        <h3>All</h3></button
      >
    </div>
  {/if}
</div>
<div class="hidden md:flex flex-row w-full gap-4 pt-10 px-4 md:!px-40">
  {#each [50, 200, 0, 100, 150] as h, i}
    {#if render}
      <div
        class="flex flex-col gap-4 w-full"
        in:fade={{ duration: 250, delay: 200 }}
        out:fade={{ duration: 250, delay: 0 }}
      >
        <div
          style={`height: ${h * 3}px`}
          class="rounded-md w-full image-cover"
        ></div>
        {#each full_pics.slice((i * full_pics.length) / colCount, ((i + 1) * full_pics.length) / colCount) as pic, j}
          <ImagePreview {...pic} />
        {/each}
      </div>
    {/if}
  {/each}
</div>
<div class="flex md:hidden flex-row w-full gap-4 pt-10 px-4 md:!px-40">
  {#each [50, 200, 0] as h, i}
    {#if render}
      <div
        class="flex flex-col gap-4 w-full"
        in:fade={{ duration: 250, delay: 200 }}
        out:fade={{ duration: 250, delay: 0 }}
      >
        <div
          style={`height: ${h * 3}px`}
          class="rounded-md w-full image-cover"
        ></div>
        {#each full_pics.slice((i * full_pics.length) / colCount, ((i + 1) * full_pics.length) / colCount) as pic, j}
          <ImagePreview {...pic} />
        {/each}
      </div>
    {/if}
  {/each}
</div>
