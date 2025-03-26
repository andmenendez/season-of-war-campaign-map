<script>
let { children } = $props();
</script>
<div class="h-max w-full background-map">
  <div class="flex flex-col gap-2 p-4 w-full h-full backdrop-blur-3xl bg-black/50">
    {@render children()}
  </div>
</div>
<style>
  .background-map {
    background-image: url("../../lib/assets/low-res-map.png");
    background-size: cover;
    background-position: 50% 50%;
    background-color: black;
  }
</style>