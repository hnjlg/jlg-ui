import EventEmitter from '../utils/handleEvents';

export default ({ eventBus, vue }: { eventBus: EventEmitter; vue: any }) => {
	vue.config.errorHandler = (err: Error, vm: any, info: any) => {
		eventBus.emit('vueErrorCallback', { err, vm, info });
	};
};
