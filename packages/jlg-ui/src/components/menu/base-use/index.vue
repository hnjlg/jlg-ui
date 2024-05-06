<template>
	<div class="menu-base-use">
		<jlg-menu :menu-data="menuData" default-active="2">
			<template #logo> 系统logo </template>
		</jlg-menu>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
	name: 'MenuBaseUse',
});

const menuData = ref<any>([
	{
		title: '菜单名称很长很长1',
		iconClass: '',
		index: '1',
		isCollect: false,
		children: [
			{
				title: '菜单1-1',
				iconClass: '',
				index: '1-1',
				isCollect: false,
				children: [
					{
						title: '菜单1-1-1',
						iconClass: '',
						index: '1-1-1',
						isCollect: false,
					},
					{
						title: '菜单1-1-2',
						iconClass: '',
						index: '1-1-2',
						isCollect: true,
					},
				],
			},
			{
				title: '菜单1-2',
				iconClass: '',
				index: '1-2',
				isCollect: false,
				children: [
					{
						title: '菜单1-2-1',
						iconClass: '',
						index: '1-2-1',
						isCollect: false,
					},
					{
						title: '菜单1-2-2',
						iconClass: '',
						index: '1-2-2',
						isCollect: false,
					},
					{
						title: '菜单1-2-3',
						iconClass: '',
						index: '1-2-3',
						isCollect: false,
					},
				],
			},
			{
				title: '菜单1-3',
				iconClass: '',
				index: '1-3',
				isCollect: false,
				children: [
					{
						title: '菜单1-3-1',
						iconClass: '',
						index: '1-3-1',
						isCollect: false,
					},
					{
						title: '菜单1-3-2',
						iconClass: '',
						index: '1-3-2',
						isCollect: false,
					},
					{
						title: '菜单1-3-3',
						iconClass: '',
						index: '1-3-3',
						isCollect: false,
					},
					{
						title: '菜单1-3-4',
						iconClass: '',
						index: '1-3-4',
						isCollect: false,
					},
				],
			},
		],
	},
	{
		title: '菜单2',
		iconClass: '',
		index: '2',
		isCollect: false,
		children: [
			{
				title: '菜单2-1',
				iconClass: '',
				index: '2-1',
				isCollect: false,
				children: [
					{
						title: '菜单2-1-1',
						iconClass: '',
						index: '2-1-1',
						isCollect: false,
					},
				],
			},
		],
	},
	{
		title: '菜单3',
		iconClass: '',
		index: '3',
		isCollect: false,
	},
	{
		title: '菜单4',
		iconClass: '',
		index: '4',
		isCollect: false,
	},
	{
		title: '菜单5',
		iconClass: '',
		index: '5',
		isCollect: false,
	},
	{
		title: '菜单6',
		iconClass: '',
		index: '6',
		isCollect: false,
	},
]);
</script>

<style scoped lang="scss"></style>
