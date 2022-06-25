<script lang="ts">
  let name = "";
  let email = "";
  let cemail = "";
  let vemail = false;
  let password = "";
  let cpassword = "";
  let error = "";

  export async function doPost() {
    const res = await fetch(`http://localhost:5000/v1/users`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ name,  email, cemail, vemail, password, cpassword }),
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
        Sign Up!
      </h2>
      <div class="mt-8 justify-self-center">
        <div class="grid gap-6">
          <label class="block">
            <span class="text-orange-500">User name</span>
            <input
              type="text"
              id="username"
              name="username"
              bind:value={name}
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
              bind:value={password}
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
            <span class="text-orange-500">Confirm Password</span>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              bind:value={cpassword}
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
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  shadow-sm
                  focus:ring-2
                  focus:ring-orange-300 "
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Confirm Email address</span>
            <input
              type="email"
              id="cemail"
              name="cemail"
              bind:value={cemail}
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
            <input
              type="checkbox"
              class="
                        appearance-none
                        rounded
                        border-orange-300
                        hover:bg-orange-300
                        hover:checked:bg-orange-300
                        focus:checked:bg-orange-300
                        shadow-sm
                        checked:bg-orange-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-orange-200"
            />
            <span class="text-orange-500 text-xs">
              Agree to the <a class="underline " href="/tos">terms</a> I didn't read.
            </span>
          </label>
          <button type="submit" class="border-solid text-white"> Submit </button>
        </div>
      </div>
    </div>
    {#if error}
    <p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
  {/if}
  </form>

</div>