<template>
	<div class="jlg-filter-wrap filter-date">
		<div v-show="!props.item.quickSearch" class="jlg-filter-label">{{ props.item.title }}</div>
		<div class="jlg-filter-content">
			<el-date-picker v-bind="props.item.props" v-model="modelValue" clearable range-separator="~" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_Table_Filter_Item } from '../../table-filter/type';

defineOptions({
	name: 'FilterDate',
});
type ModelValueType = null | Date | number | string | Array<Date | number | string | null>;
const modelValue = defineModel<ModelValueType>({ required: true });
const props = withDefaults(defineProps<{ item: I_Table_Filter_Item }>(), {});
defineModel<number>('searchType', { required: true, default: 0 });
</script>

<style scoped lang="scss">
@import url('../../../styles/filter-item-wrap.scss');
</style>
