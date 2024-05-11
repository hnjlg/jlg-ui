<template>
	<div class="grid-layout" :style="styles">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { I_Grid_Layout_Props } from './type';

defineOptions({
	name: 'JlgGridLayout',
});

const props = withDefaults(defineProps<I_Grid_Layout_Props>(), { inline: false, width: '100%', height: 'auto', border: false });

provide('grid-layout-props', props);

const repeatString = (str: string, num: number) => Array.from({ length: num }, () => str).join(' ');

const repeatStringColumns = computed(() => repeatString('1fr', props.columns));

const repeatStringRows = computed(() => repeatString('1fr', props.rows));

const styles = computed(() => ({
	width: props.width,
	height: props.height,
	padding: props.padding,
	display: props.inline ? 'inline-grid' : 'grid',
	['grid-template-columns']: repeatStringColumns.value,
	['grid-template-rows']: repeatStringRows.value,
	['grid-auto-flow']: props.flow,
	gap: props.gap,
}));
</script>
