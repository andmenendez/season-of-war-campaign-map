<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  var render = false;
  onMount(() => {
    render = true;
  });

  const paths = [
    {name: "All", path: "/all" },
    {name: "Asturias", path: "/album/asturias"},
    {name: "Canal", path: "/album/canal"},
    {name: "Jardin", path: "/album/jardin"},
    {name: "New York", path: "/album/newYork"},
    {name: "Yosemite", path: "/album/yosemite"},
  ];
</script>

<div class="flex flex-col py-10 px-4 md:!px-40 gap-2 w-full">
  {#if render}
    <ul
      class="w-full ring-1 ring-white/5 rounded-lg p-2"
      in:slide={{
        duration: 500,
        delay: 0,
      }}
      out:slide={{
        duration: 200,
        delay: 0,
      }}
    >
      {#each paths as path}
        <li>
          <button
            on:click={() => {
              render = false;
              setTimeout(()=>goto(path.path), 500);
            }}
            class="p-1 text-start px-1 hover:underline w-full hover:bg-white/5 rounded-md"
            >{path.name}</button
          >
        </li>
      {/each}
    </ul>
  {/if}
</div>
