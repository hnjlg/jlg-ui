<template>
	<el-option v-bind="mergeOptionPropsComputed">
		<template v-for="(index, name) in slots">
			<slot :name="name" />
		</template>
	</el-option>
</template>

<script setup lang="ts">
import { globalComponentConfig } from '../index';
import { I_Jlg_Option_Props } from './type';

defineOptions({
	name: 'JlgOption',
});

const props = withDefaults(defineProps<I_Jlg_Option_Props>(), {});

const attrs = useAttrs();

const slots = useSlots();

const mergeOptionPropsComputed = computed(() => {
	return {
		...globalComponentConfig.option,
		...props,
		...attrs,
	};
});
</script>

<style scoped></style>
