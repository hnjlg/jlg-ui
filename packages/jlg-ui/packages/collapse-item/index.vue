<template>
	<el-collapse-item :id="collapseKey + mergeCollapseItemPropsComputed.name" ref="_ref" v-bind="mergeCollapseItemPropsComputed">
		<template v-for="name in slotsComputed" #[name]>
			<slot :name="name" />
		</template>

		<template #title>
			<slot name="title" :_ref="_ref">
				{{ mergeCollapseItemPropsComputed.title }}
			</slot>
			<el-icon :class="['el-collapse-item__arrow', _ref?.isActive ? 'is-active' : '', 'customize']"><CaretRight /></el-icon>
		</template>
	</el-collapse-item>
</template>

<script setup lang="ts">
import { T_Jlg_CollapseItem_Props } from './type';
import { CaretRight } from '@element-plus/icons-vue';
import { T_Add_Collapse_Item } from '../collapse/type';

defineOptions({
	name: 'JlgCollapseItem',
});

const props = withDefaults(defineProps<T_Jlg_CollapseItem_Props>(), {});

const attrs = useAttrs();

const slots = useSlots();

const slotsComputed = computed(() => {
	return Object.keys(slots).filter((name) => name !== 'title');
});

const _ref = ref(null);

const mergeCollapseItemPropsComputed = computed(() => {
	return {
		...props,
		...attrs,
	};
});

const collapseKey: string = inject('collapseKey');

const addCollapseItem: T_Add_Collapse_Item = inject('addCollapseItem');

watch(
	() => mergeCollapseItemPropsComputed.value,
	(newValue) => {
		if (!newValue) return;
		addCollapseItem(newValue);
	},
	{
		immediate: true,
		deep: true,
	}
);
</script>

<style scoped lang="scss">
:deep(.el-collapse-item__header) {
	.el-collapse-item__arrow {
		display: none;
		margin-left: 0;
	}

	.customize {
		display: block;
	}
}
</style>
