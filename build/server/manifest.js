export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.ico","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		entry: {"file":"start-9e71f223.js","js":["start-9e71f223.js","chunks/vendor-92567316.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "assets",
				pattern: /^\/assets\/?$/,
				params: null,
				path: "/assets",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "signup",
				pattern: /^\/signup\/?$/,
				params: null,
				path: "/signup",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "login",
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "orgs",
				pattern: /^\/orgs\/?$/,
				params: null,
				path: "/orgs",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				key: "tos",
				pattern: /^\/tos\/?$/,
				params: null,
				path: "/tos",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				key: "o/[name]",
				pattern: /^\/o\/([^/]+?)\/?$/,
				params: (m) => ({ name: m[1]}),
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				key: "o/[name]/assets",
				pattern: /^\/o\/([^/]+?)\/assets\/?$/,
				params: (m) => ({ name: m[1]}),
				path: null,
				shadow: null,
				a: [0,9],
				b: [1]
			}
		]
	}
};
