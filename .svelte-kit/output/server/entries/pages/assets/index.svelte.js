import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../../chunks/index-7340f048.js";
const Asset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { asset } = $$props;
  if ($$props.asset === void 0 && $$bindings.asset && asset !== void 0)
    $$bindings.asset(asset);
  return `<foo class="${"py-4 text-lg"}">Name: <b><a href="${"assets/" + escape(asset.Name)}">${escape(asset.Name)}</a></b> <br>
        Org: <b>${escape(asset.Org)}</b> <br>
        ${asset.Tags ? `Tags: 
        <ul class="${"px-2 py-4"}">${each(Object.keys(asset.Tags[0]), (key) => {
    return `<li>${each(Object.values(asset.Tags), (value) => {
      return `<b>${escape(key)}:</b>
            ${each(Object.values(value[key]), (tag) => {
        return `${escape(tag)}`;
      })}
             <br>`;
    })}
            </li>`;
  })}</ul>` : ``}
<br>
    <hr></foo>`;
});
const Assets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { assets = [] } = $$props;
  if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0)
    $$bindings.assets(assets);
  return `${assets ? `<ul>${each(assets, (asset) => {
    return `${validate_component(Asset, "Asset").$$render($$result, { asset }, {}, {})}`;
  })}</ul>` : `<p class="${"loading"}">loading...</p>`}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-2yqv5t{margin-left:auto;margin-right:auto;padding:1rem}h1.svelte-2yqv5t{--tw-text-opacity:1;color:rgba(220,38,38,var(--tw-text-opacity));font-size:3.75rem;font-weight:100;line-height:1;line-height:1.25;margin:4rem auto;max-width:20rem;text-transform:uppercase}@media(min-width:640px){h1.svelte-2yqv5t{max-width:none}}",
  map: null
};
const Assets_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let assets;
  $$result.css.add(css);
  return `<h1 class="${"text-8xl svelte-2yqv5t"}">Assets</h1>
  <main class="${"svelte-2yqv5t"}">${validate_component(Assets, "Assets").$$render($$result, { assets }, {}, {})}
  </main>`;
});
export { Assets_1 as default };
