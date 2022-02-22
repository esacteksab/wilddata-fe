<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch, session }) {
		// const orgs = `http://localhost:5000/v1/orgs/${url.params}`;
		const orgs = `http://localhost:5000/v1/o/${params.name}`;
		const res = await fetch(orgs);

        // console.log(url)
		// console.log(res.json())

		if (res.ok) return { props: { org: await res.json()	} };
		return {
			status: res.status,
			error: new Error(`Could not load ${orgs}`)
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




