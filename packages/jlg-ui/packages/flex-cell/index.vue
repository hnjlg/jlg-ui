<template>
	<div class="jlg-flex-cell" :style="styleComputed">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { T_Flex_Cell_Props, T_Flex_Layout_Collect_Flex_Cell_Props_Fn, T_Jlg_Flex_Layout_Props } from '../flex-layout/type';
import { findLength, findPosition, groupCols } from './lib';
import { E_Cell_Position, T_Jlg_Flex_Cell_Props } from './type';

defineOptions({
	name: 'JlgFlexCell',
});

const props = withDefaults(defineProps<T_Jlg_Flex_Cell_Props>(), {});

const flexLayoutProps: T_Jlg_Flex_Layout_Props = inject('flexLayoutProps');

const flexLayoutCollectFlexCellPropsFn: T_Flex_Layout_Collect_Flex_Cell_Props_Fn = inject('flexLayoutCollectFlexCellPropsFn');

const flexCellProps: Ref<T_Flex_Cell_Props> = inject('flexCellProps');

const uid = String(new Date().getTime());

const styleComputed = computed(() => {
	// 计算宽度
	const widthPercentage = (props.col / flexLayoutProps.col) * 100 + '%';
	const gapWidth = (parseFloat(flexLayoutProps.gap) * (colLengthComputed.value - 1)) / colLengthComputed.value;
	const width = `calc(${widthPercentage} - ${gapWidth}${flexLayoutProps.gap.replace(/\d+/g, '')})`;
	// 计算右边距
	const marginRight = isFirstOrEndOrNotComputed.value.type === E_Cell_Position.尾部 ? '0px' : `calc(${flexLayoutProps.gap})`;
	return { width, marginRight };
});

const isFirstOrEndOrNotComputed = computed(() => {
	return findPosition(groupCols(flexCellProps.value, flexLayoutProps.col), uid);
});

const colLengthComputed = computed(() => {
	return findLength(groupCols(flexCellProps.value, flexLayoutProps.col), uid);
});

watch(
	props,
	(newValue: T_Jlg_Flex_Layout_Props) => {
		if (!newValue) return;
		flexLayoutCollectFlexCellPropsFn({
			uid,
			props: {
				...newValue,
				uid,
			},
		});
	},
	{
		immediate: true,
		deep: true,
	}
);
</script>

<style scoped lang="scss"></style>
