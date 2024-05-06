<template>
	<div class="jlg-tct jlg-table-custom-template">
		<div class="jlg-tct__menu">
			<div class="jlg-tct__menu--left">
				<!-- Logo -->
				<component :is="logoSvg"></component>
			</div>
			<div class="jlg-tct__menu--right">
				<el-button text size="small"> 恢复默认</el-button>
				<el-button style="width: 60px; border: none" color="#173FF0" type="primary" plain size="small"> 保存</el-button>
				<el-divider direction="vertical" />
				<el-button text bg size="small" @click="handleDestroyed">退出编辑模式</el-button>
			</div>
		</div>
		<div class="jlg-tct__body">
			<div class="jlg-tct__body--material-operation">
				<div class="jlg-tct__body--options">
					<div class="jlg-tct__tabs">
						<div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">
							<i class="icon iconfont" :class="tab"></i>
						</div>
					</div>
				</div>
				<div class="jlg-tct__body--panel" :class="{ 'is-display': isShowPanel }">
					<div v-show="isShowPanel" class="jlg-tct__menu--active">
						<div v-show="activeTab == tabs[0]" class="jlg-tct__menu">222</div>
						<div v-show="activeTab == tabs[1]" class="jlg-tct__menu--content">
							<el-scrollbar>
								<div class="jlg-tct__menu--content--header">
									<div class="jlg-tct__menu--content--header--title">表格背显<span class="tip">（该配置仅支持全局替换）</span></div>
								</div>
								<div class="jlg-tct__menu--content--body">
									<div
										class="jlg-tct__menu--content--body--content stripe-set-up"
										:class="!tableConfig.stripe ? 'active' : ''"
										@click="tableConfig.stripe = false"
									>
										<!--         白色块           -->
										<div class="content--stripe">
											<div class="content--stripe--block title"></div>
											<div class="content--stripe--block"></div>
											<div class="content--stripe--block"></div>
											<div class="content--stripe--block"></div>
											<div class="content--stripe--block"></div>
										</div>
										<div class="jlg-tct__menu--content--body--title">白色</div>
									</div>
									<div
										class="jlg-tct__menu--content--body--content stripe-set-up"
										:class="tableConfig.stripe ? 'active' : ''"
										@click="tableConfig.stripe = true"
									>
										<!--         斑马纹           -->
										<div class="content--stripe stripe">
											<div class="content--stripe--block title"></div>
											<div class="content--stripe--block"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block"></div>
											<div class="content--stripe--block bgc"></div>
										</div>
										<div class="jlg-tct__menu--content--body--title">斑马</div>
									</div>
								</div>
								<div class="jlg-tct__menu--content--header m-top">
									<div class="jlg-tct__menu--content--header--title">字段对齐<span class="tip">（该配置仅支持全局替换）</span></div>
								</div>
								<div class="jlg-tct__menu--content--body align">
									<div class="align__center" :class="tableConfig.align === 'left' ? 'active' : ''" @click="tableConfig.align = 'left'">
										<div class="icon-wrapper">
											<i class="icon iconfont icon-fuhao-zuoduiqi"></i>
										</div>
										<div class="text">左对齐</div>
									</div>
									<div class="align__center" :class="tableConfig.align === 'center' ? 'active' : ''" @click="tableConfig.align = 'center'">
										<div class="icon-wrapper">
											<i class="icon iconfont icon-fuhao-juzhongduiqi"></i>
										</div>
										<div class="text">居中对齐</div>
									</div>
									<div class="align__center" :class="tableConfig.align === 'right' ? 'active' : ''" @click="tableConfig.align = 'right'">
										<div class="icon-wrapper">
											<i class="icon iconfont icon-fuhao-youduiqi"></i>
										</div>
										<div class="text">右对齐</div>
									</div>
								</div>
								<div class="jlg-tct__menu--content--header m-top">
									<div class="jlg-tct__menu--content--header--title">风格<span class="tip">（该配置仅支持全局替换）</span></div>
								</div>
								<div class="jlg-tct__menu--content--body">
									<div
										class="jlg-tct__menu--content--body--content style-set-up"
										:class="tableConfig.size === 'mini' ? 'active' : ''"
										style="margin-right: 12px; margin-top: 20px"
										@click="tableConfig.size = 'mini'"
									>
										<!--         紧凑           -->
										<div class="content--stripe mini">
											<div class="content--stripe--block title"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
										</div>
										<div class="jlg-tct__menu--content--body--title">紧凑</div>
									</div>
									<div
										class="jlg-tct__menu--content--body--content style-set-up"
										:class="tableConfig.size === 'small' ? 'active' : ''"
										@click="tableConfig.size = 'small'"
									>
										<!--         适中           -->
										<div class="content--stripe small">
											<div class="content--stripe--block title"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
										</div>
										<div class="jlg-tct__menu--content--body--title">适中</div>
									</div>
									<div
										class="jlg-tct__menu--content--body--content style-set-up"
										:class="tableConfig.size === 'medium' ? 'active' : ''"
										@click="tableConfig.size = 'medium'"
									>
										<!--         宽松           -->
										<div class="content--stripe medium">
											<div class="content--stripe--block title"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
											<div class="content--stripe--block bgc"></div>
										</div>
										<div class="jlg-tct__menu--content--body--title">宽松</div>
									</div>
								</div>
								<div class="jlg-tct__menu--content--header m-top">
									<div class="jlg-tct__menu--content--header--title custom-field-set-up" @click="showModal = true">字段自定义配置 ></div>
								</div>
							</el-scrollbar>
						</div>
					</div>
					<div class="operation" @click="isShowPanel = !isShowPanel">
						<i class="icon iconfont" :class="isShowPanel ? 'icon-arrow-left-bold' : 'icon-arrow-right-bold'"></i>
					</div>
				</div>
			</div>
			<div class="jlg-tct__body--display">
				<!-- 显示内容 -->
			</div>
		</div>
		<vxe-modal
			v-model="showModal"
			:mask="false"
			title="自定义配置"
			width="700"
			height="600"
			:before-hide-method="beforeHideMethod"
			esc-closable
			resize
		>
			<template #default>
				<div class="table-wrapper" style="height: 100%">
					<div class="header">
						<div class="left-title">请选择列表中想要展示的字段信息</div>
						<div class="right-button">
							<span>字段是否换行</span>
							<el-switch v-model="showOverflow" size="small" :active-value="false" :inactive-value="true" @change="handleSwitchChange" />
						</div>
					</div>
					<div class="body">
						<el-table
							:data="tableData"
							style="width: 100%; height: 100%; --el-table-border: none"
							:show-header="false"
							row-key="id"
							:border="false"
							size="small"
							default-expand-all
						>
							<el-table-column type="index" width="65">
								<template #default="{ row }">{{ row.renderIndex }}</template>
							</el-table-column>
							<el-table-column prop="title">
								<template #default="{ row }"> <el-checkbox v-model="row.visible" :label="row.title" size="small" /> </template>
							</el-table-column>
							<el-table-column prop="showOverflow" width="100">
								<template #default="{ row }">
									<el-switch
										v-model="row.showOverflow"
										size="small"
										:active-value="false"
										:inactive-value="true"
										@change="handleColumnSwitchChange"
									/>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</div>
			</template>
		</vxe-modal>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import logoSvg from '@/assets/svg/bianjiqi.svg';
import { ElButton, ElDivider, ElSwitch, ElMessageBox, MessageBoxData } from 'element-plus';
import { VxeGridInstance, VxeModal } from 'vxe-table';
import eachTree from 'xe-utils/eachTree';
import findTree from 'xe-utils/findTree';
import clone from 'xe-utils/clone';

defineOptions({
	name: 'TableCustomTemplate',
});

export type TableCustomTemplateProps = {
	xGrid: VxeGridInstance;
	// 销毁前
	beforeDestroy?: () => void;
};
const props = withDefaults(defineProps<TableCustomTemplateProps>(), {});
const emit = defineEmits<{
	destroy: [];
}>();

const isShowPanel = ref(true);

function handleDestroyed() {
	props.beforeDestroy?.();
	emit('destroy');
}

const tabs = ['icon-shendushaicha', 'icon-fengexian'];
const activeTab = ref(tabs[0]);

// 表格全局配置
const tableConfig = reactive({
	// 是否带有斑马纹
	stripe: false,
	// 表格的尺寸
	size: 'medium',
	// 所有的列对齐方式
	align: 'center',
});

const showModal = ref(false);

const beforeHideMethod = async () => {
	function confirm() {
		return new Promise((resolve) => {
			const result: Promise<MessageBoxData> = ElMessageBox.confirm('您确定要关闭吗?', '系统提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			});
			resolve(result);
		});
	}
	return await confirm();
};

const tableData = ref<any[]>(
	clone(
		props.xGrid.getTableColumn().collectColumn.filter((item) => !item.type && item.field !== 'jlg-operation-colum'),
		true
	)
);
console.log(tableData.value);

/**
 * 索引
 */
const indexMap = {};
eachTree(tableData.value, (item, index) => {
	if (!item.parentId) {
		item.renderIndex = index + 1;
	} else {
		item.renderIndex = `${indexMap['level' + (item.level - 1)]}.${index + 1}`;
	}
	indexMap['level' + item.level] = item.renderIndex;
});
// 是否换行
const showOverflow = ref(false);
const getShowOverflow = () => {
	const obj = findTree(tableData.value, (item) => item.showOverflow === true);
	console.log('ss:', obj);
	return obj !== undefined;
};
showOverflow.value = getShowOverflow();
const handleSwitchChange = (val: string | number | boolean) => {
	eachTree(tableData.value, (item) => {
		item.showOverflow = val;
	});
};
const handleColumnSwitchChange = (val: string | number | boolean) => {
	console.log(val);
	if (val) {
		showOverflow.value = getShowOverflow();
	} else {
		showOverflow.value = false;
	}
};
</script>

<style scoped lang="scss">
// 内容背景色
$jlg-tct-bgc: #fff;
$jlg-tct-left-width: 0px;
// 菜单距离顶部的距离
$menu-margin-top: 0px;

.jlg-table-custom-template {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: $jlg-tct-left-width;
	z-index: 99;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	background-color: var(--el-overlay-color-lighter);

	&.jlg-tct {
		display: flex;
		flex-direction: column;

		.jlg-tct__menu {
			display: flex;
			margin-top: $menu-margin-top;
			width: 100%;
			height: 40px;
			align-items: center;
			justify-content: space-between;
			border-radius: 4px;
			background-color: $jlg-tct-bgc;
			overflow: hidden;

			.jlg-tct__menu--left {
				font-size: 85px;

				:deep(.icon) {
					vertical-align: -0.08em !important;
				}
			}
		}

		.jlg-tct__body {
			height: calc(100% - 40px);
			flex: 1;

			.jlg-tct__body--material-operation {
				display: inline-flex;
				height: 100%;
				background-color: $jlg-tct-bgc;
				box-sizing: border-box;
				border-top: 1px solid #d7def2;

				.jlg-tct__body--options {
					width: 53px;
					height: 100%;
					border-right: 1px solid #d7def2;
					.jlg-tct__tabs {
						display: flex;
						flex-direction: column;
						align-items: center;
						height: 100%;
						.tab {
							width: 52px;
							height: 52px;
							display: flex;
							justify-content: center;
							align-items: center;
							cursor: pointer;
							transition: all 0.22s;
							&:hover {
								color: var(--el-color-primary);
							}
							&.active {
								background-color: #f0f2f6;
								color: var(--el-color-primary);
							}
						}
					}
				}

				.jlg-tct__body--panel {
					width: 0;
					height: 100%;
					transition: all ease 0.1s;
					position: relative;

					&.is-display {
						box-sizing: border-box;
						width: 287px;
						padding-left: 12px;
						padding-right: 10px;
						transform: scaleX(1);
					}

					.operation {
						position: absolute;
						top: 50%;
						right: -18px;
						transform: translateY(-50%);
						width: 18px;
						height: 68px;
						line-height: 68px;
						background-color: $jlg-tct-bgc;
						// 右侧圆角 20px
						border-radius: 0 10px 10px 0;
					}
					.jlg-tct__menu--active {
						height: 100%;
						.jlg-tct__menu--content {
							height: 100%;
						}
					}

					.jlg-tct__menu--content--header {
						&.m-top {
							margin-top: 25px;
						}
					}

					.jlg-tct__menu--content--header--title {
						font-family:
							Microsoft YaHei,
							serif;
						font-weight: bold;
						font-size: 15px;
						color: #303133;
						margin-top: 20px;
						.tip {
							font-size: 14px;
							color: #606266;
							font-weight: normal;
						}
					}
					.custom-field-set-up {
						cursor: pointer;
						margin-top: 40px;
						margin-bottom: 40px;

						&:hover {
							color: var(--el-color-primary);
						}
					}
				}
			}

			.jlg-tct__menu--content--body {
				margin-right: 10px;
				width: 255px;
				display: flex;
				flex-wrap: wrap;
				.jlg-tct__menu--content--body--content {
					&.stripe-set-up {
						cursor: pointer;
						margin-top: 20px;
						box-sizing: border-box;
						width: 100%;
						background: #ffffff;
						border-radius: 6px;
						border: 1px solid #e5e5e5;
						padding: 15px 20px;
						position: relative;
						.content--stripe {
							width: 180px;
							.content--stripe--block {
								box-sizing: border-box;
								width: 180px;
								height: 15px;
								border: 1px solid #e5e5e5;
								border-top: none;
								&.bgc {
									background: #e5e5e5;
								}
								&.title {
									height: 10px;
									background: #f5f5f5;
									border: 1px solid #e5e5e5;
								}
							}
						}
						.jlg-tct__menu--content--body--title {
							position: absolute;
							right: 0;
							top: 0;
							width: 48px;
							height: 24px;
							background: #e5e5e5;
							color: #515c79;
							border-radius: 0 6px 0 6px;
							display: flex;
							align-items: center;
							justify-content: center;
							font-weight: 400;
							font-size: 12px;
						}
						&.active {
							border-color: var(--el-color-primary);
							.jlg-tct__menu--content--body--title {
								color: #ffffff;
								background: var(--el-color-primary);
							}
						}
					}
					&.style-set-up {
						cursor: pointer;
						margin-top: 15px;
						box-sizing: border-box;
						width: 120px;
						background: #fff;
						border-radius: 6px;
						border: 1px solid #e5e5e5;
						padding: 15px 20px;
						position: relative;
						.content--stripe {
							width: 90px;
							margin-top: 20px;
							.content--stripe--block {
								box-sizing: border-box;
								width: 90px;
								height: 6px;
								//border: 1px solid #e5e5e5;
								//border-top: none;
								&.bgc {
									background: #ced5f1;
								}
								&.title {
									height: 6px;
									background: #f5f5f5;
									//border: 1px solid #e5e5e5;
								}
							}
						}
						.mini {
							.content--stripe--block {
								margin-bottom: 2px;
							}
						}
						.small {
							.content--stripe--block {
								margin-bottom: 4px;
							}
						}
						.medium {
							.content--stripe--block {
								margin-bottom: 6px;
							}
						}
						.jlg-tct__menu--content--body--title {
							position: absolute;
							right: 0;
							top: 0;
							width: 48px;
							height: 24px;
							background: #e5e5e5;
							color: #515c79;
							border-radius: 0 6px 0 6px;
							display: flex;
							align-items: center;
							justify-content: center;
							font-weight: 400;
							font-size: 12px;
						}
						&.active {
							border-color: var(--el-color-primary);
							.jlg-tct__menu--content--body--title {
								color: #ffffff;
								background: var(--el-color-primary);
							}
						}
					}
				}
			}
		}
	}

	.align {
		display: flex;
		justify-content: space-between;
		margin-top: 22px;
		.align__center {
			cursor: pointer;
			.icon-wrapper {
				width: 48px;
				height: 48px;
				background: #fff;
				box-shadow: 0 1px 5px 0 rgba(36, 38, 38, 0.14);
				border-radius: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20px;
				color: #515c79;
			}
			.text {
				width: 100%;
				text-align: center;
				font-weight: 400;
				font-size: 12px;
				line-height: 1;
				color: #515c79;
				margin-top: 8px;
			}
			&.active {
				.icon-wrapper {
					background-color: var(--el-color-primary);
					color: #fff;
				}
			}
		}
	}
}

.table-wrapper {
	height: 100%;
	border-radius: 4px;
	border: 1px solid #dee0e3;
	box-sizing: border-box;
	.header {
		height: 32px;
		background: #f5f7fa;
		border-radius: 4px 4px 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 400;
		font-size: 12px;
		color: #788398;
		.left-title {
			margin-left: var(--vxe-table-cell-padding-left);
		}
		.right-button {
			display: flex;
			align-items: center;
			.el-switch {
				margin-left: var(--vxe-table-cell-padding-left);
				margin-right: var(--vxe-table-cell-padding-right);
			}
		}
	}
	.body {
		height: calc(100% - 35px);
		overflow: hidden;
	}
}
</style>
