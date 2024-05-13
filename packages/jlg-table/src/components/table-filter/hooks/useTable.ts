import { AppContext, ref, getCurrentInstance, onMounted } from 'vue';
import { JlgGridInstance } from '../../../../packages/table-base/type';
import TableCustomTemplate, { TableCustomTemplateProps } from '../template/tableCustomTemplate/index.vue';

class TableSingleton {
	private static instance: TableSingleton;
	private _CurrentTablePageComponentName: string = '';

	private constructor() {}

	public static getInstance(): TableSingleton {
		if (!TableSingleton.instance) {
			TableSingleton.instance = new TableSingleton();
		}
		return TableSingleton.instance;
	}

	getCurrentTableComponentName(): string {
		return this._CurrentTablePageComponentName;
	}

	setCurrentTablePageComponentName(value: string): void {
		this._CurrentTablePageComponentName = value;
	}
}

// 全局变量存储当前组件实例的name
export const tableSingleton = TableSingleton.getInstance();

export const useTableComponent = <DT>() => {
	/// 高级筛选按钮绑定的ref
	const buttonRef = ref();
	const jlgGrid = ref<JlgGridInstance<DT>>();

	const currentInstance = getCurrentInstance();
	const appContext: AppContext = currentInstance?.appContext;

	console.log(currentInstance.type.name);
	/**
	 * 打开设置弹窗
	 * */
	function openSetting() {
		const collectColumn = jlgGrid.value.xGrid.getTableColumn().collectColumn;
		console.log(collectColumn);
		if (jlgGrid.value?.renderCustomTemplate) {
			jlgGrid.value.renderCustomTemplate<TableCustomTemplateProps>(TableCustomTemplate, appContext, {
				jlgGrid: jlgGrid.value,
				beforeDestroy: () => {},
			});
		}
	}
	/**
	 * 表格刷新
	 * */
	const tableRefresh = () => {
		jlgGrid.value?.refresh(false);
	};

	/**
	 * 必要的初始化操作
	 * */
	onMounted(() => {
		// jlg-grid 与 高级筛选按钮绑定
		jlgGrid.value?.initPopoverButton(buttonRef.value).then(() => {});
	});
	// 将当前组件实例的name 存入全局变量
	tableSingleton.setCurrentTablePageComponentName(currentInstance.type.name);
	return {
		currentInstance,
		jlgGrid,
		buttonRef,
		tableRefresh,
		openSetting,
	};
};
