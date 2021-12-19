<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */

	export async function load({ page, fetch, session }) {
		const url = `http://localhost:5000/v1/orgs/${page.params.name}`;
		const res = await fetch(url);

        // console.log(url)
		// console.log(res.json())

		if (res.ok) return { props: { org: await res.json()	} };
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let org;
</script>

<main>

    <h1 class="text-8xl">{org.Name} Org</h1>


    EMail: <b>{org.EMail}</b> <br/>
    <a href="{org.Name}/assets/">View {org.Name} Org Assets</a>
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

	/* p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	} */

    a {
        @apply text-blue-700;
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




