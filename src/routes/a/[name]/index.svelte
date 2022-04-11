<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */

	export async function load({ params, fetch, session, context }) {
		const assets = `http://localhost:5000/v1/a/${params.name}`;
		const res = await fetch(assets);

		if (res.ok) return { props: { iassets: await res.json()	} };
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let iassets;
</script>

<main>

	<h1 class="text-8xl">{iassets[0].Name} Details</h1>

	{#each iassets as asset}
		<div class="">
			<b class="bg-gray-200 row-span-full">Asset Name:</b> {asset.Name} <br/>
			<b class="bg-gray-200 row-span-full">Org:</b> {asset.Org} <br/>
			{#if asset.Tags}
			<b class="bg-red-100"> Tags: </b>
			<ul class="px-2 bg-red-200">
				{#each Object.keys(asset.Tags[0]) as key}
				<li>
				{#each Object.values(asset.Tags) as value}
				  <b>{key}:</b>
				{#each Object.values(value[key]) as tag}
					{tag}
				{/each}
				 <br />
				{/each}
				{/each}
			</ul>
			{/if}
		</div>
	{/each}
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
		@apply my-16 mx-auto;
		@apply max-w-xs;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}
	}
</style>
