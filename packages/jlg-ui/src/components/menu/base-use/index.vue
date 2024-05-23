<template>
	<div class="menu-base-use">
		<jlg-menu
			:menu-data="menuData"
			default-active="2"
			:collect-menu-keys="['1-1-2']"
			:menu-data-record="{
				title: 'label',
			}"
		>
			<template #logo> 系统logo </template>
		</jlg-menu>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import JlgMenu from '@pac/menu/index.vue';

defineOptions({
	name: 'MenuBaseUse',
});

const menuData = ref<any>([
	{
		label: '菜单名称很长很长1',
		iconClass: '',
		key: '1',
		children: [
			{
				label: '菜单1-1',
				iconClass: '',
				key: '1-1',
				children: [
					{
						label: '菜单1-1-1',
						iconClass: '',
						key: '1-1-1',
					},
					{
						label: '菜单1-1-2',
						iconClass: '',
						key: '1-1-2',
					},
				],
			},
			{
				label: '菜单1-2',
				iconClass: '',
				key: '1-2',
				children: [
					{
						label: '菜单1-2-1',
						iconClass: '',
						key: '1-2-1',
					},
					{
						label: '菜单1-2-2',
						iconClass: '',
						key: '1-2-2',
					},
					{
						label: '菜单1-2-3',
						iconClass: '',
						key: '1-2-3',
					},
				],
			},
			{
				label: '菜单1-3',
				iconClass: '',
				key: '1-3',
				children: [
					{
						label: '菜单1-3-1',
						iconClass: '',
						key: '1-3-1',
					},
					{
						label: '菜单1-3-2',
						iconClass: '',
						key: '1-3-2',
					},
					{
						label: '菜单1-3-3',
						iconClass: '',
						key: '1-3-3',
					},
					{
						label: '菜单1-3-4',
						iconClass: '',
						key: '1-3-4',
					},
				],
			},
		],
	},
	{
		label: '菜单2',
		iconClass: '',
		key: '2',
		children: [
			{
				label: '菜单2-1',
				iconClass: '',
				key: '2-1',
				children: [
					{
						label: '菜单2-1-1',
						iconClass: '',
						key: '2-1-1',
					},
				],
			},
		],
	},
	{
		label: '菜单3',
		iconClass: '',
		key: '3',
	},
	{
		label: '菜单4',
		iconClass: '',
		key: '4',
	},
	{
		label: '菜单5',
		iconClass: '',
		key: '5',
	},
	{
		label: '菜单6',
		iconClass: '',
		key: '6',
	},
]);
</script>

<style scoped lang="scss"></style>
