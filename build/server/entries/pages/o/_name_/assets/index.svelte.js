import {
  c as create_ssr_component,
  e as escape,
  a as each,
} from "../../../../../chunks/index-fa0ff56f.js";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
  "main.svelte-15n521c{padding:1rem;margin-left:auto;margin-right:auto}a.svelte-15n521c{-webkit-text-decoration-line:underline;text-decoration-line:underline}h1.svelte-15n521c{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity));text-transform:uppercase;font-size:3.75rem;font-weight:100;line-height:1.25;margin-top:4rem;margin-bottom:4rem;margin-left:auto;margin-right:auto;max-width:20rem}table.svelte-15n521c{--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity))}@media(min-width: 640px){h1.svelte-15n521c{max-width:none}}")();
const css = {
  code: "main.svelte-15n521c{padding:1rem;margin-left:auto;margin-right:auto}a.svelte-15n521c{-webkit-text-decoration-line:underline;text-decoration-line:underline}h1.svelte-15n521c{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity));text-transform:uppercase;font-size:3.75rem;font-weight:100;line-height:1.25;margin-top:4rem;margin-bottom:4rem;margin-left:auto;margin-right:auto;max-width:20rem}table.svelte-15n521c{--tw-border-opacity:1;border-color:rgb(234 88 12 / var(--tw-border-opacity))}@media(min-width: 640px){h1.svelte-15n521c{max-width:none}}",
  map: null,
};
async function load({ params, fetch, session }) {
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
  return `<main class="${"svelte-15n521c"}"><h1 class="${"text-8xl svelte-15n521c"}">${escape(
    oassets[0].Org
  )}&#39;s Assets</h1>

  ${each(oassets, (asset) => {
    return `${
      asset.Tags
        ? `<div class="${"my-14"}"><table class="${"table-auto border-collapse border-orange-600 svelte-15n521c"}"><thead><tr class="${"bg-orange-600"}"><th class="${"text-left"}"><a href="${
            "/a/" + escape(asset.Name)
          }" class="${"svelte-15n521c"}">${escape(asset.Name)}</a></th>
              <th></th>
            </tr></thead>

          <tbody>${each(Object.keys(asset.Tags[0]), (key) => {
            return `<tr class="${"even:bg-orange-200 odd:bg-orange-400"}"><td class="${"pr-4 text-left"}"><b>${escape(
              key
            )}:
                  </b></td>
                <td class="${"pl-4 text-right"}">${each(
              Object.values(asset.Tags),
              (value) => {
                return `${each(Object.values(value[key]), (tag) => {
                  return `${escape(tag)}`;
                })}`;
              }
            )}</td>
              </tr>`;
          })}
          </tbody></table>
      </div>`
        : ``
    }`;
  })}
</main>`;
});
export { Assets as default, load };
