<script lang="ts">
  
</script>

<div class="rounded-full overflow-hidden w-full max-w-[300px] bg-white/10 h-4">
  <div class="animate-right w-0 h-full overflow-hidden">
    <div class="pattern w-full h-full overflow-hidden"></div>
  </div>
</div>
<style>
  .animate-right {
    background-color: #e4c465;
    animation: progressBar 15s ease-in-out;
    animation-fill-mode: forwards; 
  }
  
  @keyframes progressBar {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  .pattern {
    animation: animateBg 30s linear;
    background-image: repeating-linear-gradient(-45deg, #fae3b8 0, #fae3b8 7px, transparent 0, transparent 50%);
    background-size: 22px 22px;
    background-color: black;
    background-repeat: repeat;
    /* background-position: 0 0; */
  }
  
  @keyframes animateBg {
    0% { 
      background-position: 0 0px;
    }
    100% { 
      background-position: 0 2000px;
    }
  }
</style>