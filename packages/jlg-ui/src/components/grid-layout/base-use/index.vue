<template>
	<grid-layout width="80%" padding="20px" flow="row" :rows="10" :columns="10" gap="10px" inline border style="border: 1px solid #ccc">
		<grid-cell :height="1">1</grid-cell>
		<grid-cell :width="3" :height="5" center> 2 </grid-cell>
		<grid-cell :width="2" :height="3" center> 3 </grid-cell>
		<grid-cell :width="4">4</grid-cell>
		<grid-cell :width="2" :height="2"> 5 </grid-cell>
		<grid-cell :left="7" :top="7" :width="2" :height="3"> 6 </grid-cell>
	</grid-layout>
</template>

<script setup lang="ts">
import GridLayout from '@pac/grid-layout/index.vue';
import GridCell from '@pac/grid-cell/index.vue';

defineOptions({
	name: 'GridLayoutBaseUse',
});
</script>

<style scoped lang="scss"></style>
