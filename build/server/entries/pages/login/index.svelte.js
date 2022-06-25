import {
  c as create_ssr_component,
  b as add_attribute,
  e as escape,
} from "../../../chunks/index-fa0ff56f.js";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Name = "";
  let Password = "";
  let error;
  async function doPost() {
    const res = await fetch(`http://localhost:5000/v1/login`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ Name, Password }),
    });
    if (!res.ok) {
      error = (await res.json()).message;
      return;
    }
  }
  if ($$props.doPost === void 0 && $$bindings.doPost && doPost !== void 0)
    $$bindings.doPost(doPost);
  return `<div><form><div class="${"grid justify-items-stretch text-orange-500"}"><h2 class="${"text-2xl font-bold justify-self-center text-orange-500"}">Log In!
      </h2>
      <div class="${"mt-8 max-w-md justify-self-center"}"><div class="${"grid justify-self-center gap-6"}"><label class="${"block"}"><span class="${"text-orange-500"}">User name</span>
            <input type="${"text"}" id="${"name"}" name="${"name"}" class="${"mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-300"}"${add_attribute(
    "value",
    Name,
    0
  )}></label>
          <label class="${"block"}"><span class="${"text-orange-500"}">Password</span>
            <input type="${"password"}" id="${"password"}" name="${"password"}" class="${"mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-300"}"${add_attribute(
    "value",
    Password,
    0
  )}></label>
          <button type="${"submit"}">Submit </button></div></div></div></form>
  ${
    error
      ? `<p class="${"mt-3 text-red-500 text-center font-semibold"}">${escape(
          error
        )}</p>`
      : ``
  }</div>`;
});
export { Login as default };
