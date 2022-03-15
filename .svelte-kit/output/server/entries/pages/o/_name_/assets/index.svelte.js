import { c as create_ssr_component, a as each, e as escape } from "../../../../../chunks/index-7340f048.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ge6cl1{margin-left:auto;margin-right:auto;padding:1rem}h1.svelte-ge6cl1{--tw-text-opacity:1;color:rgba(234,88,12,var(--tw-text-opacity));font-size:3.75rem;font-weight:100;line-height:1;line-height:1.25;margin:4rem auto;max-width:20rem;text-transform:uppercase}@media(min-width:640px){h1.svelte-ge6cl1{max-width:none}}",
  map: null
};
async function load({ params, fetch, session, context }) {
  const url = `http://localhost:5000/v1/o/${params.name}/assets`;
  const res = await fetch(url);
  if (res.ok)
    return { props: { oassets: await res.json() } };
  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
}
const Assets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { oassets } = $$props;
  if ($$props.oassets === void 0 && $$bindings.oassets && oassets !== void 0)
    $$bindings.oassets(oassets);
  $$result.css.add(css);
  return `<main class="${"svelte-ge6cl1"}"><h1 class="${"text-8xl svelte-ge6cl1"}">Orgs Assets</h1>

	${each(oassets, (asset) => {
    return `<div class="${""}"><b class="${"bg-gray-200 row-span-full"}">Asset Name: ${escape(asset.Name)}</b> <br>
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
export { Assets as default, load };
