import { App } from 'vue';
import { default as JlgMenu } from './menu';
import { default as JlgGridLayout } from './grid-layout';
import { default as JlgGridCell } from './grid-cell';
import { default as JlgCollapse } from './collapse';
import { default as JlgCollapseItem } from './collapse-item';

export { JlgMenu, JlgGridLayout, JlgGridCell, JlgCollapse, JlgCollapseItem };
declare const _default: {
    install: (app: App<Element>) => void;
};
export default _default;
