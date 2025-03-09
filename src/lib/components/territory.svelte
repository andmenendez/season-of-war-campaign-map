<script lang="ts">;
	import { selectedFactions } from './../store';
	import { GAColor, GABorderColor } from './../territories';
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';
  import './leaflet-override.css';
  import { type TerritoryType } from "$lib/territories";
  import { Polygon, Popup, Tooltip } from "svelte-leafletjs";
  import { flattenSVG } from '$lib/utlils';
  import { MAX_H } from '../constants';
  import type { LatLngExpression } from 'leaflet';
  import { selectedWeek } from '$lib/store';
  import GrandAllianceCrest from './GrandAllianceCrest.svelte';
  
	let { territory }: {territory: TerritoryType} = $props();
  let points: LatLngExpression[] = $state([])
  const xmlns = "http://www.w3.org/2000/svg";
  
  const offset_x = territory.offset.x;
  const offset_y =  territory.offset.y;

  let currentOwner = $state(territory.owner[territory.owner.length-1]);

  onMount(()=>{
    const path = territory.path
    
    var svgElem = document.createElementNS(xmlns, "svg");
    var pathComponent = document.createElementNS(xmlns, "path");
    pathComponent.setAttribute("d", path);
    svgElem.append(pathComponent);
    const flattened = flattenSVG(svgElem);

    points = flattened[0].points.map(([x,y])=>[-y/2+MAX_H-offset_y/2,x/2+offset_x/2]);
  })

  $effect(()=> {
    if (territory.owner.length > $selectedWeek) {

      currentOwner = territory.owner[$selectedWeek];
    }
  })
  const polygonTerritories =document.getElementsByClassName("tooltip-class-123")
  for (let core of polygonTerritories) {
    console.log(core)
  }
</script> 


<Polygon
  latLngs={points} 
  weight={2} 
  opacity={1}
  fillOpacity={$selectedFactions.includes(currentOwner) ? .3 : .2}
  color={`${$selectedFactions.includes(currentOwner) ? GABorderColor[currentOwner] : "#121711"}`} 
  fillColor={`${$selectedFactions.includes(currentOwner) ? GAColor[currentOwner] : GAColor[currentOwner]}`} 
  options={{noClip: true, className: ".polygon-class-123" }}

>
  <Tooltip options={{className: ".tooltip-class-123"}}><div class="">{territory.name}</div></Tooltip>  
  <Popup options={{keepInView: false, autoPanPadding: [0, 100]}}>
    <div class="flex flex-col gap-2 max-w-[80vw] pb-8">
      <div class="flex w-full justify-between items-center">
        <div class="text-xl font-semibold">{territory.name}</div>
          <GrandAllianceCrest ga={currentOwner}/>
      </div>
        <div class="px-1 text-base">{territory.description}</div>
        <div class="flex flex-col">
          <div class="py-1 px-2 bg-slate-500 rounded-sm">{territory.bonuses[0].ability}</div>
          <div class="px-1">
          <div class="flex flex-col gap-2 p-2 bg-slate-500/50 rounded-b-sm">
            {#if territory.bonuses[0].declare}
            <span><strong class="font-extrabold">Declare:</strong> {territory.bonuses[0].declare}</span>
            {/if}
            <span><strong class="font-extrabold">Effect:</strong> {territory.bonuses[0].effect}</span>
          </div>
          </div>
        </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full py-1 flex items-center justify-center gap-2 bg-white/20 rounded-b-md">
      {#each territory.properties as prop, i}
      <div class="uppercase">{prop}

        {#if i < territory.properties.length - 1}
        ,
        {/if}
      </div>
      {/each}

    </div>
</Popup>
</Polygon>
