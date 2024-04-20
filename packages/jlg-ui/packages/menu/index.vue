<template>
	<div class="jlg-menu">
		<div v-if="slots.logo" class="jlg-menu-logo">
			<slot name="logo"></slot>
		</div>
		<div>
			<el-popover
				v-for="firstLevelMenu in handleMenuData"
				:key="firstLevelMenu.index"
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
							props.defaultActive === firstLevelMenu.index ? 'jlg-menu-first-level-menu-selected' : 'jlg-menu-first-level-menu-no-selected',
						]"
					>
						<div class="jlg-menu-first-level-menu-icon">
							<slot :name="'first-menu-icon' + firstLevelMenu.index">
								<i v-if="firstLevelMenu.iconClass" :class="firstLevelMenu.iconClass"></i>
							</slot>
						</div>
						<p class="jlg-menu-first-level-menu-text">{{ firstLevelMenu.title }}</p>
					</div>
				</template>
				<dir class="jlg-menu-popover">
					<div v-for="secondLevelMenu in firstLevelMenu.children" :key="secondLevelMenu.index" class="second-level-menu">
						<div class="second-level-menu-title">
							{{ secondLevelMenu.title }}
						</div>
						<div
							v-for="threeLevelMenu in secondLevelMenu.children"
							:key="threeLevelMenu.index"
							class="three-level-menu-title"
							@mouseenter="threeLevelMenu._isShowCollect = true"
							@mouseleave="threeLevelMenu._isShowCollect = false"
							@click="emits('threeLevelMenuClick', threeLevelMenu, [firstLevelMenu, secondLevelMenu, threeLevelMenu])"
						>
							{{ threeLevelMenu.title }}
							<show-collect
								:is-collect="threeLevelMenu.isCollect"
								:is-show="threeLevelMenu._isShowCollect"
								@click.stop="emits('collectClick', threeLevelMenu, [firstLevelMenu, secondLevelMenu, threeLevelMenu])"
							></show-collect>
						</div>
					</div>
				</dir>
			</el-popover>
		</div>
	</div>
</template>

<script setup lang="ts">
import { I_JlgMenu_Props, I_JlgMenu_MenuDataItem } from './type';
import ShowCollect from './components/show-collect/index.vue';

defineOptions({
	name: 'JlgMenu',
});

const props = withDefaults(defineProps<I_JlgMenu_Props>(), {});

const emits = defineEmits<{
	(
		e: 'collectClick',
		jlgMenuDataItem: I_JlgMenu_MenuDataItem,
		meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]
	): void;
	(
		e: 'threeLevelMenuClick',
		jlgMenuDataItem: I_JlgMenu_MenuDataItem,
		meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]
	): void;
}>();

const slots = useSlots();

const handleMenuData = ref();

// 处理得到新的格式数据
function addMenuDataFields(menuData) {
	return menuData.map((item) => {
		return {
			...item,
			_isShowCollect: false,
			children: addMenuDataFields(item.children ?? []),
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
			margin-left: 20px;
			color: var(--jlg-menu-popover-color);
			.second-level-menu-title {
				padding: 20px;
				border-bottom: 1px solid #394341;
			}
			.three-level-menu-title {
				font-size: 18px;
				padding: 20px;
				display: flex;

				&:hover {
					cursor: pointer;
					color: var(--jlg-menu-three-level-hover-bg);
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
		cursor: pointer;

		.jlg-menu-first-level-menu-icon {
			width: 20px;
			height: 20px;
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
