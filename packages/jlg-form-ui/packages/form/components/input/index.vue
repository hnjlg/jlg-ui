<template>
	<div>
		<el-input v-model="name" />
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'JlgFormInput',
});

const name = ref('');
</script>

<style scoped></style>
