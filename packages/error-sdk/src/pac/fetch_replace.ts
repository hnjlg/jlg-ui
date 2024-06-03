import replaceOld from '../utils/replaceOld';
import EventEmitter from '../utils/handleEvents';

type BodyInit = ReadableStream | XMLHttpRequestBodyInit;

type BufferSource = ArrayBufferView | ArrayBuffer;

type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;

type RequestCache = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';

type RequestCredentials = 'include' | 'omit' | 'same-origin';

type HeadersInit = [string, string][] | Record<string, string> | Headers;

type RequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';

type RequestRedirect = 'error' | 'follow' | 'manual';

type ReferrerPolicy =
	| ''
	| 'no-referrer'
	| 'no-referrer-when-downgrade'
	| 'origin'
	| 'origin-when-cross-origin'
	| 'same-origin'
	| 'strict-origin'
	| 'strict-origin-when-cross-origin'
	| 'unsafe-url';

export declare interface RequestInit {
	/** A BodyInit object or null to set request's body. */
	body?: BodyInit | null;
	/** A string indicating how the request will interact with the browser's cache to set request's cache. */
	cache?: RequestCache;
	/** A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials. */
	credentials?: RequestCredentials;
	/** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
	headers?: HeadersInit;
	/** A cryptographic hash of the resource to be fetched by request. Sets request's integrity. */
	integrity?: string;
	/** A boolean to set request's keepalive. */
	keepalive?: boolean;
	/** A string to set request's method. */
	method?: string;
	/** A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode. */
	mode?: RequestMode;
	/** A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. */
	redirect?: RequestRedirect;
	/** A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer. */
	referrer?: string;
	/** A referrer policy to set request's referrerPolicy. */
	referrerPolicy?: ReferrerPolicy;
	/** An AbortSignal to set request's signal. */
	signal?: AbortSignal | null;
	/** Can only be null. Used to disassociate request from any Window. */
	window?: null;
}
export type T_FetchCallbackParams = { args: [input: Request | string | URL, init?: RequestInit]; response: Promise<Response> };

export default (eventBus: EventEmitter): void => {
	if (typeof window.fetch === 'undefined') {
		// 当前环境不支持 fetch
		return;
	}

	replaceOld(window, 'fetch', function (originalFetch: (input: Request | string | URL, init?: RequestInit) => Promise<Response>): (
		input: Request | string | URL,
		init?: RequestInit
	) => Promise<Response> {
		return (input: Request | string | URL, init?: RequestInit) => {
			const response = originalFetch(input, init);
			eventBus.emit('fetchCallback', {
				args: [input, init],
				response,
			});
			return response;
		};
	});
};
