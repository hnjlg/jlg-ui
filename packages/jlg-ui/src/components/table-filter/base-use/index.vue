<template>
	<!--	<pre>{{ items }}</pre>-->
	<TableFilter v-model:items="items"></TableFilter>
	<el-button @click="onClick">修改searchType</el-button>
</template>

<script setup lang="ts">
import TableFilter from '@pac/table-filter/index.vue';
import { I_Table_Filter_Item } from '../../../../packages/table-filter/type';
import { onMounted, reactive, ref } from 'vue';

defineOptions({
	name: 'TableFilterBaseUse',
});

const options = ref<ListItem[]>([]);
const loading = ref(false);
const remoteMethod = (query: string) => {
	if (query !== '') {
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
			options.value = list.filter((item) => {
				return item.label.toLowerCase().includes(query.toLowerCase());
			});
		}, 200);
	} else {
		options.value = [];
	}
};

const selectOptions = ref([]);
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
		type: 'select',
		searchType: 0,
		titleOverflow: 'ellipsis',
		quickSearch: true,
		isPure: false,
		props: {
			multiple: true,
			remote: true,
			options: options,
			remoteMethod: remoteMethod,
		},
	},
	{
		field: 'select',
		title: '选择',
		type: 'select',
		searchType: 0,
		visible: true,
		quickSearch: true,
		isPure: false,
		props: {
			multiple: false,
			options: selectOptions,
		},
	},
	{
		field: 'time',
		title: '时间',
		type: 'time',
		searchType: 0,
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'timeSlot',
		title: '时间段',
		type: 'time',
		searchType: 0,
		quickSearch: true,
		isPure: true,
		props: {
			isRange: true,
		},
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

const states = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
];
const list = states.map((item): ListItem => {
	return { value: `value:${item}`, label: `label:${item}` };
});

interface ListItem {
	value: string;
	label: string;
}
onMounted(() => {
	/// 模拟异步请求
	setTimeout(() => {
		items.push(...items2);
	}, 1500);
	setTimeout(() => {
		selectOptions.value = [
			{ label: '选项1', value: 1 },
			{ label: '选项2', value: 2 },
			{ label: '选项3', value: 3 },
		];
	}, 2000);
});

function onClick() {
	items[0].searchType = 0;
}
</script>

<style scoped lang="scss"></style>
