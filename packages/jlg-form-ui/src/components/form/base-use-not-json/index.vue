<template>
	<el-button @click="gather">收集数据</el-button>
	<el-button @click="validator">校验</el-button>
	{{ formData }}
	<jlg-form ref="JlgFormRef" :label-position="E_JlgForm_LabelPosition['内嵌']" :gather-props="{ col: 1, allCol: 3 }" :model="formData" :rules="rules">
		<jlg-grid-layout v-bind="gridLayoutProps">
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item
					label="Input测试placeholder"
					prop="input"
					:validate-rules="[[E_FormValidatorRulesValidateFunEnum.必填校验], [E_FormValidatorRulesValidateFunEnum.小数位校验, 0]]"
				>
					<jlg-input
						v-model="formData.input"
						:tool-tip-props="{
							effect: 'light',
						}"
					></jlg-input>
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="datePicker" prop="datePicker" :validate-rules="[[E_FormValidatorRulesValidateFunEnum.必填校验]]">
					<jlg-date-picker v-model="formData.datePicker" type="date" />
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell :width="1" :height="1">
				<jlg-form-item label="number">
					<jlg-input-number v-model="formData.number" @change="valueChange"> </jlg-input-number>
				</jlg-form-item>
			</jlg-grid-cell>
			<jlg-grid-cell v-for="i in 30" :key="i" :width="1" :height="1">
				<jlg-form-item :label="'Select测试placeholder' + i">
					<jlg-select v-model="formData.select">
						<jlg-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
					</jlg-select>
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
						<jlg-radio value="1" label="Option1">Option 1</jlg-radio>
						<jlg-radio value="2" label="Option2">Option 2</jlg-radio>
					</jlg-radio-group>
				</jlg-form-item>
			</jlg-grid-cell>
		</jlg-grid-layout>
	</jlg-form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { T_JlgForm_Props, E_JlgForm_LabelPosition } from '@pac/form/type';
import { JlgGridLayout, JlgGridCell } from 'jlg-ui';
import { E_FormValidatorRulesValidateFunEnum } from '@pac/rule';

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

const rules = reactive({
	input: [{ required: true, message: 'Please input input', trigger: 'blur' }],
});

const gridLayoutProps = ref<T_JlgForm_Props['gridLayoutProps']>({
	padding: '0px',
	flow: 'row',
	columns: 5,
	gap: '10px',
	inline: true,
	border: false,
});

const options = computed(() => {
	return new Array(10).fill(0, 0, 10).map((i, index) => {
		return {
			value: index,
			label: 'Option' + index,
		};
	});
});

const valueChange = (v) => {
	console.log(v);
};

const gather = () => {
	console.log(JlgFormRef.value.getGatherData());
};

const validator = () => {
	JlgFormRef.value._ref.validate((valid, fields) => {
		if (valid) {
			alert('submit!');
		} else {
			console.log(fields);
			alert('error submit!');
		}
	});
};
</script>

<style scoped lang="scss"></style>
