<template>
	<div class="jlg-filter-wrap filter-tree-select">
		<div v-show="!props.item.quickSearch" class="jlg-filter-label">{{ props.item.title }}</div>
		<div class="jlg-filter-content">
			<el-tree-select v-bind="props.item.props" v-model="modelValue" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_Table_Filter_Item } from '../../table-filter/type';

defineOptions({
	name: 'FilterDate',
});
const modelValue = defineModel<string>({ required: true });
const props = withDefaults(defineProps<{ item: I_Table_Filter_Item }>(), {});
defineModel<number>('searchType', { required: true, default: 0 });
</script>

<style scoped lang="scss">
@import url('../../../styles/filter-item-wrap.scss');
</style>
