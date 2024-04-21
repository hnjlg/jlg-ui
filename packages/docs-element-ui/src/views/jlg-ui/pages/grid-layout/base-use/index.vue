<template>
	<jlg-grid-layout
		width="80%"
		height="80%"
		padding="20px"
		flow="row"
		:rows="10"
		:columns="10"
		gap="10px"
		inline
		border
		style="border: 1px solid #ccc"
	>
		<jlg-grid-cell :height="1">1</jlg-grid-cell>
		<jlg-grid-cell :width="3" :height="5" center> 2 </jlg-grid-cell>
		<jlg-grid-cell :width="2" :height="3" center> 3 </jlg-grid-cell>
		<jlg-grid-cell :width="4">4</jlg-grid-cell>
		<jlg-grid-cell :width="2" :height="2"> 5 </jlg-grid-cell>
		<jlg-grid-cell :left="7" :top="7" :width="2" :height="3"> 6 </jlg-grid-cell>
	</jlg-grid-layout>
</template>

<script setup lang="ts">
import { JlgGridLayout, JlgGridCell } from 'jlg-ui';

defineOptions({
	name: 'GridLayoutBaseUse',
});
</script>

<style scoped></style>
