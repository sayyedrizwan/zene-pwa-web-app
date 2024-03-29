<script lang="ts">
  export let img: string
  export let title: string
  export let click: () => void
</script>

<button class="flex-none first:pl-6 self-center me-6" on:touchmove|stopPropagation={click} on:touchstart|stopPropagation={click}>
  <div class="flex flex-col items-center justify-center gap-3">
    <div class="size-16 border-2 border-white rounded-full">
      <img src={img} alt="play" class="size-16 p-4" />
    </div>
    <p class="text-white -translate-y-1.5 urbanist-regular text-base">{title}</p>
  </div>
</button>
