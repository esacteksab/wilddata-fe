export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/assets/index.svelte"),
	() => import("../../src/routes/signup/index.svelte"),
	() => import("../../src/routes/login/index.svelte"),
	() => import("../../src/routes/orgs/index.svelte"),
	() => import("../../src/routes/tos.svelte"),
	() => import("../../src/routes/a/[name]/index.svelte"),
	() => import("../../src/routes/o/[name]/index.svelte"),
	() => import("../../src/routes/o/[name]/assets/index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"assets": [[0, 3], [1]],
	"signup": [[0, 4], [1]],
	"login": [[0, 5], [1]],
	"orgs": [[0, 6], [1]],
	"tos": [[0, 7], [1]],
	"a/[name]": [[0, 8], [1]],
	"o/[name]": [[0, 9], [1]],
	"o/[name]/assets": [[0, 10], [1]]
};