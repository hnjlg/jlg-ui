<template>
	<div class="system-index">
		<doc-menu></doc-menu>
		<div class="content">
			<router-view v-slot="{ Component }">
				<transition :name="String(route.meta.transition)">
					<keep-alive :include="keepAliveRoutes">
						<component :is="Component" />
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
import { keepAliveRoutes } from '@/router';
import { useRoute } from 'vue-router';
import DocMenu from '@/components/menu/index.vue';

defineOptions({
	name: 'SystemIndex',
});

const route = useRoute();
</script>

<style scoped lang="scss">
@import url('@/assets/styles/page.scss');
.system-index {
	overflow: hidden;
	.content {
		height: calc(100vh - var(--el-menu-horizontal-height));
	}
}
</style>
