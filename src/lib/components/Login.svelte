<script lang="ts">

  let username = ''
  let email = ''
  let cemail = ''
  let password = ''
  let cpassword = ''
  let result = null

  async function doPost () {

      const res = await fetch(`http://localhost:5000/v1/users`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          cemail,
          password,
          cpassword
        })
      })


    const json = await res.json()
    result = JSON.stringify(json)

    console.log(result)
    }
</script>

<main>
  <form>
    <div class="grid justify-items-stretch text-orange-500">
      <h2 class="text-2xl font-bold justify-self-center text-orange-500">Log In!</h2>
      <div class="mt-8 max-w-md justify-self-center">
        <div class="grid justify-self-center gap-6">
          <label class="block">
            <span class="text-orange-500">User name</span>
            <input
              type="text"
              id="username"
              name="username"
              bind:value={username}
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
              bind:value="{password}"
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
          <button type="button" on:click={doPost}>
            Submit
          </button>
        </div>
      </div>
    </div>

  </form>
</main>

