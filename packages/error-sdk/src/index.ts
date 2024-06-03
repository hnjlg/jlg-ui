import EventEmitter from './utils/handleEvents';
import xhrReplace, { T_SDKDataXMLHttpRequest } from './pac/xhr_replace';
import fetchReplace, { T_FetchCallbackParams } from './pac/fetch_replace';
import windowError from './pac/window_error';
import unHandledRejection from './pac/un_handled_rejection';
import vueError from './pac/vue_error';

export default (callback: {
	// httpXhr请求错误回调
	xhrCallback?: (xhr: T_SDKDataXMLHttpRequest) => void;
	// fetch请求错误回调
	fetchCallback?: (data: T_FetchCallbackParams) => void;
	// js运行错误回调
	jsCallback?: (err: Error) => void;
	// 资源加载错误回调
	sourceCallback?: (err: Error) => void;
	// 异步失败未处理错误回调
	unHandledRejectionCallback?: (err: PromiseRejectionEvent) => void;
	// Vue错误收集
	vueErrorOption?: {
		vue: any; // Vue实例
		vueErrorCallback: (option: any) => void;
	};
}) => {
	const eventBus = new EventEmitter();
	const { xhrCallback, fetchCallback, jsCallback, sourceCallback, unHandledRejectionCallback, vueErrorOption } = callback;

	if (xhrCallback) {
		eventBus.on('xhrCallback', (xhr: T_SDKDataXMLHttpRequest) => {
			xhrCallback?.(xhr);
		});
		xhrReplace(eventBus);
	}

	if (fetchCallback) {
		eventBus.on('fetchCallback', (data: T_FetchCallbackParams) => {
			fetchCallback?.(data);
		});
		fetchReplace(eventBus);
	}

	if (jsCallback || sourceCallback) {
		jsCallback &&
			eventBus.on('jsCallback', (err) => {
				jsCallback(err);
			});
		sourceCallback &&
			eventBus.on('sourceCallback', (err) => {
				sourceCallback(err);
			});
		windowError(eventBus);
	}

	if (unHandledRejectionCallback) {
		eventBus.on('unHandledRejectionCallback', (err) => {
			unHandledRejectionCallback(err);
		});
		unHandledRejection(eventBus);
	}

	if (vueErrorOption && vueErrorOption.vue) {
		eventBus.on('vueErrorCallback', (option) => {
			vueErrorOption.vueErrorCallback(option);
		});
		vueError({
			eventBus,
			vue: vueErrorOption.vue,
		});
	}
	return {};
};
