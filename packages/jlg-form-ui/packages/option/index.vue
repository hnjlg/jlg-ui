<template>
	<el-option v-bind="props">
		<template v-for="(index, name) in slots">
			<slot :name="name" />
		</template>
	</el-option>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { I_Jlg_Option_Props } from './type';

defineOptions({
	name: 'JlgOption',
});

const props = withDefaults(defineProps<I_Jlg_Option_Props>(), {
	disabled: false,
});

const slots = useSlots();
</script>

<style scoped></style>
