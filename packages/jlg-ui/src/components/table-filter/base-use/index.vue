<template>
	<table-grid ref="jlgGrid" v-bind="gridOptions" style="height: 95vh">
		<template #toolbar_buttons>
			<vxe-button @click="handleFlushed">刷新</vxe-button>
			<vxe-button @click="handleAdd">新增</vxe-button>
			<vxe-button @click="handleDelete">删除</vxe-button>
			<vxe-button @click="handleDelete2">删除2</vxe-button>
			<vxe-button>保存</vxe-button>
			<vxe-button>导出</vxe-button>
		</template>
		<template #default_sleepDuration>
			<img width="50" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt=""
		/></template>
		<template #default_button>
			<el-button>default_sleepDuration</el-button>
		</template>
	</table-grid>
	<!--	<TableFilter v-model:items="items"></TableFilter>-->
</template>

<script setup lang="ts">
import TableGrid from '../../../../packages/table-base/index.vue';
// import TableFilter from '@pac/table-filter/index.vue';
import { I_Table_Filter_Item } from '../../../../packages/table-filter/type';
import { onMounted, reactive, ref } from 'vue';
import { I_Table_Grid_Props, JlgGridInstance } from '../../../../packages/table-base/type';
import { ElMessage } from 'element-plus';

defineOptions({
	name: 'TableFilterBaseUse',
});

const options = ref<ListItem[]>([]);
const loading = ref(false);
const jlgGrid = ref<JlgGridInstance<RowVO>>();
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

const data = [
	{
		value: '1',
		label: 'Level one 1',
		children: [
			{
				value: '1-1',
				label: 'Level two 1-1',
				children: [
					{
						value: '1-1-1',
						label: 'Level three 1-1-1',
					},
				],
			},
		],
	},
	{
		value: '2',
		label: 'Level one 2',
		children: [
			{
				value: '2-1',
				label: 'Level two 2-1',
				children: [
					{
						value: '2-1-1',
						label: 'Level three 2-1-1',
					},
				],
			},
			{
				value: '2-2',
				label: 'Level two 2-2',
				children: [
					{
						value: '2-2-1',
						label: 'Level three 2-2-1',
					},
				],
			},
		],
	},
	{
		value: '3',
		label: 'Level one 3',
		children: [
			{
				value: '3-1',
				label: 'Level two 3-1',
				children: [
					{
						value: '3-1-1',
						label: 'Level three 3-1-1',
					},
				],
			},
			{
				value: '3-2',
				label: 'Level two 3-2',
				children: [
					{
						value: '3-2-1',
						label: 'Level three 3-2-1',
					},
				],
			},
		],
	},
];

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
		defaultValue: 999,
		quickSearch: true,
		isPure: false,
	},
	{
		field: 'remoteSelect',
		title: '远程检索远程检索111',
		type: 'select',
		searchType: 0,
		defaultValue: ['value:California'],
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
		defaultValue: 1,
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
		defaultValue: '2024-04-25T05:39:51.000Z',
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
		type: 'date',
		searchType: 0,
		quickSearch: true,
		isPure: true,
		props: {
			type: 'daterange',
			'unlink-panels': false,
		},
	},
	{
		field: 'date',
		title: '日期',
		type: 'date',
		searchType: 0,
		quickSearch: true,
		isPure: true,
	},
	{
		field: 'independentDate',
		title: '独立日期',
		type: 'independentDate',
		defaultValue: ['2023-09-01', '2023-09-30'],
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
		props: {
			data: data,
		},
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

interface RowVO {
	id: number;
	name: string;
	nickname: string;
	role: string;
	sex: string;
	age: number;
	address: string;
	// 生日
	birthday: string;
	// 身高
	height: number;
	// 体重
	weight: number;
	// 体脂率
	bodyFatRate: number;
	// 体型
	bodyShape: string;
	// 体质指数
	bmi: number;
	// 肺活量
	lungCapacity: number;
	// 血压
	bloodPressure: string;
	// 心率
	heartRate: number;
	// 血氧
	bloodOxygen: number;
	// 体温
	bodyTemperature: number;
	// 睡眠时长
	sleepDuration: number;
}

const gridOptions = reactive<I_Table_Grid_Props<RowVO>>({
	border: true,
	height: 'auto',
	align: null,
	columnConfig: {
		resizable: true,
	},
	columns: [
		{ type: 'checkbox', width: 50 },
		{ type: 'seq', width: 60 },
		{ field: 'name', title: '名字', width: 100 },
		{ field: 'nickname', title: '昵称', width: 100 },
		{ field: 'role', title: '角色', width: 100 },
		{ field: 'address', title: '地址', showOverflow: true, width: 100 },
		{ field: 'sex', title: '性别', showOverflow: true, width: 100 },
		{ field: 'age', title: '年龄', width: 100 },
		{ field: 'birthday', title: '生日', width: 100 },
		{ field: 'height', title: '身高', width: 100 },
		{ field: 'weight', title: '体重', width: 100 },
		{ field: 'bodyFatRate', title: '体脂率', width: 100 },
		{ field: 'bodyShape', title: '体型', width: 100 },
		{ field: 'bmi', title: '体质指数', width: 100 },
		{ field: 'lungCapacity', title: '肺活量', slots: { default: 'default_button' }, width: 100 },
		{ field: 'bloodPressure', title: '血压', slots: { default: 'default_button' }, width: 100 },
		{ field: 'heartRate', title: '心率', slots: { default: 'default_button' }, width: 100 },
		{ field: 'bloodOxygen', title: '血氧', slots: { default: 'default_button' }, width: 100 },
		{ field: 'bodyTemperature', title: '体温', slots: { default: 'default_button' }, width: 100 },
		{ field: 'sleepDuration', title: '睡眠时长', slots: { default: 'default_sleepDuration' }, width: 100 },
	],
	proxyConfig: {
		seq: true, // 启用动态序号代理（分页之后索引自动计算为当前页的起始序号）
		message: true, // 启用消息提示代理
		props: {
			result: 'result',
			total: 'page.total',
		},
		ajax: {
			// 查询方法，可以通过 proxy-config.props 配置读取响应结构的字段；接收 Promise
			query: ({ page, sort, sorts, filters, form }) => {
				console.log('page', page);
				console.log('sort', sort);
				console.log('sorts', sorts);
				console.log('filters', filters);
				console.log('form', form);
				return findPageList(page.currentPage, page.pageSize);
			},
			// 删除方法，提交的参数 { removeRecords }
			delete: ({ body }) => {
				console.log('body', body.removeRecords);
				return new Promise((resolve) => {
					setTimeout(() => {
						body.removeRecords.forEach((record) => {
							console.log('record', record);
							jlgGrid.value?.commitProxy('remove', false);
							resolve({ message: 'success' });
						});
					}, 100);
				});
			},
		},
	},
	toolbarConfig: {
		custom: true,
		slots: {
			buttons: 'toolbar_buttons',
		},
	},
	pagerConfig: {
		enabled: true,
		pageSize: 99,
	},
	tableFilterConfig: {
		titleAlign: 'right',
		folding: true,
		items: items,
	},
});

// 模拟分页接口
const findPageList = (currentPage: number, pageSize: number) => {
	return new Promise<{
		page: {
			total: number;
		};
		message: string;
		result: RowVO[];
	}>((resolve) => {
		setTimeout(() => {
			const list = generateData();
			resolve({
				page: {
					total: list.length,
				},
				message: 'success',
				result: list.slice((currentPage - 1) * pageSize, currentPage * pageSize),
			});
		}, 100);
	});
};

const generateRandomRow = () => {
	const randomSex = Math.random() < 0.5 ? 'Male' : 'Female';
	const randomAge = Math.floor(Math.random() * 60) + 18; // Random age between 18 and 77
	const randomHeight = Math.floor(Math.random() * 40) + 150; // Random height between 150 and 190 cm
	const randomWeight = Math.floor(Math.random() * 60) + 40; // Random weight between 40 and 100 kg
	const randomBodyFatRate = Math.random() * 30; // Random body fat rate between 0 and 30%
	const randomBodyShape = Math.random() < 0.5 ? 'Slim' : 'Athletic';
	const randomBMI = Math.random() * 10 + 18; // Random BMI between 18 and 28
	const randomLungCapacity = Math.floor(Math.random() * 2000) + 3000; // Random lung capacity between 3000 and 5000 ml
	const randomBloodPressure = `${Math.floor(Math.random() * 50) + 90}/${Math.floor(Math.random() * 50) + 60}`; // Random blood pressure between 90/60 and 140/110 mmHg
	const randomHeartRate = Math.floor(Math.random() * 50) + 60; // Random heart rate between 60 and 110 bpm
	const randomBloodOxygen = Math.random() * 20 + 80; // Random blood oxygen level between 80 and 100%
	const randomBodyTemperature = Math.random() * 2 + 36.5; // Random body temperature between 36.5 and 38.5°C
	const randomSleepDuration = Math.floor(Math.random() * 7) + 5; // Random sleep duration between 5 and 12 hours

	return {
		id: Math.floor(Math.random() * 100000), // Random ID
		name: 'User' + Math.floor(Math.random() * 100), // Random name
		nickname: 'Nickname' + Math.floor(Math.random() * 100), // Random nickname
		role: 'Role' + Math.floor(Math.random() * 5), // Random role
		sex: randomSex,
		age: randomAge,
		address: 'Address' + Math.floor(Math.random() * 100), // Random address
		birthday: 'YYYY-MM-DD', // Placeholder birthday
		height: randomHeight,
		weight: randomWeight,
		bodyFatRate: randomBodyFatRate,
		bodyShape: randomBodyShape,
		bmi: randomBMI,
		lungCapacity: randomLungCapacity,
		bloodPressure: randomBloodPressure,
		heartRate: randomHeartRate,
		bloodOxygen: randomBloodOxygen,
		bodyTemperature: randomBodyTemperature,
		sleepDuration: randomSleepDuration,
	};
};

const generateData = () => {
	const data = [];
	for (let i = 0; i < 999; i++) {
		data.push(generateRandomRow());
	}
	return data;
};

function handleFlushed() {
	jlgGrid.value?.commitProxy('reload', true);
}
// 新增
function handleAdd() {
	jlgGrid.value?.commitProxy('insert', false, {
		id: Math.floor(Math.random() * 100000),
		name: 'User' + Math.floor(Math.random() * 100),
		nickname: 'Nickname' + Math.floor(Math.random() * 100),
		role: 'Role' + Math.floor(Math.random() * 5),
		sex: 'Male',
		age: Math.floor(Math.random() * 60) + 18,
		address: 'Address' + Math.floor(Math.random() * 100),
		birthday: 'YYYY-MM-DD',
		height: Math.floor(Math.random() * 40) + 150,
		weight: Math.floor(Math.random() * 60) + 40,
		bodyFatRate: Math.random() * 30,
		bodyShape: Math.random() < 0.5 ? 'Slim' : 'Athletic',
		bmi: Math.random() * 10 + 18,
		lungCapacity: Math.floor(Math.random() * 2000) + 3000,
		bloodPressure: `${Math.floor(Math.random() * 50) + 90}/${Math.floor(Math.random() * 50) + 60}`,
		heartRate: Math.floor(Math.random() * 50) + 60,
		bloodOxygen: Math.random() * 20 + 80,
		bodyTemperature: Math.random() * 2 + 36.5,
		sleepDuration: Math.floor(Math.random() * 7) + 5,
	});
}
// 前端删除
function handleDelete() {
	jlgGrid.value?.commitProxy('remove', () => {
		const selectRecords = jlgGrid.value?.xGrid.getCheckboxRecords();
		if (selectRecords.length > 3) {
			ElMessage({
				message: '一次最多只能删除3条数据!',
				type: 'warning',
			});
			return false;
		}
		return true;
	});
}
// 后端删除
function handleDelete2() {
	jlgGrid.value?.commitProxy('delete', true);
}
</script>

<style scoped lang="scss"></style>
