<template>
	<el-radio-group v-model="radio">
		<el-radio value="1" size="large">男</el-radio>
		<el-radio value="2" size="large">女</el-radio>
	</el-radio-group>
</template>

<script setup lang="ts">
defineOptions({
	name: 'JlgFormRadio',
});

const radio = ref('');
</script>

<style scoped lang="scss"></style>
