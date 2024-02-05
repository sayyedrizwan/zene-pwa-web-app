<script lang="ts">
  export let currentDuration: Boolean
  export let totalDuration: Boolean


  function changeTo(){
    console.log('ddd')
  }
</script>

<div>
  <div class="flex mt-6">
    <div class="w-full mx-2 md:mx-8 flex">
      <p class="text-white urbanist-regular text-base md:text-lg">0:00</p>
      <div class="w-full mx-3 cursor-pointer md:m-0.5 md:mx-3">
        <input type="range" on:dragend={changeTo}/>
      </div>
      
      <p class="text-white urbanist-regular text-base md:text-lg">3:34</p>
    </div>
  </div>

</div>
