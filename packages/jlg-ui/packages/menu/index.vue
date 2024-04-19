<template>
	<div class="jlg-menu">
		<el-menu default-active="2" :style="{ width: '300px' }">
			<el-sub-menu index="1">
				<template #title>
					<span>Navigator One</span>
				</template>
				<el-menu-item-group>
					<template #title><span>Group One</span></template>
					<el-menu-item index="1-1">item one</el-menu-item>
					<el-menu-item index="1-2">item two</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Group Two">
					<el-menu-item index="1-3">item three</el-menu-item>
				</el-menu-item-group>
				<el-sub-menu index="1-4">
					<template #title><span>item four</span></template>
					<el-menu-item index="1-4-1">item one</el-menu-item>
				</el-sub-menu>
			</el-sub-menu>
			<el-menu-item index="2">
				<template #title>Navigator Two</template>
			</el-menu-item>
			<el-menu-item index="3" disabled>
				<template #title>Navigator Three</template>
			</el-menu-item>
			<el-menu-item index="4">
				<template #title>Navigator Four</template>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import { I_JlgMenu_Props } from './type';

defineOptions({
	name: 'JlgMenu',
});

const props = withDefaults(defineProps<I_JlgMenu_Props>(), {});

console.log(props);
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
