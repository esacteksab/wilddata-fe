const c = [
  () => import("../../../src/routes/__layout.svelte"),
  () => import("../components/error.svelte"),
  () => import("../../../src/routes/index.svelte"),
  () => import("../../../src/routes/assets/index.svelte"),
  () => import("../../../src/routes/signup/index.svelte"),
  () => import("../../../src/routes/[orgs]/index.svelte"),
  () => import("../../../src/routes/[orgs]/[name]/index.svelte"),
  () => import("../../../src/routes/[orgs]/[name]/assets/index.svelte"),
];

const d = decodeURIComponent;

export const routes = [
  // src/routes/index.svelte
  [/^\/$/, [c[0], c[2]], [c[1]]],

  // src/routes/assets/index.svelte
  [/^\/assets\/?$/, [c[0], c[3]], [c[1]]],

  // src/routes/signup/index.svelte
  [/^\/signup\/?$/, [c[0], c[4]], [c[1]]],

  // src/routes/[orgs]/index.svelte
  [/^\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ orgs: d(m[1]) })],

  // src/routes/[orgs]/[name]/index.svelte
  [
    /^\/([^/]+?)\/([^/]+?)\/?$/,
    [c[0], c[6]],
    [c[1]],
    (m) => ({ orgs: d(m[1]), name: d(m[2]) }),
  ],

  // src/routes/[orgs]/[name]/assets/index.svelte
  [
    /^\/([^/]+?)\/([^/]+?)\/assets\/?$/,
    [c[0], c[7]],
    [c[1]],
    (m) => ({ orgs: d(m[1]), name: d(m[2]) }),
  ],
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];
