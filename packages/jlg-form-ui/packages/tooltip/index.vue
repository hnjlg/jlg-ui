<template>
	<el-tooltip :trigger-keys="[]">
		<slot></slot>
	</el-tooltip>
</template>

<script setup lang="ts">
defineOptions({
	name: 'JlgTooltip',
});
</script>

<style scoped></style>
