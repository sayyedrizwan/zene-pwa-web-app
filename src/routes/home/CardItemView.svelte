<script lang="ts">
    export let title : String
    export let desc : String
    export let emoji : String
    export let img : string
</script>

<div class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
  <div class="relative space-y-8 py-12 p-8">
    <img src={img} class="w-16" width="512" height="512" alt="burger illustration" />

    <div class="space-y-2">
      <h5 class="text-xl poppins-semi-bold text-gray-700 transition group-hover:text-secondary">{title}</h5>
      <p class="text-gray-600 poppins-regular">{desc}</p>
    </div>
    <div class="flex items-center justify-between group-hover:text-secondary">
      <span class="text-sm"></span>
      <h3 class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">{emoji}</h3>
    </div>
  </div>
</div>
