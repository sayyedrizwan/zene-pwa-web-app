<script lang="ts">
  export let img: string
  export let title: string
  export let functions: () => void
</script>

<div class="flex-none py-6 px-3 first:pl-6 last:pr-6">
  <button class="px-4 py-2 font-semibold text-sm text-slate-700 border border-slate-300 rounded-xl flex hover-animation hover:bg-gray-950" on:click|stopPropagation={functions}>
    <img src={img} alt="icon" class="size-5 me-3"/>
    <h3 class="text-white urbanist-regular text-sm me-2">{title}</h3>
  </button>
</div>
