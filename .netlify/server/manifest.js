export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6a8a0054.js","imports":["_app/immutable/entry/start.6a8a0054.js","_app/immutable/chunks/index.847936d9.js","_app/immutable/chunks/singletons.ecd0e535.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8260d3d5.js","imports":["_app/immutable/entry/app.8260d3d5.js","_app/immutable/chunks/index.847936d9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
