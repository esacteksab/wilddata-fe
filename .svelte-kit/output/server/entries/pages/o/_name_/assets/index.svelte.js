import {
  c as create_ssr_component,
  a as each,
  e as escape,
} from "../../../../../chunks/index-fa0ff56f.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1ojhega{padding:1rem;margin-left:auto;margin-right:auto}a.svelte-1ojhega{-webkit-text-decoration-line:underline;text-decoration-line:underline}h1.svelte-1ojhega{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity));text-transform:uppercase;font-size:3.75rem;font-weight:100;line-height:1.25;margin-top:4rem;margin-bottom:4rem;margin-left:auto;margin-right:auto;max-width:20rem}@media(min-width: 640px){h1.svelte-1ojhega{max-width:none}}",
  map: null,
};
async function load({ params, fetch, session, context }) {
  const url = `http://localhost:5000/v1/o/${params.name}/assets`;
  const res = await fetch(url);
  if (res.ok) return { props: { oassets: await res.json() } };
  return {
    status: res.status,
    error: new Error(`Could not load ${url}`),
  };
}
const Assets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { oassets } = $$props;
  if ($$props.oassets === void 0 && $$bindings.oassets && oassets !== void 0)
    $$bindings.oassets(oassets);
  $$result.css.add(css);
  return `<main class="${"svelte-1ojhega"}"><h1 class="${"text-8xl svelte-1ojhega"}">Your Org&#39;s Assets</h1>

  ${each(oassets, (asset) => {
    return `<div class="${""}"><b class="${"bg-gray-200 row-span-full"}">Asset Name:</b>
      <a href="${
        "/a/" + escape(asset.Name)
      }" class="${"svelte-1ojhega"}">${escape(asset.Name)}</a> <br>
      ${
        asset.Tags
          ? `<b class="${"bg-red-100"}">Tags: </b>
        <ul class="${"px-2 bg-red-200"}">${each(
              Object.keys(asset.Tags[0]),
              (key) => {
                return `<li>${each(Object.values(asset.Tags), (value) => {
                  return `<b>${escape(key)}:</b>
                ${each(Object.values(value[key]), (tag) => {
                  return `${escape(tag)}`;
                })}
                <br>`;
                })}
            </li>`;
              }
            )}
        </ul>`
          : ``
      }
    </div>`;
  })}
</main>`;
});
export { Assets as default, load };
