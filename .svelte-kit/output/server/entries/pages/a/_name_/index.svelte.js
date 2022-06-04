import { c as create_ssr_component, e as escape, a as each } from "../../../../chunks/index-fa0ff56f.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-12gtqgd{padding:1rem;margin-left:auto;margin-right:auto}h1.svelte-12gtqgd{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity));text-transform:uppercase;font-size:3.75rem;font-weight:100;line-height:1.25;margin-top:4rem;margin-bottom:4rem;margin-left:auto;margin-right:auto;max-width:20rem}@media(min-width: 640px){h1.svelte-12gtqgd{max-width:none}}",
  map: null
};
async function load({ params, fetch, session, context }) {
  const assets = `http://localhost:5000/v1/a/${params.name}`;
  const res = await fetch(assets);
  if (res.ok)
    return { props: { iassets: await res.json() } };
  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
}
const U5Bnameu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { iassets } = $$props;
  if ($$props.iassets === void 0 && $$bindings.iassets && iassets !== void 0)
    $$bindings.iassets(iassets);
  $$result.css.add(css);
  return `<main class="${"svelte-12gtqgd"}"><h1 class="${"text-8xl svelte-12gtqgd"}">${escape(iassets[0].Name)} Details</h1>

  ${each(iassets, (asset) => {
    return `<div class="${""}"><b class="${"bg-gray-200 row-span-full"}">Asset Name:</b>
      ${escape(asset.Name)} <br>
      <b class="${"bg-gray-200 row-span-full"}">Org:</b>
      ${escape(asset.Org)} <br>
      ${asset.Tags ? `<b class="${"bg-red-100"}">Tags: </b>
        <ul class="${"px-2 bg-red-200"}">${each(Object.keys(asset.Tags[0]), (key) => {
      return `<li>${each(Object.values(asset.Tags), (value) => {
        return `<b>${escape(key)}:</b>
                ${each(Object.values(value[key]), (tag) => {
          return `${escape(tag)}`;
        })}
                <br>`;
      })}
            </li>`;
    })}
        </ul>` : ``}
    </div>`;
  })}
</main>`;
});
export { U5Bnameu5D as default, load };
