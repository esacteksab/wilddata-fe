import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index-7340f048.js";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  let username = "";
  let password = "";
  return `<main><form><div class="${"grid justify-items-stretch text-orange-500"}"><h2 class="${"text-2xl font-bold justify-self-center text-orange-500"}">Log In!</h2>
      <div class="${"mt-8 max-w-md justify-self-center"}"><div class="${"grid justify-self-center gap-6"}"><label class="${"block"}"><span class="${"text-orange-500"}">User name</span>
            <input type="${"text"}" id="${"username"}" name="${"username"}" class="${"mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-300"}"${add_attribute("value", username, 0)}></label>
          <label class="${"block"}"><span class="${"text-orange-500"}">Password</span>
            <input type="${"password"}" id="${"password"}" name="${"password"}" class="${"mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-300"}"${add_attribute("value", password, 0)}></label>
          <button type="${"button"}">Submit
          </button></div></div></div></form></main>`;
});
const Login_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="${"container mx-auto"}">${validate_component(Login, "Login").$$render($$result, { name: "Login" }, {}, {})}</div></main>`;
});
export { Login_1 as default };
