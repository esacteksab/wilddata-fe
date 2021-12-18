<script>
    import { onMount } from "svelte";
    import Org from "./Org.svelte";
    // define data holding variable
    export let orgs = [];

onMount(async () => {
    await fetch(`http://localhost:5000/v1/orgs`)
    .then(r => r.json())
    .then(data => {
        orgs = data;
        console.log('json:', data)
    });
})

</script>

{#if orgs}
    <ul>
    {#each orgs as org }
            <Org {org} />
    {/each}
    </ul>
{:else}
    <p class="loading">loading...</p>
{/if}