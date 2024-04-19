import { NavigationGuardWithThis, NavigationHookAfter } from 'vue-router';

export const beforeNav: NavigationGuardWithThis<undefined> = (_to, _from, next) => {
	next();
};

export const afterNav: NavigationHookAfter = (to) => {
	if ('title' in to.meta) {
		document.title = to.meta.title + '';
	} else {
		document.title = '文档';
	}
};
