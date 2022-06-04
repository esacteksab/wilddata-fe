import preprocess from "svelte-preprocess";
// const sveltePreprocess = require('svelte-preprocess');
import adapter from "@sveltejs/adapter-node";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
  },
};
export default config;
