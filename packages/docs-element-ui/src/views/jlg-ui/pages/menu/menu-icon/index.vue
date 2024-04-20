<template>
	<el-space wrap>
		<jlg-menu :menu-data="menuData" :default-active="defaultActive" @three-level-menu-click="threeLevelMenuClick" @collect-click="collectClick">
		</jlg-menu>
		<jlg-menu :menu-data="menuData" :default-active="defaultActive" @three-level-menu-click="threeLevelMenuClick" @collect-click="collectClick">
			<template #first-menu-icon1
				><el-icon><PieChart /></el-icon
			></template>
			<template #first-menu-icon2
				><el-icon><Histogram /></el-icon
			></template>
		</jlg-menu>
	</el-space>
</template>

<script setup lang="ts">
import { JlgMenu } from 'jlg-ui';
import { I_JlgMenu_MenuDataItem } from 'jlg-ui/dist/packages/menu/type';
import { ElMessage } from 'element-plus';
import { PieChart, Histogram } from '@element-plus/icons-vue';

defineOptions({
	name: 'JlgMenuMenuIcon',
});

const menuData = ref<I_JlgMenu_MenuDataItem[]>([
	{
		title: '菜单名称很长很长',
		iconClass: 'iconfont icon-yidongzhi',
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
		iconClass: 'iconfont icon-chaosongren',
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

<style scoped></style>
