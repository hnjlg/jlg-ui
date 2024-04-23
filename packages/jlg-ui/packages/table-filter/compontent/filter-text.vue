<template>
	<div class="jlg-filter-text">
		<el-input v-model.trim="modelValue" :placeholder="'请输入' + props.item.title" clearable size="default">
			<template #append>
				<el-select v-model="searchType" size="default" class="slot-select" placeholder="">
					<el-option label="精确" :value="0" />
					<el-option label="模糊" :value="1" />
				</el-select>
			</template>
		</el-input>
	</div>
</template>

<script setup lang="ts">
import { I_Table_Filter_Item } from '../../table-filter/type';

defineOptions({
	name: 'FilterText',
});
const modelValue = defineModel<string>({ required: true });
const searchType = defineModel<number>('searchType', { required: true, default: 0 });
const props = withDefaults(defineProps<{ item: I_Table_Filter_Item }>(), {});
</script>

<style scoped lang="scss">
.jlg-filter-text {
	margin-right: var(--jlg-filter-margin-right);
	width: 100%;
	.slot-select {
		width: 50px;
		:deep(.el-select__wrapper) {
			border: none;
			padding: 4px 4px;
			font-size: 12px;
			.el-icon {
				font-size: 12px;
			}
		}
	}
}
</style>
