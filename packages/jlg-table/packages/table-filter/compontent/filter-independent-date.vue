<template>
	<div class="jlg-filter-wrap filter-independent-date-picker">
		<div v-show="!props.item.quickSearch" class="jlg-filter-label">{{ props.item.title }}</div>
		<div class="jlg-filter-content">
			<div class="jlg-filter-date__wrapper" :class="{ 'is-focus': isFocus }">
				<el-date-picker
					v-model="startTime"
					type="date"
					placeholder="开始日期"
					:disabled-date="disabledStartDate"
					:format="format"
					:value-format="valueFormat"
					@focus="isFocus = true"
					@blur="isFocus = false"
				/>
				<span class="el-range-separator">~</span>
				<el-date-picker
					v-model="endTime"
					type="date"
					placeholder="结束日期"
					:disabled-date="disabledEndDate"
					:format="format"
					:value-format="valueFormat"
					@focus="isFocus = true"
					@blur="isFocus = false"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_Table_Filter_Item } from '../../table-filter/type';
import { computed } from 'vue';
import GlobalConfig from '../../../lib/useGlobalConfig';

defineOptions({
	name: 'FilterIndependentDatePicker',
});
type ModelValueType = Array<string | Date | null>;
const modelValue = defineModel<ModelValueType>({ required: true });
const props = withDefaults(defineProps<{ item: I_Table_Filter_Item }>(), {});
defineModel<number>('searchType', { required: true, default: 0 });

const startTime = ref<string | Date>('');
const endTime = ref<string | Date>('');
const isFocus = ref(false);

const format = computed(() => props.item.props?.format ?? GlobalConfig.datePickerFormat);
const valueFormat = computed(() => props.item.props?.valueFormat ?? GlobalConfig.datePickerValueFormat);

const disabledStartDate = (date: Date) => {
	if (endTime.value) {
		return date > new Date(endTime.value);
	}
	return false;
};

const disabledEndDate = (date: Date) => {
	if (startTime.value) {
		return date < new Date(startTime.value);
	}
	return false;
};

watch(
	modelValue,
	(newValue) => {
		if (!newValue) return;
		if (newValue.length === 0) {
			startTime.value = '';
			endTime.value = '';
		} else {
			startTime.value = newValue[0] ?? '';
			endTime.value = newValue[1] ?? '';
		}
	},
	{ deep: true, immediate: true }
);

watch(
	[startTime, endTime],
	([newStartTime, newEndTime]) => {
		modelValue.value = [newStartTime ?? '', newEndTime ?? ''];
	},
	{ deep: true }
);
</script>

<style scoped lang="scss">
@import url('../../../styles/filter-item-wrap.scss');
.filter-independent-date-picker {
	.jlg-filter-date__wrapper {
		display: flex;
		align-items: center;
		border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
		border: 1px solid var(--el-input-border-color, var(--el-border-color));
		transform: translateZ(0);
		transition: border-color var(--el-transition-duration-fast) var(--el-transition-function-ease-in-out-bezier);
		&.is-focus {
			border-color: var(--el-color-primary);
		}
		:deep(.el-input__wrapper) {
			border: none;
		}
	}
}
</style>
