<script>
    import Orgs from "$lib/Orgs.svelte";
    let orgs;
  </script>
  
  
  <h1 class="text-8xl">Orgs</h1>
  <main>
      <Orgs {orgs} />
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

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>
