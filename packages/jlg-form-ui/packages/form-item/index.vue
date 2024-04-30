<template>
	<el-form-item v-bind="props">
		<!-- Form Item 插槽 -->
		<template v-if="slots.label">
			<slot name="label" :label="props.label">
				<el-tooltip :content="props.label" placement="top" :disabled="isShowTooltip">
					<span class="text-overflow-hidden" :style="labelStyle" @mouseover="($event) => visibleTooltip($event)">{{ props.label }}</span>
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
import { formContextKey, FormItemProps } from 'element-plus';
import { useSlots, CSSProperties } from 'vue';
import { isNumber, isString } from 'lodash-unified';

defineOptions({
	name: 'JlgFormItem',
});

const props = withDefaults(defineProps<Partial<FormItemProps>>(), {});

const slots = useSlots();

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
	const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth || '');
	if (labelWidth) return { width: labelWidth };
	return {};
});

const visibleTooltip = (event) => {
	if (!props.label) {
		isShowTooltip.value = true;
		return;
	}
	const { offsetWidth, scrollWidth } = event.target as HTMLElement;
	isShowTooltip.value = offsetWidth >= scrollWidth;
};
</script>

<style scoped lang="scss">
.text-overflow-hidden {
	display: inline-block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
