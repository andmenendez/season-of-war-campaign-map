<script lang="ts">
    import { CURRENT_WEEK, selectedWeek } from "$lib/store";
    import "../../app.css";
    import chevron from "$lib/assets/triangle.svg"
    import chevronLeft from "$lib/assets/triangle-left.svg"

</script>

<div class="timeline-wrapper bg-white/15 mr-2 mt-2 w-full flex items-center justify-end px-2 py-2 rounded-full backdrop-blur-sm border-1 border-black/30">
    <button class="navigate-weeks-button shrink-0 opacity-50 hover:opacity-100 mr-2" onclick={()=> {
        selectedWeek.update(w => Math.max(0, w-1));
    }} >
        <img src={chevronLeft} alt="chevron-left" class="!rotate-180 w-5 h-5 shrink-0 brightness-200 hover:contrast-200"/>
    </button>
    
    <button disabled={1-1 > CURRENT_WEEK} aria-label="Select Week 1" onclick={()=>{
        selectedWeek.set(1-1);
    }} class={`select-this-week-button ${$selectedWeek === 1-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 1-1 ? "opacity-100": 1-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></button>
    
    <div class={`grow transition-opacity h-1 w-full bg-white min-w-4 ${$selectedWeek >= 2-1 ? "opacity-100": "opacity-60"}`}></div>
    
    <button disabled={2-1 > CURRENT_WEEK} aria-label="Select Week 2" onclick={()=>{
        selectedWeek.set(2-1);
    }} class={`select-this-week-button ${$selectedWeek === 2-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 2-1 ? "opacity-100": 2-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></button>
    
    <div class={`grow transition-opacity h-1 w-full bg-white min-w-4 ${$selectedWeek >= 3-1 ? "opacity-100" : 3-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></div>

    <button disabled={3-1 > CURRENT_WEEK} aria-label="Select Week 3" onclick={()=>{
        selectedWeek.set(3-1);
    }} class={`select-this-week-button ${$selectedWeek === 3-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 3-1 ? "opacity-100": 3-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></button>
    
    <div class={`grow transition-opacity h-1 w-full bg-white min-w-4 ${$selectedWeek >= 4-1 ? "opacity-100" : 4-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></div>

    <button disabled={4-1 > CURRENT_WEEK} aria-label="Select Week 4" onclick={()=>{
        selectedWeek.set(4-1);
    }} class={`select-this-week-button ${$selectedWeek === 4-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 4-1 ? "opacity-100": 4-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></button>
    
    <div class={`grow transition-opacity h-1 w-full bg-white min-w-4 ${$selectedWeek >= 5-1 ? "opacity-100" : 5-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></div>

    <button disabled={5-1 > CURRENT_WEEK} aria-label="Select Week 5" onclick={()=>{
        selectedWeek.set(5-1);
    }} class={`select-this-week-button ${$selectedWeek === 5-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 5-1 ? "opacity-100": 5-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></button>
    
    <div class={`grow transition-opacity h-1 w-full bg-white min-w-4 ${$selectedWeek >= 6-1 ? "opacity-100" : 6-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></div>

    <button disabled={6-1 > CURRENT_WEEK} aria-label="Select Week 6" onclick={()=>{
        selectedWeek.set(6-1);
    }} class={`select-this-week-button ${$selectedWeek === 6-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 6-1 ? "opacity-100": 6-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></button>
    
    <div class={`grow transition-opacity h-1 w-full bg-white min-w-4 ${$selectedWeek >= 7-1 ? "opacity-100" : 7-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></div>

    <button disabled={7-1 > CURRENT_WEEK} aria-label="Select Week 7" onclick={()=>{
        selectedWeek.set(7-1);
    }} class={`select-this-week-button ${$selectedWeek === 7-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 7-1 ? "opacity-100": 7-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></button>
    
    <div class={`grow transition-opacity h-1 w-full bg-white min-w-4 ${$selectedWeek >= 8-1 ? "opacity-100" : 8-1 > CURRENT_WEEK ? "opacity-10": "opacity-60"}`}></div>

    <button disabled={8-1 > CURRENT_WEEK} aria-label="Select Week 8" onclick={()=>{
        selectedWeek.set(8-1);
    }} class={`select-this-week-button ${$selectedWeek === 8-1 && "selected-week"} transition-all rounded-full border-white border-2 w-6 h-6 md:w-7 md:h-7 shrink-0 ${$selectedWeek >= 8-1 ? "opacity-100": 8-1 > CURRENT_WEEK ? "opacity-10": "opacity-60" }`}></button>

    <button class="navigate-weeks-button shrink-0 opacity-50 hover:opacity-100" onclick={()=> {
        selectedWeek.update(w => Math.min(CURRENT_WEEK, w+1));
    }} >
        <img src={chevron} alt="chevron-right" class="w-5 h-5 shrink-0 ml-2 brightness-200 hover:contrast-200"/>
    </button>
</div>


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