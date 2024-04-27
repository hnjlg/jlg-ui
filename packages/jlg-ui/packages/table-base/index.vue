<template>
	<div class="jlg-table-base">
		<vxe-grid ref="xGrid" v-bind="props" :proxy-config="computeProxyOpts">
			<template #top>
				<table-filter ref="tableFilterRef" v-bind="props.tableFilterConfig" v-model:items="items" @save="handleFilterSave"></table-filter>
				<slot name="top"></slot>
			</template>
			<template v-for="(_, name) in $slots" #[name]="slotData" :key="name"><slot :name v-bind="slotData || {}"></slot></template>
		</vxe-grid>
	</div>
</template>
<script setup lang="ts" generic="T">
import TableFilter from '../table-filter';
import { I_Table_Grid_Props, T_Msg } from './type';
import { computed, onMounted, reactive } from 'vue';
import GlobalConfig from '../../lib/useGlobalConfig';
import { VxeGridInstance, VxeGridPropTypes } from 'vxe-table';
import { ElMessageBox, ElMessage } from 'element-plus';
defineOptions({
	name: 'TableBase',
});
const props = withDefaults(defineProps<I_Table_Grid_Props<T>>(), {
	/** 基本属性 */
	// 表格的最小高度
	minHeight: () => GlobalConfig.table.minHeight,
	// 是否带有斑马纹
	stripe: () => GlobalConfig.table.stripe,
	// 是否带有边框
	border: () => GlobalConfig.table.border,
	// 是否圆角边框
	round: () => GlobalConfig.table.round,
	// 表格的尺寸
	size: () => GlobalConfig.table.size,
	// 所有的列对其方式
	align: () => GlobalConfig.table.align,
	// 所有的表头列的对齐方式
	headerAlign: () => GlobalConfig.table.headerAlign,
	// 所有的表尾列的对齐方式
	footerAlign: () => GlobalConfig.table.footerAlign,
	// 是否显示表头
	showHeader: () => GlobalConfig.table.showHeader,
	// 设置表头所有内容过长时显示为省略号
	showHeaderOverflow: () => GlobalConfig.table.showHeaderOverflow,
	// 设置表尾所有内容过长时显示为省略号
	showFooterOverflow: () => GlobalConfig.table.showFooterOverflow,
	layouts: () => GlobalConfig.table.layouts,
	/** 高级属性 */
	// （即将废弃）rowId 已废弃，被 row-config.keyField 替换
	rowId: () => GlobalConfig.table.rowId,
	emptyText: () => GlobalConfig.table.emptyText,
	keepSource: () => GlobalConfig.table.keepSource,
	// 是否自动监听父容器变化去更新响应式表格宽高
	autoResize: () => GlobalConfig.table.autoResize,
	// 列的宽度是否自撑开（可能会被废弃的参数，不要使用）
	fit: () => GlobalConfig.table.fit,
	proxyConfig: () => GlobalConfig.table.proxyConfig,
});
onMounted(() => {
	console.log('onMounted', props);
});
const xGrid = ref<VxeGridInstance<T>>();
const tableFilterRef = ref<InstanceType<typeof TableFilter>>();

const items = computed({
	get: () => props.tableFilterConfig?.items ?? [],
	set: () => {},
});

const reactData = reactive<Record<string, any>>({});

const beforeQuery = (args) => {
	args.form = tableFilterRef.value.getFormData();
	reactData.$grid = args.$grid;
	reactData.isInited = args.isInited;
	reactData.isReload = args.isReload;
	reactData.page = args.page;
	reactData.sort = args.sort;
	reactData.sorts = args.sorts;
	reactData.form = args.form;
	if (props.proxyConfig && props.proxyConfig.beforeQuery) {
		return props.proxyConfig.beforeQuery();
	}
	return args.options(args);
};

const defaultProxyConfig: VxeGridPropTypes.ProxyConfig<T> = {
	beforeQuery,
	message: false,
	seq: true,
};

const computeProxyOpts = computed(() => {
	const proxyConfig = Object.assign({}, GlobalConfig.table.proxyConfig, props.proxyConfig, defaultProxyConfig) as VxeGridPropTypes.ProxyConfig;
	// proxyConfig.ajax = props.proxyConfig.ajax;
	console.log('computeProxyOpts:', proxyConfig);
	return proxyConfig;
});

function commitProxy(code: string, msg: T_Msg = true, ...args: any[]) {
	switch (code) {
		case 'insert':
			if (typeof msg === 'function' && msg() === false) {
				return Promise.resolve();
			}
			return xGrid.value.insert(args ?? {});
		case 'remove':
		case 'delete':
			return handleDeleteRow(code, msg, () => xGrid.value.commitProxy(code, ...args));
	}
	if (xGrid.value) {
		return xGrid.value.commitProxy(code, ...args);
	}
}

const handleDeleteRow = (code: string, msg: T_Msg, callback: () => void): Promise<void> => {
	const selectRecords = reactData.$grid.getCheckboxRecords();
	if (msg === false) {
		if (selectRecords.length) {
			callback();
		}
		return Promise.resolve();
	}
	if (selectRecords.length) {
		if (typeof msg === 'function') {
			if (msg() === false) {
				return Promise.resolve();
			}
		}
		ElMessageBox.confirm('您确定要删除所选记录吗？', '消息提示', {
			confirmButtonText: '确认',
			cancelButtonText: '取消',
			type: 'warning',
		}).then(() => {
			return callback();
		});
	} else {
		ElMessage({
			message: '请至少选择一条数据!',
			type: 'warning',
		});
	}
	return Promise.resolve();
};

function handleFilterSave(data) {
	console.log('handleFilterSave', data);
	console.log('items:', items.value);
	commitProxy('query');
}
defineExpose({
	xGrid,
	commitProxy,
	reactData,
});
</script>
<style scoped lang="scss"></style>
