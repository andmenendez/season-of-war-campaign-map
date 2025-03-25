<script lang="ts">
  import { selectedWeek, currentWeek } from "$lib/store";

  const {at} : {at: number} = $props();
</script>

<div class={`grow transition-opacity h-1 w-full bg-white/50 min-w-4 
  ${
    $selectedWeek-1 >= at ? "opacity-100 animate-pulsem bg-white" : 
      at > $currentWeek ? "opacity-10": "opacity-50"
    }`}>
</div>