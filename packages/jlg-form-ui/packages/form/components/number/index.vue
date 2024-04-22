<template>
	<div>
		<el-input-number v-model="num" :min="1" :max="10" />
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'JlgFormNumber',
});

const num = ref(0);
</script>

<style scoped></style>
