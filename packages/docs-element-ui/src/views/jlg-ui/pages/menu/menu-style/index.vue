<template>
	<jlg-menu
		class="change-style"
		:menu-data="menuData"
		:default-active="defaultActive"
		:el-popover-props="{
			width: 200,
			trigger: 'hover',
			hideAfter: 0,
		}"
		@three-level-menu-click="threeLevelMenuClick"
		@collect-click="collectClick"
	></jlg-menu>
</template>

<script setup lang="ts">
import { JlgMenu } from 'jlg-ui';
import { I_JlgMenu_MenuDataItem } from 'jlg-ui/dist/packages/menu/type';
import { ElMessage } from 'element-plus';

defineOptions({
	name: 'JlgMenuMenuStyle',
});

const menuData = ref<I_JlgMenu_MenuDataItem[]>([
	{
		title: '菜单名称很长很长',
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
]);

const defaultActive = ref<I_JlgMenu_MenuDataItem['index']>('');

const changeCollect = (data: I_JlgMenu_MenuDataItem[], index: I_JlgMenu_MenuDataItem['index']) => {
	return data.map((item) => {
		if (item.index === index) {
			item.isCollect = !item.isCollect;
		}
		if (item.children) {
			changeCollect(item.children, index);
		}
		return item;
	});
};

const collectClick = (menuItem: I_JlgMenu_MenuDataItem) => {
	ElMessage.success('点击了收藏图标');
	menuData.value = changeCollect(menuData.value, menuItem.index);
};

const threeLevelMenuClick = (menuItem: I_JlgMenu_MenuDataItem, menuArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]) => {
	ElMessage.success('你点击了' + menuItem.title);
	defaultActive.value = menuArr[0].index;
};
</script>

<style scoped lang="scss">
.change-style {
	--jlg-menu-bg: blue;
	--jlg-menu-first-level-focus-bg: red;
	--jlg-menu-three-level-hover-bg: pink;
}
</style>
