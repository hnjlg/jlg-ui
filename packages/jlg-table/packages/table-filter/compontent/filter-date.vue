<template>
	<div class="jlg-filter-wrap filter-date">
		<div v-show="props.showLabel" class="jlg-filter-label">{{ props.item.title }}</div>
		<div class="jlg-filter-content">
			<el-date-picker v-bind="props.item.props" v-model="modelValue" :format="format" :value-format="valueFormat" clearable range-separator="~" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_Table_Filter_Item } from '../../table-filter/type';
import { computed } from 'vue';
import GlobalConfig from '../../../lib/useGlobalConfig';

defineOptions({
	name: 'FilterDate',
});
type ModelValueType = null | Date | number | string | Array<Date | number | string | null>;
const modelValue = defineModel<ModelValueType>({ required: true });
const props = withDefaults(defineProps<{ item: I_Table_Filter_Item; showLabel: boolean }>(), {
	showLabel: false,
});
defineModel<number>('searchType', { required: true, default: 0 });

const format = computed(() => props.item.props?.format ?? GlobalConfig.datePickerFormat);
const valueFormat = computed(() => props.item.props?.valueFormat ?? GlobalConfig.datePickerValueFormat);
</script>

<style scoped lang="scss">
@import url('../../../styles/filter-item-wrap.scss');
</style>
