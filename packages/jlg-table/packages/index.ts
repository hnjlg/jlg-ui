import { JlgGrid, JlgDynamicModal, JlgTableFilter, JlgModalTemplate } from './components';
import { makeInstaller } from '../lib/install';
import type { Plugin } from 'vue';

export const components = [JlgGrid, JlgTableFilter, JlgDynamicModal, JlgModalTemplate] as Plugin[];

const install = makeInstaller(components);
export * from './components';
export * from '../lib/config';
export default install;
