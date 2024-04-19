<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
		<el-menu-item index="SystemHome">
			<img style="width: 100px" src="@/assets/imgs/element-plus-logo.svg" alt="Element logo" />
		</el-menu-item>
		<div class="flex-grow" />
		<el-menu-item index="JlgUi">Jlg Ui</el-menu-item>
		<el-menu-item index="JlgFormUi">Jlg Form Ui</el-menu-item>
		<el-menu-item index="JlgTableUi">Jlg Table Ui</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
defineOptions({
	name: 'DocMenu',
});

const router = useRouter();

const route = useRoute();

const activeIndex = ref(route.name);

const handleSelect = (key: string) => {
	router.push({
		name: key,
	});
};
</script>

<style>
.flex-grow {
	flex-grow: 1;
}
</style>
