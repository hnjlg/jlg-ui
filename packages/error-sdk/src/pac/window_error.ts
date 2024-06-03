import EventEmitter from '../utils/handleEvents';

export default (eventBus: EventEmitter) => {
	window.addEventListener(
		'error',
		function (err: ErrorEvent) {
			if (err.target instanceof Element && 'localName' in err.target) {
				eventBus.emit('sourceCallback', err);
			} else {
				eventBus.emit('jsCallback', err);
			}
		},
		true
	);
};
