<template>
	<el-form ref="refForm" class="table-filter" :model="form">
		<pre>{{ form }}</pre>
		<div class="table-filter__container" :class="'is--' + (isFolding ? 'folding' : 'unfold')">
			<div v-for="item in items" :key="item.field" class="table-filter__card" :class="item.className">
				<el-form-item
					:prop="item.field"
					:label-position="item.titleAlign"
					:label-width="item.titleWidth != null ? item.titleWidth : props.titleWidth"
				>
					<template #label>
						<el-tooltip
							:content="item.title"
							placement="top"
							:disabled="isShowTooltip || item.titleOverflow === false || item.titleOverflow === 'title' || item.titleOverflow === 'ellipsis'"
						>
							<span
								:title="item.titleOverflow === 'title' ? item.title : ''"
								:style="labelStyle(item)"
								class="text-overflow-hidden"
								:class="item.titleClassName"
								@mouseover="($event) => visibleTooltip($event, item.title)"
								>{{ item.title }}</span
							>
						</el-tooltip>
					</template>
					<template #default>
						<component :is="renderContentTitle(item)" v-model="form[item.field]" v-model:search-type="item.searchType" :item="item" />
					</template>
				</el-form-item>
			</div>
			<div class="table-filter__card">
				<el-button>查询</el-button>
				<el-button @click="handleReset">重置</el-button>
			</div>
		</div>
		<!--  展开/折叠 操作区域   -->
		<div class="table-filter__operation">
			<el-divider>
				<div class="table-filter__divider" @click="handleFolding">
					<span style="margin-right: 5px">{{ isFolding ? '展开筛选' : '收起筛选' }}</span>
					<el-icon><ArrowDown v-if="isFolding" /> <ArrowUp v-else /></el-icon>
				</div>
			</el-divider>
		</div>
	</el-form>
</template>

<script setup lang="ts">
import { CSSProperties, nextTick, onMounted, ref } from 'vue';
import { I_Table_Filter_Props, I_Table_Filter_Item } from './type';
import { ElTooltip, FormInstance } from 'element-plus';
import GlobalConfig from '../../lib/useGlobalConfig';
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue';
import isString from 'xe-utils/isString';
import isNumber from 'xe-utils/isNumber';
import FilterText from './compontent/filter-text.vue';
import FilterInputNumber from './compontent/filter-input-number.vue';

defineOptions({
	name: 'TableFilter',
});
const refForm = ref<FormInstance>();
const props = withDefaults(defineProps<I_Table_Filter_Props>(), {
	titleAlign: () => GlobalConfig.tableFilter.titleAlign,
	titleWidth: () => GlobalConfig.tableFilter.titleWidth,
	folding: () => GlobalConfig.tableFilter.folding,
});
const itemsModelValue = defineModel<I_Table_Filter_Item[]>('items', { required: true });

const form = reactive({});

const items = computed(() => itemsModelValue.value.filter((item) => item.visible !== false && item.quickSearch));

const isShowTooltip = ref(false);
function visibleTooltip(event: Event, labelText: string) {
	if (!labelText) {
		isShowTooltip.value = true;
		return;
	}
	const { offsetWidth, scrollWidth } = event.target as HTMLElement;
	isShowTooltip.value = offsetWidth >= scrollWidth;
}
const labelStyle = (item: I_Table_Filter_Item): CSSProperties => {
	const labelWidth = addUnit(item.titleWidth || props?.titleWidth || '');
	if (labelWidth) return { width: labelWidth };
	return {};
};

const isFolding = ref(props.folding);

const renderContentTitle = (item: I_Table_Filter_Item) => {
	switch (item.type) {
		case 'text':
			return FilterText;
		case 'number':
			return FilterInputNumber;
		default:
			return FilterText;
	}
};
function isStringNumber(val: string | number) {
	if (!isString(val)) {
		return false;
	}
	return !Number.isNaN(Number(val));
}
function addUnit(value?: string | number, defaultUnit = 'px') {
	if (!value) return '';
	if (isNumber(value) || isStringNumber(value)) {
		return `${value}${defaultUnit}`;
	} else if (isString(value)) {
		return value;
	}
}

// 设置初始值
function handleInitialValue() {
	itemsModelValue.value.forEach((item) => {
		form[item.field] = item.defaultValue;
	});
}

/// 重置查询条件
function handleReset() {
	nextTick(() => {
		refForm.value?.resetFields();
		handleInitialValue();
	});
}
function handleFolding() {
	isFolding.value = !isFolding.value;
}

onMounted(() => {
	handleInitialValue();
});

defineExpose({
	handleReset,
	handleInitialValue,
});
</script>

<style scoped lang="scss">
@import url('../../styles/table-filter.scss');
@import url('../../styles/table-filter-card-responsive.scss');
</style>
