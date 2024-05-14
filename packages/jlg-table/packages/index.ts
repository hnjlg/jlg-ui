import components from './component';
import { makeInstaller } from '../lib/install';

const install = makeInstaller(components);
export * from './component';
export default install;
