// GlobalComponents for Volar
export {};
declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		JlgMenu: (typeof import('jlg-ui'))['JlgMenu'];
		JlgGridLayout: (typeof import('jlg-ui'))['JlgGridLayout'];
		JlgGridCell: (typeof import('jlg-ui'))['JlgGridCell'];
		JlgCollapse: (typeof import('jlg-ui'))['JlgCollapse'];
		JlgCollapseItem: (typeof import('jlg-ui'))['JlgCollapseItem'];
		JlgFlexLayout: (typeof import('jlg-ui'))['JlgFlexLayout'];
		JlgFlexCell: (typeof import('jlg-ui'))['JlgFlexCell'];
	}
}
