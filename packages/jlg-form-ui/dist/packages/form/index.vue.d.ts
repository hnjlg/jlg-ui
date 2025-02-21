import { T_JlgForm_Props, E_JlgForm_LabelPosition } from './type';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<T_JlgForm_Props>, {
    showMessage: boolean;
    validateOnRuleChange: boolean;
    labelPosition: E_JlgForm_LabelPosition;
}>, {
    getGatherData: () => {
        type: string;
        data: any[];
    };
    _ref: globalThis.Ref<any>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<T_JlgForm_Props>, {
    showMessage: boolean;
    validateOnRuleChange: boolean;
    labelPosition: E_JlgForm_LabelPosition;
}>>>, {
    readonly showMessage: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    labelPosition: E_JlgForm_LabelPosition;
    readonly validateOnRuleChange: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>, Partial<Record<string, (_: {
    field: string | number;
    elComponentsProps: import('../input/type').T_Jlg_Input_Props | import('../select/type').T_Jlg_Select_Props | import('../input-number/type').T_Jlg_InputNumber_Props | import('../date-picker/type').T_Jlg_DatePicker_Props | import('../time-select/type').T_Jlg_TimeSelect_Props | import('../rate/type').T_Jlg_Rate_Props | import('../radio-group/type').T_Jlg_RadioGroup_Props;
}) => any>> & {
    default?(_: {}): any;
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
