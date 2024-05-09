<template>
	<div class="common-layout">
		<el-container>
			<el-aside width="77px">Aside</el-aside>
			<el-container>
				<el-header height="85px">Header</el-header>
				<el-main><table-filter-base-use> </table-filter-base-use></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import TableFilterBaseUse from '@/components/table-filter/base-use/index.vue';
</script>

<style>
.common-layout,
.el-container {
	height: 100%;
}
.common-layout .el-header,
.common-layout .el-footer,
.common-layout .el-main,
.common-layout .el-aside {
	display: flex;
	justify-content: center;
	align-items: center;
}

.common-layout .el-header,
.common-layout .el-footer {
	--el-header-padding: 0;
	background-color: var(--el-color-primary-light-7);
	color: var(--el-text-color-primary);
	text-align: center;
}

.common-layout .el-aside {
	background-color: var(--el-color-primary-light-8);
	color: var(--el-text-color-primary);
	text-align: center;
}

.common-layout .el-main {
	box-sizing: border-box;
	text-align: center;
	--el-main-padding: 30px 15px 0 15px;
}
</style>
