<template>
	<el-button @click="gather">收集数据</el-button>
	{{ formData }}
	<jlg-form ref="JlgFormRef" label-position="top" :gather-props="{ col: 1, allCol: 3 }">
		<jlg-grid-layout v-bind="gridLayoutProps">
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="Input测试placeholder" prop="input">
					<jlg-input
						v-model="formData.input"
						:tool-tip-props="{
							effect: 'light',
						}"
					></jlg-input>
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="Select测试placeholder">
					<jlg-select v-model="formData.select">
						<jlg-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
					</jlg-select>
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="number">
					<jlg-input-number v-model="formData.number" @change="valueChange"> </jlg-input-number>
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="date-picker">
					<jlg-date-picker v-model="formData.datePicker" type="date" />
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="time-select">
					<jlg-time-select v-model="formData.timeSelect" start="08:30" step="00:15" end="18:30" />
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="rate">
					<jlg-rate v-model="formData.rate" />
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="radio">
					<jlg-radio-group v-model="formData.radio">
						<jlg-radio value="1" size="small">Option 1</jlg-radio>
						<jlg-radio value="2" size="small">Option 2</jlg-radio>
					</jlg-radio-group>
				</jlg-form-item>
			</jlg-grid-cell>
		</jlg-grid-layout>
	</jlg-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { T_JlgForm_Props } from '@pac/form/type';
import { JlgGridLayout, JlgGridCell } from 'jlg-ui';

defineOptions({
	name: 'FormBaseUseNotJson',
});

const JlgFormRef = ref();

const formData = ref({
	input: '',
	select: 1,
	number: 0,
	datePicker: '',
	timeSelect: '',
	rate: 0,
	radio: '',
});

const gridLayoutProps = ref<T_JlgForm_Props['gridLayoutProps']>({
	padding: '0px',
	flow: 'row',
	columns: 5,
	gap: '10px',
	inline: true,
	border: false,
});

const options = [
	{
		value: 1,
		label: 'Option1',
	},
	{
		value: 2,
		label: 'Option2',
	},
	{
		value: 3,
		label: 'Option3',
	},
	{
		value: 4,
		label: 'Option4',
	},
	{
		value: 5,
		label: 'Option5',
	},
];

const valueChange = (v) => {
	console.log(v);
};

const gather = () => {
	console.log(JlgFormRef.value.getGatherData());
};
</script>

<style scoped lang="scss"></style>
