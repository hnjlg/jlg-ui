import { I_JlgMenu_Props, I_JlgMenu_MenuDataItem } from './type';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<I_JlgMenu_Props>, {}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    collectClick: (jlgMenuDataItem: I_JlgMenu_MenuDataItem, meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]) => void;
    threeLevelMenuClick: (jlgMenuDataItem: I_JlgMenu_MenuDataItem, meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<I_JlgMenu_Props>, {}>>> & {
    onCollectClick?: (jlgMenuDataItem: I_JlgMenu_MenuDataItem, meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]) => any;
    onThreeLevelMenuClick?: (jlgMenuDataItem: I_JlgMenu_MenuDataItem, meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]) => any;
}, {}, {}>, Partial<Record<string, (_: {}) => any>> & {
    logo?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
