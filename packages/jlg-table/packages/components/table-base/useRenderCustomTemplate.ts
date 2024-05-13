import { createVNode, render, VNodeTypes, AppContext } from 'vue';

export const useRenderCustomTemplate = (container: HTMLElement, appContext: AppContext, customComponent: VNodeTypes, props: Record<string, any>) => {
	const onDestroy = () => {
		render(null, container);
	};
	const vNode = createVNode(customComponent, { ...props, onDestroy });
	if (appContext) {
		vNode.appContext = appContext;
	}
	render(vNode, container);
	return { onDestroy };
};
