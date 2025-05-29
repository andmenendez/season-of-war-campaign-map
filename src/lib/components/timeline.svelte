<script lang="ts">
    import { currentWeek, selectedWeek } from "$lib/store";
    import "../../app.css";
    import chevron from "$lib/assets/triangle.svg"
    import chevronLeft from "$lib/assets/triangle-left.svg"
  import TimelineCircle from "./TimelineCircle.svelte";
  import TimelineLine from "./TimelineLine.svelte";

</script>

<div class="timeline-wrapper bg-white/15 mr-4 mt-4 w-full flex items-center justify-end px-2 py-2 rounded-full backdrop-blur-sm border-1 border-black/30">
    <button class="navigate-weeks-button shrink-0 opacity-50 hover:opacity-100 mr-2" onclick={()=> {
        selectedWeek.update(w => Math.max(0, w-1));
    }} >
        <img src={chevronLeft} alt="chevron-left" class="!rotate-180 w-5 h-5 shrink-0 brightness-200 hover:contrast-200"/>
    </button>
    <!--  -->
    <!-- <TimelineCircle timepoint={0} /> -->
    <!-- <TimelineLine at={0} /> -->

    <TimelineCircle timepoint={1} />
    <!--  -->
    <TimelineLine at={1} />
    <!--  -->
    <TimelineCircle timepoint={2} />
    <!--  -->
    <TimelineLine at={2} />
    <!--  -->
    <TimelineCircle timepoint={3} />
    <!--  -->
    <TimelineLine at={3} />
    <!--  -->
    <TimelineCircle timepoint={4} />
    <!--  -->
    <TimelineLine at={4} />
    <!--  -->
    <TimelineCircle timepoint={5} />
    <!--  -->
    <TimelineLine at={5} />
    <!--  -->
    <TimelineCircle timepoint={6} />
    <!--  -->
    <TimelineLine at={6} />
    <!--  -->
    <TimelineCircle timepoint={7} />
    <!--  -->
    <TimelineLine at={7} />
    <!--  -->
    <TimelineCircle timepoint={8} />
    <!--  -->
    <button class="navigate-weeks-button shrink-0 opacity-50 hover:opacity-100" onclick={()=> {
        selectedWeek.update(w => Math.min($currentWeek, w+1));
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