import { App, Plugin } from 'vue';
import components from './component';

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
	(component as SFCWithInstall<T>).install = (app: App) => {
		const name = (component as any)?.name || 'UnnamedComponent';
		app.component(name, component as SFCWithInstall<T>);
	};
	return component as SFCWithInstall<T>;
};

export function makeInstaller(components: Plugin[]) {
	return (app: App) => {
		components.forEach((component) => {
			app.use(component);
		});
	};
}
const install = makeInstaller(components);
export * from './component';
export default install;
