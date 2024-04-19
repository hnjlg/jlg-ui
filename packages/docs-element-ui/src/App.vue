<template>
	<router-view v-slot="{ Component }">
		<transition :name="String(route.meta.transition)">
			<keep-alive :include="keepAliveRoutes">
				<component :is="Component" />
			</keep-alive>
		</transition>
	</router-view>
</template>

<script setup lang="ts">
import { keepAliveRoutes } from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss">
@import url('@/assets/styles/page.scss');
</style>
