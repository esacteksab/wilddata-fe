<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch, session }) {
		// const orgs = `http://localhost:5000/v1/orgs/${url.params}`;
		const assets = `http://localhost:5000/v1/a/${params.name}`;
		const res = await fetch(assets);
        console.log(assets)
        console.log(res)
        // console.log(url)
		// console.log(res.json())

		if (res.ok) return { props: { assets: await res.json()	} };
		return {
			status: res.status,
			error: new Error(`Could not load ${assets}`)
		};
	}
</script>


<script>
    // create a prop
    export let assets;
</script>


<foo class="py-4 text-lg">

        Name: <b><a href="assets/{assets.Name}">{assets.Name}</a></b> <br/>
        Org: <b>{assets.Org}</b> <br/>
        {#if assets.Tags}
        Tags:
        <ul class="px-2 py-4">
            {#each Object.keys(assets.Tags[0]) as key}
            <li>
            {#each Object.values(assets.Tags) as value}
              <b>{key}:</b>
            {#each Object.values(value[key]) as tag}
                {tag}
            {/each}
             <br />
            {/each}
            {/each}
        </ul>
        {/if}
<br/>
    <hr />
</foo>

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

    a {
        @apply text-orange-700;
    }

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		/* p {
			@apply max-w-none;
		} */
	}
</style>