<template>
	<div class="jlg-filter-wrap filter-input-number">
		<div v-show="!props.item.quickSearch" class="jlg-filter-label">{{ props.item.title }}</div>
		<div class="jlg-filter-content">
			<el-input-number v-model="modelValue" :class="{ 'number-pure-status': props.item.isPure }" size="default" clearable @mousewheel.prevent>
			</el-input-number>
			<template v-if="props.item.isPure !== true">
				<el-select v-model="searchType" size="default" class="slot-select" placeholder="">
					<el-option label="大于" :value="0" />
					<el-option label="小于" :value="1" />
					<el-option label="等于" :value="2" />
					<el-option label="模糊" :value="3" />
				</el-select>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_Table_Filter_Item } from '../../table-filter/type';

defineOptions({
	name: 'FilterInputNumber',
});
const modelValue = defineModel<string>({ required: true });
const props = withDefaults(defineProps<{ item: I_Table_Filter_Item }>(), {});
const searchType = defineModel<number>('searchType', { required: true, default: 0 });
</script>

<style scoped lang="scss">
@import url('../../../styles/filter-item-wrap.scss');
.filter-input-number {
	:deep(.el-input__wrapper) {
		box-shadow: 1px 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
		&.is-focus {
			box-shadow: 1px 0 0 1px var(--el-border-color-hover) inset;
		}
		&:hover {
			box-shadow: 1px 0 0 1px var(--el-border-color-hover) inset;
		}
	}
}
</style>
