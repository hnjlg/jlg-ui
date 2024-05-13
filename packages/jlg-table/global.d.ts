// GlobalComponents for Volar

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		JlgGrid: (typeof import('jlg-table'))['JlgGrid'];
		JlgDynamicModal: (typeof import('jlg-table'))['JlgDynamicModal'];
		JlgTableFilter: (typeof import('jlg-table'))['JlgTableFilter'];
	}
}
export {};
