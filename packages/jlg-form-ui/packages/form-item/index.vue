<template>
	<el-form-item ref="_ref" v-bind="mergeFormItemPropsComputed">
		<template v-if="slots.label">
			<slot name="label" :label="mergeFormItemPropsComputed.label">
				<el-tooltip :content="mergeFormItemPropsComputed.label" placement="top" :disabled="isShowTooltip">
					<span class="text-overflow-hidden" :style="labelStyle" @mouseover="($event) => visibleTooltip($event)">{{
						mergeFormItemPropsComputed.label
					}}</span>
				</el-tooltip>
			</slot>
		</template>
		<template #error="{ error }">
			<slot name="error" :error="error" />
		</template>
		<slot />
	</el-form-item>
</template>

<script setup lang="ts">
import { formContextKey } from 'element-plus';
import { CSSProperties } from 'vue';
import { isNumber, isString } from 'lodash-unified';
import { T_Jlg_FormItem_Props } from './type';
import { globalComponentConfig } from '../index';

defineOptions({
	name: 'JlgFormItem',
});

const props = withDefaults(defineProps<T_Jlg_FormItem_Props>(), {
	showMessage: true,
});

const attrs = useAttrs();

const slots = useSlots();

const _ref = ref(null);

const isShowTooltip = ref(false);

const isStringNumber = (val) => {
	if (!isString(val)) {
		return false;
	}
	return !Number.isNaN(Number(val));
};

const addUnit = (value?: string | number, defaultUnit = 'px') => {
	if (!value) return '';
	if (isNumber(value) || isStringNumber(value)) {
		return `${value}${defaultUnit}`;
	} else if (isString(value)) {
		return value;
	}
};

const formContext = inject(formContextKey);

const labelStyle = computed<CSSProperties>(() => {
	if (formContext?.labelPosition === 'top') {
		return {};
	}
	const labelWidth = addUnit(mergeFormItemPropsComputed.value.labelWidth || formContext?.labelWidth || '');
	if (labelWidth) return { width: labelWidth };
	return {};
});

const visibleTooltip = (event) => {
	if (!mergeFormItemPropsComputed.value.label) {
		isShowTooltip.value = true;
		return;
	}
	const { offsetWidth, scrollWidth } = event.target as HTMLElement;
	isShowTooltip.value = offsetWidth >= scrollWidth;
};

const mergeFormItemPropsComputed = computed(() => {
	return {
		...globalComponentConfig.form,
		...props,
		...attrs,
	};
});

defineExpose({
	_ref,
});
</script>

<style scoped lang="scss">
.text-overflow-hidden {
	display: inline-block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
