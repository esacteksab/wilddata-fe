<script>
let Name = ''
let Password = ''
let error;

export async function doPost() {

const res = await fetch(`http://localhost:5000/v1/login`, {
  method: "POST",
  headers: {
    "accept": 'application/json',
    "content-type": 'application/json'
  },
  body: JSON.stringify({Name, Password})
});

if (!res.ok) {
    error = (await res.json()).message;
    return;

}
}
</script>

<div>
  <form on:submit|preventDefault={doPost}>
    <div class="grid justify-items-stretch text-orange-500">
      <h2 class="text-2xl font-bold justify-self-center text-orange-500">
        Log In!
      </h2>
      <div class="mt-8 max-w-md justify-self-center">
        <div class="grid justify-self-center gap-6">
          <label class="block">
            <span class="text-orange-500">User name</span>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={Name}
              class="
                mt-1
                block
                w-full
                rounded-md
                shadow-sm
                focus:ring-2
                focus:ring-orange-300"
            />
          </label>
          <label class="block">
            <span class="text-orange-500">Password</span>
            <input
              type="password"
              id="password"
              name="password"
              bind:value={Password}
              class="
                mt-1
                block
                w-full
                rounded-md
                shadow-sm
                focus:ring-2
                focus:ring-orange-300"
            />
          </label>
          <button type="submit"> Submit </button>
        </div>
      </div>
    </div>
  </form>
  {#if error}
  <p class='mt-3 text-red-500 text-center font-semibold'>{error}</p>
{/if}
</div>

