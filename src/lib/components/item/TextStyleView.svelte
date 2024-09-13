<script lang="ts">
  import { TextType } from "$lib/utils/model/TextType";

  export let textType: TextType;
  export let title: String;
</script>

<div class="mx-3">
  {#if textType == TextType.LARGE}
    <h3 class="text-4xl md:text-4xl font-semibold text-white poppins-regular">{title}</h3>
  {:else if textType == TextType.MEDIUM}
    <h3 class="text-xl font-semibold text-white poppins-regular">{title}</h3>
  {:else}
    <h3 class="text-base font-semibold text-white poppins-semi-bold">{title}</h3>
  {/if}
</div>
