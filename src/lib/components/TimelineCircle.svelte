<script lang="ts">
  import { currentWeek, selectedWeek } from "$lib/store";

  const { timepoint }: {timepoint: number} = $props();
</script>

<button 
  disabled={timepoint > $currentWeek} 
  aria-label="Select Start" 
  onclick={()=>{
    selectedWeek.set(timepoint);
  }} 
  class={
    `select-this-week-button ${$selectedWeek === timepoint && "selected-week"} 
    transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 
    ${$selectedWeek >= timepoint ? "opacity-100 animate-pulse" : 
    timepoint > $currentWeek ? "opacity-10": "opacity-60"}`
  }>
</button>



<style>
  .selected-week {
      background: rgb(255,242,217);
background: -moz-radial-gradient(circle, rgba(255,242,217,1) 5%, rgba(255,242,217,1) 11%, rgba(255,155,51,1) 17%, rgba(60,76,76,1) 35%, rgba(255,242,217,0) 95%);
background: -webkit-radial-gradient(circle, rgba(255,242,217,1) 5%, rgba(255,242,217,1) 11%, rgba(255,155,51,1) 17%, rgba(60,76,76,1) 35%, rgba(255,242,217,0) 95%);
background: radial-gradient(circle, rgba(255,242,217,1) 5%, rgba(255,242,217,1) 11%, rgba(255,155,51,1) 17%, rgba(60,76,76,1) 35%, rgba(255,242,217,0) 95%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fff2d9",endColorstr="#fff2d9",GradientType=1);
  }

  .timeline-wrapper {
      max-width: 90%;
      margin: 0px auto ;
  }
  button.select-this-week-button {
      width:8px;
      height:8px;
  }
  button.navigate-weeks-button {
      width:28px;
      height:28px;
  }
  
  @media only screen and (min-width: 640px) {
      .timeline-wrapper {
          max-width: 600px;
          margin: 0px 8px ;
          padding: 8px 16px 8px 10px;
      }
      button.navigate-weeks-button  {
          width: 16px;
          height: 16px;
          transform: translateY(-2px);
      }
      button.select-this-week-button {
          width: 14px;
          height: 14px;
      }
  }
  @media only screen and (min-width: 1024px) {
      .timeline-wrapper {
          max-width: 600px;
      }
      button.navigate-weeks-button  {
          width: 20px;
          height: 20px;
      }
      button.select-this-week-button {
          width: 20px;
          height: 20px;
      }
  }
</style>