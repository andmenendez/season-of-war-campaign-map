<script lang="ts">
  import "leaflet/dist/leaflet.css";
  import "./leaflet-override.css"
  import mapImage from "$lib/assets/map.png";
  import numberedMapImage from "$lib/assets/numbered-map.png";
  import fadedMapImage from "$lib/assets/faded-map.png";
  import {
    type MapOptions,
    CRS,
    type TileLayerOptions,
    type GeoJSONOptions,
    ImageOverlay,
    type LatLngBoundsExpression,
  } from "leaflet";
  import { onMount } from "svelte";
  import { LeafletMap } from "svelte-leafletjs";
  import Territory from "./territory.svelte";
  import { MAX_H, MAX_W } from "$lib/constants";
  import { territories } from "$lib/store";
  
  let screenWidth: number;
  let leafletMap: LeafletMap;
  const mapOptions: MapOptions = {
      center: [0, 0],
      zoom: 1,
      minZoom: 0,
      maxZoom: 1.5,
      inertia: false,
      easeLinearity: 0,
      crs: CRS.Simple,
      preferCanvas: true,
      zoomAnimation: true,
      zoomControl: false,
      maxBoundsViscosity: 1,
      maxBounds: [
        [-1.2*MAX_H, -1.2*MAX_W],
        [2*MAX_H, 2*MAX_W],
      ]
    };

  const mobileMapOptions: MapOptions = {
    ...mapOptions,
    minZoom: -1,
  }

  const bounds = [
    [MAX_H, MAX_W],
    [0, 0],
  ] as LatLngBoundsExpression;

  onMount(() => {    
    if (leafletMap) {
      const map = leafletMap.getMap();
      if (map) {
        // console.log(window.innerWidth)
        if (window.innerWidth <= 640) {
          map.setMinZoom(-1)
          map.setMaxZoom(1)
        }
        else if (window.innerWidth <= 1024) {
          map.setMinZoom(-0.75)
        }
        map.fitBounds(bounds);
        new ImageOverlay(fadedMapImage, bounds).addTo(map);
      }
    }
  });
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="fixed left-0 top-0 w-screen h-full">
  <div class="relative w-full h-full">
    <LeafletMap
      bind:this={leafletMap}
      options={mapOptions}
    >
      {#each $territories as territory, i}

        <Territory noSpoiler={true} territory={territory}></Territory>

      {/each}
    </LeafletMap>
  </div>
</div>
