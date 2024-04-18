<template>
	<el-form :inline="true" :model="formInline">
		<el-form-item label="Approved by">
			<el-input v-model="formInline.user" placeholder="Approved by" clearable />
		</el-form-item>
		<el-form-item label="Activity zone">
			<el-select v-model="formInline.region" placeholder="Activity zone" clearable>
				<el-option label="Zone one" value="shanghai" />
				<el-option label="Zone two" value="beijing" />
			</el-select>
		</el-form-item>
		<el-form-item label="Activity time">
			<el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">{{ props.test }}</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { I_JlgForm_Props } from './type';

const props = withDefaults(defineProps<I_JlgForm_Props>(), {});

defineOptions({
	name: 'JlgForm',
});

const formInline = reactive({
	user: '',
	region: '',
	date: '',
});

const onSubmit = () => {
	console.log('submit!');
};
</script>
