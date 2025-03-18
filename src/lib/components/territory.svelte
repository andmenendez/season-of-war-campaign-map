<script lang="ts">;
	import { contextBanner, hideConflict, hideSpoilers, hideUI, selectedFactions } from './../store';
	import { GAColor, GABorderColor, GA, type GAType } from './../territories';
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';
  import './leaflet-override.css';
  import { type TerritoryType } from "$lib/territories";
  import { Polygon, Popup, Tooltip } from "svelte-leafletjs";
  import { flattenSVG } from '$lib/utlils';
  import combat from '$lib/assets/combat.svg';
  import { MAX_H } from '../constants';
  import type { LatLngExpression } from 'leaflet';
  import { selectedWeek } from '$lib/store';
  import GrandAllianceCrest from './GrandAllianceCrest.svelte';
  import { Youtube } from 'svelte-youtube-lite';
  import playButton from "$lib/assets/triangle.svg"
  
	let { territory }: {territory: TerritoryType} = $props();
  let points: LatLngExpression[] = $state([])
  const xmlns = "http://www.w3.org/2000/svg";
  
  const offset_x = territory.offset.x;
  const offset_y =  territory.offset.y;
  const defaultHideUIState = $hideUI;

  let currentOwner : GAType = $state(territory.owner[territory.owner.length-1]);
  let currentAttacker : GAType = $state(territory.attacker[territory.attacker.length-1]);

  onMount(()=>{
    const path = territory.path
    
    var svgElem = document.createElementNS(xmlns, "svg");
    var pathComponent = document.createElementNS(xmlns, "path");
    pathComponent.setAttribute("d", path);
    svgElem.append(pathComponent);
    const flattened = flattenSVG(svgElem);

    points = flattened[0].points.map(([x,y])=>[-y/2+MAX_H-offset_y/2,x/2+offset_x/2]);
  })

  selectedWeek.subscribe((week)=> {
    if (territory.owner.length > week) {
      currentOwner = territory.owner[week];
    } else {
      currentOwner = territory.owner[territory.owner.length-1];
    }
    if (territory.attacker.length > week) {
      currentAttacker = territory.attacker[week];
    } else {
      currentAttacker = GA.None
    }
  })
</script> 

{#if points.length > 0}
<Polygon
  latLngs={points} 
  weight={2} 
  opacity={1}
  fillOpacity={$hideUI ? 0 : $selectedFactions.includes(currentOwner) ? .3 : .2}
  color={$hideUI ? "rgba(0,0,0,0)" : `${$selectedFactions.includes(currentOwner) ? GABorderColor[currentOwner] : "rgba(18,23,17,0.25)"}`} 
  fillColor={`${$selectedFactions.includes(currentOwner) ? GAColor[currentOwner] : GAColor[currentOwner]}`} 
  options={{noClip: true, className: "polygon-class-123" }}
  events={{
    mouseover: () => {
      contextBanner.set({
        territory: territory.name,
        owner: currentOwner,
        properties: territory.properties,
      })
    },
    mouseout: () => {
      contextBanner.set(
        { territory: "",
        owner: "-",
        properties: []
      })
    },
    popupopen: (e)=> {if (window.innerWidth < 640) hideUI.set(true)},
    popupclose: (e)=> {if (window.innerWidth < 640) hideUI.set(defaultHideUIState)},
  }}
>
    
  <Tooltip options={{permanent: true ? true : false, className: "attacker", offset: [-50, 0]}}>
    <img 
      src={combat} 
      alt="Conflict"
      class={`w-[72px] h-[72px] inline animate-pulse ${!$hideConflict && currentAttacker !== (GA.None as GAType) ? "" :"!hidden"}`} 
    />
  </Tooltip>


  <Popup events={{

  }} options={{keepInView: false, autoPanPadding: [0, 100], closeOnEscapeKey: true}}>
    <div class="flex flex-col gap-2 max-w-[80vw] pb-8">
      
        {#if !$hideConflict}
          <div class={`flex w-full justify-between items-center ${currentAttacker !== GA.None ? "flex-col gap-2" : "flex-row"}`}>
            <div class="text-2xl font-semibold">{territory.name}</div>
            <div class="flex items-center gap-2">
              <GrandAllianceCrest ga={currentOwner}/>
              {#if currentAttacker !== GA.None}
                <img 
                class="w-6 h-6 animate-pulse"
                src={combat} 
                alt="Conflict"
                />
                <GrandAllianceCrest ga={currentAttacker}/>
              {/if}
            </div>
          </div>
        {:else}
          <div class={`flex w-full justify-between items-center flex-row`}>
            <div class="text-2xl font-semibold">{territory.name}</div>
            <div class="flex items-center gap-2">
              <GrandAllianceCrest ga={currentOwner}/>
            </div>
          </div>
        {/if}
        <div class="px-1 text-base">{territory.description}</div>
          {#if !$hideConflict && currentAttacker !== GA.None}
          <a target="_blank" class="group relative w-full h-40 overflow-hidden rounded-md" href={`https://www.youtube.com/watch?v=${"wvXhMHYSup0"}`}>
            <img alt="Battle Report Thumbnail" class={`absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4 ${$hideSpoilers ? "relative blur-2xl":""}`} src={"https://img.youtube.com/vi/wvXhMHYSup0/0.jpg"}>
            <img src={playButton} alt="Play Video" class="absolute hover:opacity-80 contrast-200 brightness-200 left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4" />
          </a>
        {/if}
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
{/if  }