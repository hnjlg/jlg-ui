<p align="center">
  <img width="300px" src="http://www.jinliugu.com/images/logo_2.png">
</p>

<p align="center">Jlg-Form-Ui - A Vue.js 3 UI library</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

## Getting Started

`npm i jlg-form-ui`

main.ts
```ts
import { createApp } from 'vue'
import App from './App.vue'
import JlgFormUi from 'jlg-form-ui'
import 'jlg-form-ui/dist/style.css'

createApp(App).use(JlgFormUi).mount('#app')
```

如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。

tsconfig.json
```json
{
  "compilerOptions": {
    // ...
    "types": ["jlg-form-ui/global"]
  }
}
```

如果使用vscode，需要安装vetur插件获得更好的类型提示与代码补全体验

## Contributors

This project exists thanks to all the people who contribute.

And thank you to all our backers! 🙏

<a href="https://github.com/1765659336/jlg-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=1765659336/jlg-ui" />
</a>

## License

Jlg-Form-Ui is open source software licensed as
[MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE).
