<template>
	{{ formData }}
	<jlg-form label-position="top">
		<jlg-grid-layout v-bind="gridLayoutProps">
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="Input测试placeholder">
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
					<jlg-date-picker v-model="formData.datePicker" type="date" placeholder="Pick a day" />
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="number">
					<jlg-time-select v-model="formData.timeSelect" start="08:30" step="00:15" end="18:30" placeholder="Select time" />
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

const formData = ref({
	input: '',
	select: 1,
	number: 0,
	datePicker: '',
	timeSelect: '',
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
</script>

<style scoped lang="scss"></style>
