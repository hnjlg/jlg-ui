<template>
	<div class="jlg-ui">
		<div class="left-menu">
			<el-menu :default-active="route.name">
				<el-sub-menu index="JlgMenu">
					<template #title>
						<span>Jlg Menu</span>
					</template>
					<el-menu-item index="JlgMenuBaseUse">基础使用</el-menu-item>
				</el-sub-menu>
				<el-menu-item index="2">
					<span>Other</span>
				</el-menu-item>
			</el-menu>
		</div>
		<div class="center-content">
			<router-view v-slot="{ Component }">
				<transition :name="String(route.meta.transition)">
					<keep-alive :include="keepAliveRoutes">
						<component :is="Component" />
					</keep-alive>
				</transition>
			</router-view>
		</div>
		<div class="right-additional"></div>
	</div>
</template>

<script setup lang="ts">
import { keepAliveRoutes } from '@/router';
import { useRoute } from 'vue-router';

defineOptions({
	name: 'JlgUi',
});

const route = useRoute();
</script>

<style scoped lang="scss">
@import url('@/assets/styles/page.scss');
.jlg-ui {
	padding: 0 100px;
	background-color: var(--el-bg-color-page);
	height: 100%;
	overflow: hidden;
	display: flex;
	justify-content: space-between;

	.left-menu {
		width: 200px;
		height: 100%;
		overflow: auto;
		background-color: var(--el-bg-color);
		border-right: 1px solid var(--el-border-color);
	}

	.center-content {
		flex: 1;
		height: 100%;
		overflow: auto;
		background-color: var(--el-bg-color);
	}

	// .right-additional {
	// 	width: 100px;
	// }
}
</style>
