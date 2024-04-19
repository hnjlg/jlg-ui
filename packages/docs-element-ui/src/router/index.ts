import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

import { afterNav, beforeNav } from './navigate';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/system-index',
	},
	{
		path: '/system-index',
		name: 'SystemIndex',
		component: () => import('@/views/system-index/index.vue'),
		meta: {
			keepAlive: true,
			title: '',
			transition: 'slide-right',
		},
		redirect: '/system-index/system-home',
		children: [
			{
				path: '/system-index/system-home',
				name: 'SystemHome',
				component: () => import('@/views/system-home/index.vue'),
				meta: {
					keepAlive: true,
					title: '首页',
					transition: 'slide-right',
				},
			},
			{
				path: '/system-index/jlg-ui',
				name: 'JlgUi',
				component: () => import('@/views/jlg-ui/index.vue'),
				meta: {
					keepAlive: true,
					title: 'JlgUi',
					transition: 'slide-right',
				},
				redirect: '/system-index/jlg-ui/jlg-menu-base-use',
				children: [
					{
						path: '/system-index/jlg-ui/jlg-menu-base-use',
						name: 'JlgMenuBaseUse',
						component: () => import('@/views/jlg-ui/pages/base-use/index.vue'),
						meta: {
							keepAlive: true,
							title: 'JlgMenu 基础使用',
							transition: 'slide-right',
						},
					},
				],
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];

export const getKeepAliveRoutes = (routes: RouteRecordRaw[]) => {
	let keepAliveRoutes: string[] = [];

	for (const route of routes) {
		if (route.meta && route.meta.keepAlive && route.name) {
			keepAliveRoutes.push(String(route.name));
		}

		if (route.children) {
			const childRoutes = getKeepAliveRoutes(route.children);
			keepAliveRoutes = keepAliveRoutes.concat(childRoutes);
		}
	}

	return keepAliveRoutes;
};

export const keepAliveRoutes = getKeepAliveRoutes(routes);

export const router = createRouter({
	history: createWebHashHistory('/'),
	routes,
});

router.beforeEach(beforeNav);
router.afterEach(afterNav);

export default router;
