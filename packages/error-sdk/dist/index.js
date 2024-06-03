"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleEvents_1 = __importDefault(require("./utils/handleEvents"));
const xhr_replace_1 = __importDefault(require("./pac/xhr_replace"));
const fetch_replace_1 = __importDefault(require("./pac/fetch_replace"));
const window_error_1 = __importDefault(require("./pac/window_error"));
const un_handled_rejection_1 = __importDefault(require("./pac/un_handled_rejection"));
const vue_error_1 = __importDefault(require("./pac/vue_error"));
exports.default = (callback) => {
    const eventBus = new handleEvents_1.default();
    const { xhrCallback, fetchCallback, jsCallback, sourceCallback, unHandledRejectionCallback, vueErrorOption } = callback;
    if (xhrCallback) {
        eventBus.on('xhrCallback', (xhr) => {
            xhrCallback === null || xhrCallback === void 0 ? void 0 : xhrCallback(xhr);
        });
        (0, xhr_replace_1.default)(eventBus);
    }
    if (fetchCallback) {
        eventBus.on('fetchCallback', (data) => {
            fetchCallback === null || fetchCallback === void 0 ? void 0 : fetchCallback(data);
        });
        (0, fetch_replace_1.default)(eventBus);
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
        (0, window_error_1.default)(eventBus);
    }
    if (unHandledRejectionCallback) {
        eventBus.on('unHandledRejectionCallback', (err) => {
            unHandledRejectionCallback(err);
        });
        (0, un_handled_rejection_1.default)(eventBus);
    }
    if (vueErrorOption && vueErrorOption.vue) {
        eventBus.on('vueErrorCallback', (option) => {
            vueErrorOption.vueErrorCallback(option);
        });
        (0, vue_error_1.default)({
            eventBus,
            vue: vueErrorOption.vue,
        });
    }
    return {};
};
