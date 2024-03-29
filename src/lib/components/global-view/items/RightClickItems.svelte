<script lang="ts">
  export let text: string
  export let click: () => void
</script>

<button class="flex text-gray-600 hover:text-black hover:bg-gray-100 py-1 px-2 rounded cursor-pointer" on:click|stopPropagation={click}>
  <div>{text}</div>
</button>
