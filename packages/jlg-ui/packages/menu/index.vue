<template>
	<div class="jlg-menu">
		<div v-if="slots.logo" class="jlg-menu-logo">
			<slot name="logo"></slot>
		</div>
		<div>
			<el-popover
				v-for="firstLevelMenu in handleMenuData"
				:key="firstLevelMenu[props.menuDataRecord.key]"
				placement="right"
				:width="400"
				trigger="click"
				:teleported="false"
				v-bind="props.elPopoverProps"
			>
				<template #reference>
					<div
						:class="[
							'jlg-menu-first-level-menu',
							props.defaultActive === firstLevelMenu[props.menuDataRecord.key]
								? 'jlg-menu-first-level-menu-selected'
								: 'jlg-menu-first-level-menu-no-selected',
						]"
					>
						<div class="jlg-menu-first-level-menu-icon">
							<slot :name="'first-menu-icon' + firstLevelMenu[props.menuDataRecord.key]">
								<i v-if="firstLevelMenu[props.menuDataRecord.iconClass]" :class="firstLevelMenu[props.menuDataRecord.iconClass]"></i>
							</slot>
						</div>
						<p class="jlg-menu-first-level-menu-text">{{ firstLevelMenu[props.menuDataRecord.title] }}</p>
					</div>
				</template>
				<dir class="jlg-menu-popover">
					<div
						v-for="secondLevelMenu in firstLevelMenu[props.menuDataRecord.children]"
						:key="secondLevelMenu[props.menuDataRecord.key]"
						class="second-level-menu"
					>
						<div class="second-level-menu-title">
							{{ secondLevelMenu[props.menuDataRecord.title] }}
						</div>
						<div
							v-for="threeLevelMenu in secondLevelMenu[props.menuDataRecord.children]"
							:key="threeLevelMenu[props.menuDataRecord.key]"
							class="three-level-menu-title"
							@mouseenter="threeLevelMenu._isShowCollect = true"
							@mouseleave="threeLevelMenu._isShowCollect = false"
							@click="emits('threeLevelMenuClick', threeLevelMenu, [firstLevelMenu, secondLevelMenu, threeLevelMenu])"
						>
							{{ threeLevelMenu[props.menuDataRecord.title] }}
							<div class="show-collect">
								<show-collect
									:is-collect="props.collectMenuKeys.some((i) => i === threeLevelMenu[props.menuDataRecord.key])"
									:is-show="threeLevelMenu._isShowCollect"
									@click.stop="emits('collectClick', threeLevelMenu, [firstLevelMenu, secondLevelMenu, threeLevelMenu])"
								></show-collect>
							</div>
						</div>
					</div>
				</dir>
			</el-popover>
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_Jlg_Menu_Props, I_Jlg_Menu_Emits, T_MenuDataRecord } from './type';
import ShowCollect from './components/show-collect/index.vue';

defineOptions({
	name: 'JlgMenu',
});

const props = withDefaults(defineProps<I_Jlg_Menu_Props>(), {
	menuDataRecord: () =>
		({
			title: 'title',
			iconClass: 'iconClass',
			key: 'key',
			children: 'children',
		}) as T_MenuDataRecord,
});

const emits = defineEmits<I_Jlg_Menu_Emits>();

const slots = useSlots();

const handleMenuData = ref();

// 处理得到新的格式数据
function addMenuDataFields(menuData) {
	return menuData.map((item) => {
		return {
			...item,
			_isShowCollect: false,
			children: addMenuDataFields(item[props.menuDataRecord.children] ?? []),
		};
	});
}

watch(
	() => props.menuData,
	(newValue) => {
		handleMenuData.value = addMenuDataFields(newValue);
	},
	{
		deep: true,
		immediate: true,
	}
);
</script>

<style scoped lang="scss">
.jlg-menu {
	height: 100%;
	width: var(--jlg-menu-width);
	background-color: var(--jlg-menu-bg);
	padding: var(--jlg-menu-y-padding) var(--jlg-menu-x-padding);

	:deep(.el-popover) {
		padding: 0;
		background-color: var(--jlg-menu-popover-bg);

		.el-popper__arrow::before {
			background-color: var(--jlg-menu-popover-bg);
		}
	}

	.jlg-menu-popover {
		display: flex;
		flex-wrap: wrap;
		padding-inline-start: 0px;

		.second-level-menu {
			margin-left: var(--second-level-menu-margin-left);
			color: var(--jlg-menu-popover-color);
			.second-level-menu-title {
				padding: var(--second-level-menu-title-top-padding) var(--second-level-menu-title-right-padding) var(--second-level-menu-title-bottom-padding)
					var(--second-level-menu-title-left-padding);
				border-bottom: 1px solid #394341;
				color: var(--second-level-menu-title-color);
			}
			.three-level-menu-title {
				font-size: var(--three-level-menu-title-font-size);
				padding: var(--three-level-menu-title-top-padding) var(--three-level-menu-title-right-padding) var(--three-level-menu-title-bottom-padding)
					var(--three-level-menu-title-left-padding);
				display: flex;

				&:hover {
					cursor: pointer;
					color: var(--jlg-menu-three-level-hover-bg);
				}

				.show-collect {
					margin-left: 3px;
					width: 20px;
				}
			}
		}
	}

	.jlg-menu-first-level-menu {
		display: flex;
		align-items: center;
		color: var(--jlg-menu-first-level-color);
		border-radius: var(--jlg-menu-first-level-border-radius);
		margin: var(--jlg-menu-first-level-y-margin) var(--jlg-menu-first-level-x-margin);
		padding: var(--jlg-menu-first-level-y-padding) var(--jlg-menu-first-level-x-padding);
		cursor: pointer;

		.jlg-menu-first-level-menu-icon {
			width: 20px;
			height: 20px;
			line-height: 20px;
			margin-right: 5px;
		}

		.jlg-menu-first-level-menu-text {
			flex: 1;
		}
	}

	.jlg-menu-first-level-menu-no-selected {
		&:hover {
			background-color: var(--jlg-menu-first-level-hover-bg);
			color: var(--jlg-menu-first-level-hover-color);
		}
	}

	.jlg-menu-first-level-menu-selected {
		background-color: var(--jlg-menu-first-level-focus-bg);
	}
}
</style>
