import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../../chunks/index-7340f048.js";
const Org = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { org } = $$props;
  if ($$props.org === void 0 && $$bindings.org && org !== void 0)
    $$bindings.org(org);
  return `<foo class="${"py-4 text-lg"}"><p><a class="${"underline text-orange-600"}" href="${"o/" + escape(org.Name)}">Name: ${escape(org.Name)}</a></p>
        <p>EMail: ${escape(org.EMail)}</p>
<br>
    <hr></foo>`;
});
const Orgs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { orgs = [] } = $$props;
  if ($$props.orgs === void 0 && $$bindings.orgs && orgs !== void 0)
    $$bindings.orgs(orgs);
  return `${orgs ? `<ul>${each(orgs, (org) => {
    return `${validate_component(Org, "Org").$$render($$result, { org }, {}, {})}`;
  })}</ul>` : `<p class="${"loading"}">loading...</p>`}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ge6cl1{margin-left:auto;margin-right:auto;padding:1rem}h1.svelte-ge6cl1{--tw-text-opacity:1;color:rgba(234,88,12,var(--tw-text-opacity));font-size:3.75rem;font-weight:100;line-height:1;line-height:1.25;margin:4rem auto;max-width:20rem;text-transform:uppercase}@media(min-width:640px){h1.svelte-ge6cl1{max-width:none}}",
  map: null
};
const Orgs_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let orgs;
  $$result.css.add(css);
  return `<h1 class="${"text-8xl svelte-ge6cl1"}">Orgs</h1>
  <main class="${"svelte-ge6cl1"}">${validate_component(Orgs, "Orgs").$$render($$result, { orgs }, {}, {})}
  </main>`;
});
export { Orgs_1 as default };
