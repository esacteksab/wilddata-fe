<script>
  // create a prop
  export let asset;
</script>

<foo class="py-4 text-lg">
  Name: <b><a href="assets/{asset.Name}">{asset.Name}</a></b> <br />
  Org: <b>{asset.Org}</b> <br />
  {#if asset.Tags}
    Tags:
    <ul class="px-2 py-4">
      {#each Object.keys(asset.Tags[0]) as key}
        <li>
          {#each Object.values(asset.Tags) as value}
            <b>{key}:</b>
            {#each Object.values(value[key]) as tag}
              {tag}
            {/each}
            <br />
          {/each}
        </li>{/each}
    </ul>
  {/if}
  <br />
  <hr />
</foo>
