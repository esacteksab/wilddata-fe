import {
  c as create_ssr_component,
  e as escape,
  a as each,
  v as validate_component,
} from "../../../chunks/index-fa0ff56f.js";
const Asset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { asset } = $$props;
  if ($$props.asset === void 0 && $$bindings.asset && asset !== void 0)
    $$bindings.asset(asset);
  return `<div class="${"my-14"}"><table class="${"table-auto border-collapse border-orange-600"}"><thead><tr class="${"bg-orange-600"}"><th class="${"text-left"}"><a href="${
    "/a/" + escape(asset.Name)
  }">${escape(asset.Name)}</a></th>
        <th></th></tr></thead>

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
    })}</tbody></table></div>`;
});
const Assets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { assets = [] } = $$props;
  if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0)
    $$bindings.assets(assets);
  return `${
    assets
      ? `<ul>${each(assets, (asset) => {
          return `${validate_component(Asset, "Asset").$$render(
            $$result,
            { asset },
            {},
            {}
          )}`;
        })}</ul>`
      : `<p class="${"loading"}">loading...</p>`
  }`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
  "main.svelte-1c8jvid{padding:1rem;margin-left:auto;margin-right:auto}h1.svelte-1c8jvid{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity));text-transform:uppercase;font-size:3.75rem;font-weight:100;line-height:1.25;margin-top:0.25rem;margin-bottom:0.25rem;margin-left:0.25rem;margin-right:0.25rem}@media(min-width: 640px){h1.svelte-1c8jvid{max-width:none}}")();
const css = {
  code: "main.svelte-1c8jvid{padding:1rem;margin-left:auto;margin-right:auto}h1.svelte-1c8jvid{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity));text-transform:uppercase;font-size:3.75rem;font-weight:100;line-height:1.25;margin-top:0.25rem;margin-bottom:0.25rem;margin-left:0.25rem;margin-right:0.25rem}@media(min-width: 640px){h1.svelte-1c8jvid{max-width:none}}",
  map: null,
};
const Assets_1 = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let assets;
    $$result.css.add(css);
    return `<main class="${"svelte-1c8jvid"}"><div class="${"grid grid-cols-10 gap-5 content-start"}"><div class="${"col-start-2 col-span-3"}"><h1 class="${"svelte-1c8jvid"}">Foo</h1></div>
    <div class="${"col-start-2 col-span-3 mx-1"}">${validate_component(
      Assets,
      "Assets"
    ).$$render($$result, { assets }, {}, {})}</div></div>
</main>`;
  }
);
export { Assets_1 as default };
