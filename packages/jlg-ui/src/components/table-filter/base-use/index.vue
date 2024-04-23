<template>
	<TableFilter :items="items"></TableFilter>
</template>

<script setup lang="ts">
import TableFilter from '@pac/table-filter/index.vue';
import { I_Table_Filter_Item } from '../../../../packages/table-filter/type';
import { reactive } from 'vue';

defineOptions({
	name: 'TableFilterBaseUse',
});

const items = reactive<I_Table_Filter_Item[]>([
	{
		field: 'text',
		title: '文本',
		type: 'text',
		resetValue: '999',
	},
	{
		field: 'number',
		title: '数字',
		type: 'number',
	},
	{
		field: 'remoteSelect',
		title: '远程检索远程检索111',
		type: 'remoteSelect',
		titleOverflow: 'ellipsis',
	},
	{
		field: 'select',
		title: '选择',
		type: 'select',
		visible: false,
	},
	{
		field: 'time',
		title: '日期',
		type: 'time',
	},
	{
		field: 'timeSlot',
		title: '时间段',
		type: 'timeSlot',
	},
	{
		field: 'datetimeRange',
		title: '日期和时间范围',
		type: 'datetimeRange',
	},
	{
		field: 'dayTime',
		title: '时间',
		type: 'dayTime',
	},
	{
		field: 'treeSelect',
		title: '树形下拉',
		type: 'treeSelect',
	},
]);
</script>

<style scoped lang="scss"></style>
