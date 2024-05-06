import { createVNode, render, VNodeTypes } from 'vue';

export const useRenderCustomTemplate = (container: HTMLElement, customComponent: VNodeTypes, props: Record<string, any>) => {
	const onDestroy = () => {
		render(null, container);
	};
	const vNode = createVNode(customComponent, { ...props, onDestroy });
	render(vNode, container);
	return { onDestroy };
};
