import { c as create_ssr_component, e as escape } from "../../../../chunks/index-7340f048.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1dscqmu{margin-left:auto;margin-right:auto;padding:1rem}h1.svelte-1dscqmu{--tw-text-opacity:1;color:rgba(234,88,12,var(--tw-text-opacity));font-size:3.75rem;font-weight:100;line-height:1;line-height:1.25;margin:4rem auto;max-width:20rem;text-transform:uppercase}a.svelte-1dscqmu{--tw-text-opacity:1;color:rgba(194,65,12,var(--tw-text-opacity))}@media(min-width:640px){h1.svelte-1dscqmu{max-width:none}}",
  map: null
};
async function load({ params, fetch, session }) {
  const orgs = `http://localhost:5000/v1/o/${params.name}`;
  const res = await fetch(orgs);
  if (res.ok)
    return { props: { org: await res.json() } };
  return {
    status: res.status,
    error: new Error(`Could not load ${orgs}`)
  };
}
const U5Bnameu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { org } = $$props;
  if ($$props.org === void 0 && $$bindings.org && org !== void 0)
    $$bindings.org(org);
  $$result.css.add(css);
  return `<main class="${"svelte-1dscqmu"}"><h1 class="${"text-8xl svelte-1dscqmu"}">${escape(org.Name)} Org</h1>


    EMail: <b>${escape(org.EMail)}</b> <br>
    <a href="${escape(org.Name) + "/assets/"}" class="${"svelte-1dscqmu"}">View ${escape(org.Name)} Org Assets</a>
</main>`;
});
export { U5Bnameu5D as default, load };
