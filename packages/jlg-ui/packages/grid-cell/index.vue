<template>
	<div :class="['grid-cell', props.center ? 'grid-cell-center' : '']" :style="styles">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { I_Grid_Layout_Props } from '../grid-layout/type';
import { I_Grid_Cell_Props } from './type';

defineOptions({
	name: 'GridCell',
});

const props = withDefaults(defineProps<I_Grid_Cell_Props>(), {
	width: 0,
	height: 0,
	top: 0,
	left: 0,
	center: false,
});

const gridLayoutProps = inject<I_Grid_Layout_Props>('grid-layout-props');

const styles = computed(() => ({
	['grid-column']: props.left && props.width ? props.left + '/ span ' + props.width : 'span ' + props.width,
	['grid-row']: props.top && props.height ? props.top + '/ span ' + props.height : 'span ' + props.height,
	['border']: gridLayoutProps.border ? '1px solid #ccc' : '',
}));
</script>

<style scoped lang="scss">
.grid-cell-center {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
