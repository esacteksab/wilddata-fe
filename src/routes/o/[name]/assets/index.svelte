<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */

  export async function load({ params, fetch, session }) {
    const url = `http://localhost:5000/v1/o/${params.name}/assets`;
    const res = await fetch(url);

    if (res.ok) return { props: { oassets: await res.json() } };

    return {
      status: res.status,

      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
import Asset from "$lib/Asset.svelte";

  export let oassets;
</script>

<main>
  <h1 class="text-8xl">{oassets[0].Org}'s Assets</h1>

  {#each oassets as asset}
  {#if asset.Tags}
    <div class="my-14">

      <table class="table-auto border-collapse border-orange-600">
        <thead>
          <tr class="bg-orange-600">
            <th class="text-left">
              <a href="/a/{asset.Name}">{asset.Name}</a>
            </th>
            <th>
              <!-- empty for values -->
            </th>
          </tr>
        </thead>

        <tbody>
          {#each Object.keys(asset.Tags[0]) as key}
          <tr class="even:bg-orange-200 odd:bg-orange-400">
            <td class="pr-4 text-left">
              <b>
                {key}:
              </b>
            </td>
            <td class="pl-4 text-right">
              {#each Object.values(asset.Tags) as value}
              {#each Object.values(value[key]) as tag}
              {tag}
              {/each}
              {/each}
            </td>
          </tr>

            {/each}
        </tbody>


      </table>
    </div>
    {/if}
  {/each}
</main>

<style style lang="postcss">
  main {
    /* @apply text-center; */
    @apply p-4;
    @apply mx-auto;
  }

  a {
    @apply underline;
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

  table {
    @apply border-orange-600;
  }

  @screen sm {
    h1 {
      @apply max-w-none;
    }
  }
</style>
