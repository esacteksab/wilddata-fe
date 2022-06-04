<script>
  import { onMount } from "svelte";
  import Asset from "./Asset.svelte";
  // define data holding variable
  export let assets = [];

  onMount(async () => {
    await fetch(`http://localhost:5000/v1/assets`)
      .then((r) => r.json())
      .then((data) => {
        assets = data;
        console.log("json:", data);
      });
  });
</script>

{#if assets}
  <ul>
    {#each assets as asset}
      <Asset {asset} />
    {/each}
  </ul>
{:else}
  <p class="loading">loading...</p>
{/if}
