<template>
	<div v-show="props.isCollect || props.isShow">
		<collect-ed-svg v-if="props.isCollect"></collect-ed-svg>
		<collect-svg v-else></collect-svg>
	</div>
</template>

<script setup lang="ts">
import CollectSvg from '../../../collect.svg';
import CollectEdSvg from '../../../collected.svg';

defineOptions({
	name: 'ShowCollect',
});

const props = withDefaults(
	defineProps<{
		isCollect: boolean;
		isShow: boolean;
	}>(),
	{}
);
</script>

<style scoped lang="scss"></style>
