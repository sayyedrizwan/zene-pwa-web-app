<script lang="ts">

</script>
<button on:touchmove={close} on:touchstart={close} on:click|stopPropagation={close} class="fixed top-0 left-0 right-0 h-full w-full z-[1000] bg-black bg-opacity-70 p-7 animate__animated animate__fadeIn">
  <div class="fixed top-0 left-0 right-0 h-full w-full animate__animated animate__fadeInUp animate__slow">
    <div class="absolute top-0 left-0 h-full w-full bg-maincolor">
        
    </div>
  </div>
</button>
