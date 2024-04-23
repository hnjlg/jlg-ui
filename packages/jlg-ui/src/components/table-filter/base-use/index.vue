<template>
	<pre>{{ items }}</pre>
	<TableFilter v-model:items="items"></TableFilter>
	<el-button @click="onClick">修改searchType</el-button>
</template>

<script setup lang="ts">
import TableFilter from '@pac/table-filter/index.vue';
import { I_Table_Filter_Item } from '../../../../packages/table-filter/type';
import { onMounted, reactive } from 'vue';

defineOptions({
	name: 'TableFilterBaseUse',
});
const items = reactive<I_Table_Filter_Item[]>([]);
const items2 = reactive<I_Table_Filter_Item[]>([
	{
		field: 'text',
		title: '文本',
		type: 'text',
		searchType: 1,
		defaultValue: '999',
		quickSearch: true,
		isPure: false,
	},
	{
		field: 'number',
		title: '数字',
		type: 'number',
		searchType: 0,
		quickSearch: true,
		isPure: false,
	},
	{
		field: 'remoteSelect',
		title: '远程检索远程检索111',
		type: 'remoteSelect',
		searchType: 0,
		titleOverflow: 'ellipsis',
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'select',
		title: '选择',
		type: 'select',
		searchType: 0,
		visible: false,
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'time',
		title: '日期',
		type: 'time',
		searchType: 0,
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'timeSlot',
		title: '时间段',
		type: 'timeSlot',
		searchType: 0,
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'datetimeRange',
		title: '日期和时间范围',
		type: 'datetimeRange',
		searchType: 0,
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'dayTime',
		title: '时间',
		type: 'dayTime',
		searchType: 0,
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'treeSelect',
		title: '树形下拉',
		type: 'treeSelect',
		searchType: 0,
		quickSearch: true,
		isPure: true,
	},
]);
onMounted(() => {
	/// 模拟异步请求
	setTimeout(() => {
		items.push(...items2);
	}, 1500);
});

function onClick() {
	items[0].searchType = 0;
}
</script>

<style scoped lang="scss"></style>
