import {
  c as create_ssr_component,
  e as escape,
} from "../../../../chunks/index-fa0ff56f.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1ggd7k{padding:1rem;margin-left:auto;margin-right:auto}h1.svelte-1ggd7k{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity));text-transform:uppercase;font-size:3.75rem;font-weight:100;line-height:1.25;margin-top:4rem;margin-bottom:4rem;margin-left:auto;margin-right:auto;max-width:20rem}a.svelte-1ggd7k{--tw-text-opacity:1;color:rgb(194 65 12 / var(--tw-text-opacity))}@media(min-width: 640px){h1.svelte-1ggd7k{max-width:none}}",
  map: null,
};
async function load({ params, fetch, session }) {
  const orgs = `http://localhost:5000/v1/o/${params.name}`;
  const res = await fetch(orgs);
  if (res.ok) return { props: { org: await res.json() } };
  return {
    status: res.status,
    error: new Error(`Could not load ${orgs}`),
  };
}
const U5Bnameu5D = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let { org } = $$props;
    if ($$props.org === void 0 && $$bindings.org && org !== void 0)
      $$bindings.org(org);
    $$result.css.add(css);
    return `<main class="${"svelte-1ggd7k"}"><h1 class="${"text-8xl svelte-1ggd7k"}">${escape(
      org.DisplayName
    )} Org</h1>

  EMail:<b>${escape(org.EMail)}</b> <br>
  <a href="${
    escape(org.Name) + "/assets/"
  }" class="${"svelte-1ggd7k"}">View ${escape(org.DisplayName)} Org Assets</a>
</main>`;
  }
);
export { U5Bnameu5D as default, load };
