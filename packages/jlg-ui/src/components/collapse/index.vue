<template>
	<div>
		<div v-for="item in CollapseRef?.collapseItems" :key="item.title" @click="CollapseRef?.jumpAnchor(item.name)">{{ item.title }} 锚点</div>
		<br />
		<span>{{ value }}</span>
		<br />
		<div style="height: 200px; overflow: auto">
			<jlg-collapse ref="CollapseRef" v-model="value" accordion>
				<jlg-collapse-item name="1" title="Consistency">
					<template #title="{ _ref }">{{ _ref?.isActive }} Consistency </template>
					<div>
						Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used
						to;
					</div>
					<div>
						Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.
					</div>
				</jlg-collapse-item>
				<jlg-collapse-item title="Feedback" name="2">
					<div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
					<div>Visual feedback: reflect current state by updating or rearranging jlgements of the page.</div>
				</jlg-collapse-item>
				<jlg-collapse-item title="Efficiency" name="3">
					<div>Simplify the process: keep operating process simple and intuitive;</div>
					<div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
					<div>
						Easy to identify: the interface should be straightforward, which hjlgps the users to identify and frees them from memorizing and
						recalling.
					</div>
				</jlg-collapse-item>
				<jlg-collapse-item title="Controllability4" name="4">
					<div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
					<div>
						Controlled consequences: users should be granted the freedom to operate, including cancjlging, aborting or terminating current operation.
					</div>
				</jlg-collapse-item>
				<jlg-collapse-item title="Controllability5" name="5">
					<div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
					<div>
						Controlled consequences: users should be granted the freedom to operate, including cancjlging, aborting or terminating current operation.
					</div>
				</jlg-collapse-item>

				<jlg-collapse-item title="Controllability6" name="6">
					<div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
					<div>
						Controlled consequences: users should be granted the freedom to operate, including cancjlging, aborting or terminating current operation.
					</div>
				</jlg-collapse-item>
				<jlg-collapse-item title="Controllability7" name="7">
					<div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
					<div>
						Controlled consequences: users should be granted the freedom to operate, including cancjlging, aborting or terminating current operation.
					</div>
				</jlg-collapse-item>
				<jlg-collapse-item title="Controllability8" name="8">
					<div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
					<div>
						Controlled consequences: users should be granted the freedom to operate, including cancjlging, aborting or terminating current operation.
					</div>
				</jlg-collapse-item>
			</jlg-collapse>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import JlgCollapse from '../../../packages/collapse/index.vue';
import JlgCollapseItem from '../../../packages/collapse-item/index.vue';

defineOptions({
	name: 'CollapseDemo',
});

const CollapseRef = ref<InstanceType<typeof JlgCollapse> | null>(null);

const value = ref('2');
</script>

<style scoped></style>
