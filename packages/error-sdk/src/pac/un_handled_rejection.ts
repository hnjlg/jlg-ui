import EventEmitter from '../utils/handleEvents';

export default (eventBus: EventEmitter) => {
	// 监听 unhandledrejection 事件
	window.addEventListener('unhandledrejection', (event): void => {
		// 阻止默认行为，防止控制台输出错误信息
		event.preventDefault();
		eventBus.emit('unHandledRejectionCallback', event);
	});
};
