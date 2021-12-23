<script>
    export let login;
</script>

<div class="grid justify-items-stretch text-orange-500">
    <h2 class="text-2xl font-bold justify-self-center text-orange-500">Sign Up!</h2>
    <div class="mt-8 max-w-md justify-self-center">
      <div class="grid justify-self-center gap-6">
        <label class="block">
          <span class="text-orange-500">User name</span>
          <input
            type="text"
            class="
              mt-1
              block
              w-full
              rounded-md
              shadow-sm
              focus:ring-2
              focus:ring-orange-300
            "
            placeholder="Username"
          />
        </label>
        <label class="block">
          <span class="text-gray-700">Email address</span>
          <input
            type="email"
            class="
              mt-1
              block
              w-full
              rounded-md

              shadow-sm
              focus:border-orange-500 
              focus:ring-2
              focus:ring-orange-200 
              focus:ring-opacity-50
            "
            placeholder="user@domain.tld"
          />
        </label>
        <label class="block">
            <span class="text-gray-700">Confirm Email address</span>
            <input
              type="email"
              class="
                mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
              placeholder="user@domain.tld"
            />
          </label>

        
        <div class="block">
          <div class="mt-2">
            <div>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  class="
                    rounded
                    border-gray-300

                    shadow-sm
                    focus:border-orange-300
                    focus:ring
                    focus:ring-offset-0
                    focus:ring-orange-200
                    focus:ring-opacity-50
                  "
                  checked
                />
                <span class="ml-2">Agree to the terms I didn't read.</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>