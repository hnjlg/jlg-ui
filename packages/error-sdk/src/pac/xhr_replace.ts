import EventEmitter from '../utils/handleEvents';
import replaceOld from '../utils/replaceOld';

export declare type T_SDKDataXMLHttpRequest = XMLHttpRequest & {
	sdkData: {
		method: string;
		requestData?: string;
	};
};

export declare type T_VoidFun = (...args: any[]) => void;

export default (eventBus: EventEmitter): void => {
	if (typeof XMLHttpRequest === 'undefined') {
		// 当前环境不支持 XMLHttpRequest
		return;
	}

	const originalXhrProto = XMLHttpRequest.prototype;

	replaceOld(originalXhrProto, 'open', function (originalOpen: T_VoidFun): T_VoidFun {
		return function (this: T_SDKDataXMLHttpRequest, ...args: any[]): void {
			this.sdkData = {
				method: args[0],
			};
			originalOpen.apply(this, args);
		};
	});

	replaceOld(originalXhrProto, 'send', function (originalSend: T_VoidFun): T_VoidFun {
		return function (this: T_SDKDataXMLHttpRequest, ...args: any[]): void {
			if (args[0]) {
				this.sdkData.requestData = args[0];
			}
			this.addEventListener('readystatechange', function () {
				if (this.readyState === XMLHttpRequest.DONE) {
					eventBus.emit('xhrCallback', this);
				}
			});
			originalSend.apply(this, args);
		};
	});
};
