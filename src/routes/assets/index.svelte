<script>
  import Assets from "$lib/Assets.svelte";
  let assets;
</script>

<h1 class="text-8xl">Assets</h1>
<main>
  <Assets {assets} />
</main>

<style style lang="postcss">
  main {
    /* @apply text-center; */
    @apply p-4;
    @apply mx-auto;
  }

  h1 {
    @apply text-red-600;
    @apply uppercase;
    @apply text-6xl;
    @apply font-thin;
    @apply leading-tight;
    @apply my-16 mx-auto;
    @apply max-w-xs;
  }

  @screen sm {
    h1 {
      @apply max-w-none;
    }
  }
</style>
