import { JlgGrid, JlgDynamicModal, JlgTableFilter } from './components';
import { makeInstaller } from '../lib/install';
import type { Plugin } from 'vue';

export const components = [JlgGrid, JlgDynamicModal, JlgTableFilter] as Plugin[];

const install = makeInstaller(components);
export * from './components';
export * from '../lib/config';
export default install;
