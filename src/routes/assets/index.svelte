<script>
  import Assets from "$lib/Assets.svelte";
  let assets;
</script>

<main>
  <div class=" grid grid-cols-10 gap-5 content-start">
    <div class="col-start-2 col-span-3">
      <h1>Foo</h1>
    </div>
    <div class="col-start-2 col-span-3 mx-1">
      <Assets {assets} />
    </div>
  </div>
</main>

<style style lang="postcss">
  main {
    /* @apply text-center; */
    @apply p-4;
    @apply mx-auto;
  }

  h1 {
    @apply text-orange-600;
    @apply uppercase;
    @apply text-6xl;
    @apply font-thin;
    @apply leading-tight;
    @apply my-1;
    @apply mx-1;
  }

  @screen sm {
    h1 {
      @apply max-w-none;
    }
  }
</style>
