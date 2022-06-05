<script>
  // create a prop
  export let asset;
</script>

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
