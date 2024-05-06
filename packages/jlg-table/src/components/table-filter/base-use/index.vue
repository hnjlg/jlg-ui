<template>
	<table-grid ref="jlgGrid" v-bind="gridOptions" style="height: 95vh" v-on="gridEvent" @checkbox-change="checkboxChange">
		<template #toolbar_buttons>
			<vxe-button @click="handleAdd">新增</vxe-button>
			<vxe-button @click="handleDelete">删除</vxe-button>
			<vxe-button @click="handleDelete2">删除2</vxe-button>
			<vxe-button>保存</vxe-button>
			<vxe-button>导出</vxe-button>
		</template>
		<template #toolbar_tools>
			<el-button type="primary" @click="resetCustomEvent">恢复默认</el-button>
			<el-button type="primary" @click="handleFlushed">刷新</el-button>
			<el-button type="primary" @click="handleDisplayCustomization">显示自定义</el-button>
			<vxe-button @click="zoomEvent">切换表格最大化/还原</vxe-button>
		</template>
		<template #default_sleepDuration>
			<img width="50" src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt=""
		/></template>
		<template #gaugeDate>
			<el-tag type="primary">Tag 1</el-tag>
		</template>
		<!--   组件内置操作列插槽（default_handle_operation 不可变） -->
		<template #default_handle_operation>
			<vxe-button>编辑</vxe-button>
		</template>
	</table-grid>
</template>

<script setup lang="ts">
import TableGrid from '../../../../packages/table-base/index.vue';
import { onMounted, reactive, ref } from 'vue';
import { I_Table_Grid_Props, JlgGridInstance } from '../../../../packages/table-base/type';
import { ElMessage } from 'element-plus';
import axios from 'axios';
import { VxeGridListeners, VxeGridPropTypes } from 'vxe-table';
import { VxeGridDefines } from 'vxe-table/types/grid';
import { useGetSysConfig, useSaveSysConfig } from '@pac/table-filter/useMock';
import TableCustomTemplate, { TableCustomTemplateProps } from '../template/tableCustomTemplate/index.vue';

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
const gridEvent: VxeGridListeners<RowVO> = {
	proxyQuery() {
		console.log('数据代理查询事件');
	},
	proxyDelete() {
		console.log('数据代理删除事件');
	},
	proxySave() {
		console.log('数据代理保存事件');
	},
};

const gridOptions = reactive<I_Table_Grid_Props<RowVO>>({
	id: 'jlgGrid',
	border: true,
	height: 'auto',
	align: null,
	columns: [
		{ type: 'checkbox', width: 50, fixed: 'left' },
		{ type: 'seq', width: 60, fixed: 'left' },
		{
			title: '基本信息',
			colId: 'baseInfo',
			children: [
				{ field: 'name', title: 'Name', width: 100 },
				{
					title: '其他信息',
					colId: 'additionalInfo',
					children: [
						{ field: 'nickname', title: 'Nickname', width: 100, slots: { default: 'default_sleepDuration' } },
						{ field: 'age', title: 'Age', sortable: true, width: 100 },
					],
				},
				{
					field: 'sex',
					title: '性别',
					sortable: true,
					width: 100,
					formatter(params) {
						return params.cellValue === 1 ? '男' : '女';
					},
				},
			],
		},
		{
			title: '自定义信息',
			colId: 'customInfo',
			children: [
				{ field: 'role', title: '角色', width: 100, slots: { default: 'default_sleepDuration' } },
				{
					field: 'gaugeDate11',
					title: '自定义插槽',
					width: 100,
					slots: { default: 'gaugeDate' },
				},
				{
					field: 'inductionDate22',
					title: '自定义插槽22',
					width: 150,
					slots: { default: 'gaugeDate' },
				},
			],
		},
		{
			field: 'status',
			title: '状态',
			width: 100,
		},
		{
			field: 'dep',
			title: '应聘部门',
			width: 120,
		},
		{
			field: 'post',
			title: '应聘岗位',
			width: 140,
		},
		{
			field: 'school',
			title: '毕业院校',
			width: 160,
		},
		{
			field: 'specialty',
			title: '专业',
			width: 160,
		},
		{
			field: 'phone',
			title: '联系方式',
			width: 120,
		},
		{
			field: 'gaugeDate',
			title: '预计入职时间',
			width: 200,
		},
		{
			field: 'inductionDate',
			title: '入职时间333',
			width: 200,
		},
		// {
		// 	field: 'inductionDate2',
		// 	title: '入职时间2',
		// 	width: 200,
		// },
	],
	rowConfig: {
		keyField: 'id',
	},
	checkboxConfig: {
		reserve: true,
	},
	proxyConfig: {
		seq: true, // 启用动态序号代理（分页之后索引自动计算为当前页的起始序号）
		message: true, // 启用消息提示代理
		props: {
			// 响应结果中获取数据列表的属性(无分页时启用)
			list: 'data.content.item1',
			// 只对 pager-config 配置了有效，响应结果中获取数据列表的属性
			result: 'data.content.item1',
			// 只对 pager-config 配置了有效，响应结果中获取分页的属性
			total: 'data.content.item2',
		},
		ajax: {
			// 查询方法，可以通过 proxy-config.props 配置读取响应结构的字段；接收 Promise
			query: (params) => {
				return mockGetPageList(params);
			},
			// 删除方法，提交的参数 { removeRecords }
			delete: ({ body }) => {
				console.log('body', body.removeRecords);
				return new Promise((resolve) => {
					/// 模拟删除
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
		/// 获取远程配置
		getSysConfig: useGetSysConfig,
		// 保存配置
		saveSysConfig: useSaveSysConfig,
	},
	toolbarConfig: {
		custom: true,
		loading: false,
		perfect: false,
		tools: [],
		slots: {
			buttons: 'toolbar_buttons',
			tools: 'toolbar_tools',
		},
	},
	pagerConfig: {
		enabled: true,
		pageSize: 60,
	},
	// 筛选条件配置
	tableFilterConfig: {
		titleAlign: 'right',
		folding: true,
		items: [
			{
				field: 'text',
				title: '文本',
				type: 'text',
				searchType: 1,
				defaultValue: '555',
				quickSearch: true,
				isPure: false,
				visible: true,
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
		],
	},
	// 操作列配置
	operationConfig: {
		width: 80,
		title: '操作列',
	},
	// 存储配置
	storageConfig: {
		enabled: true,
		autoStorage: true,
	},
});
// 模拟分页接口
const mockGetPageList = (params: VxeGridPropTypes.ProxyAjaxQueryParams<RowVO>) => {
	const { page, sort, sorts, filters, form } = params;
	console.log('page', page);
	console.log('sort', sort);
	console.log('sorts', sorts);
	console.log('filters', filters);
	console.log('form', form);
	// 发送 POST 请求
	return axios({
		method: 'post',
		url: 'http://10.1.2.9:10023/BUS000012/EntryManage/GetEntryManegeToPage',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Basic Qd0y/cHYdU+yGHci8vBTng',
		},
		data: {
			pageIndex: page.currentPage,
			pageSize: page.pageSize,
			sorts,
			...form,
		},
	});
};

function handleFlushed() {
	jlgGrid.value?.refresh(false);
}

function resetCustomEvent() {
	jlgGrid.value?.resetCustomEvent();
}

// 新增
function handleAdd() {
	jlgGrid.value?.commitProxy('insert', false, {});
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
const zoomEvent = () => {
	const $grid = jlgGrid.value?.xGrid;
	if ($grid) {
		$grid.zoom();
	}
};

function checkboxChange(data: VxeGridDefines.CheckboxChangeEventParams) {
	console.log('checkboxChange', data.checked);
}

function handleDisplayCustomization() {
	const collectColumn = jlgGrid.value.xGrid.getTableColumn().collectColumn;
	console.log(collectColumn);
	if (jlgGrid.value?.renderCustomTemplate) {
		jlgGrid.value.renderCustomTemplate<TableCustomTemplateProps>(TableCustomTemplate, {
			xGrid: jlgGrid.value.reactData.$grid,
			beforeDestroy: () => {
				console.log('销毁前销毁前销毁前销毁前');
			},
		});
	}
}
</script>

<style scoped lang="scss"></style>
