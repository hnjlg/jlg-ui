<template>
	<div class="jlg-flex-layout">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { T_Flex_Cell_Props, T_Flex_Layout_Collect_Flex_Cell_Props_Fn, T_Jlg_Flex_Layout_Props } from './type';

defineOptions({
	name: 'JlgFlexLayout',
});

const props = withDefaults(defineProps<T_Jlg_Flex_Layout_Props>(), {
	gap: '0px',
});

provide('flexLayoutProps', props);

const flexCellProps = ref<T_Flex_Cell_Props>({});

provide('flexCellProps', flexCellProps);

const flexLayoutCollectFlexCellPropsFn: T_Flex_Layout_Collect_Flex_Cell_Props_Fn = (option) => {
	flexCellProps.value[option.uid] = {
		uid: option.uid,
		...option.props,
	};
};
provide('flexLayoutCollectFlexCellPropsFn', flexLayoutCollectFlexCellPropsFn);
</script>

<style scoped lang="scss">
.jlg-flex-layout {
	display: flex;
	flex-wrap: wrap;
}
</style>
