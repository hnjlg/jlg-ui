import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		DefineOptions(),
		AutoImport({
			imports: ['vue'],
			dirs: [],
			resolvers: [ElementPlusResolver()],
			dts: 'auto-imports.d.ts',
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
		dts({
			// outDir: 'dist/types',
			compilerOptions: {
				sourceMap: false,
			},
		}),
		svgLoader(),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'packages/index.ts'),
			name: 'jlg-table',
			fileName: (format) => `jlg-table.${format}.js`,
		},
		rollupOptions: {
			treeshake: true,
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue', 'vxe-table', 'element-plus', 'sortablejs', '@element-plus/icons-vue', '@types/sortablejs'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
				// 生成的包中保留所有的导出名称
				exports: 'named',
			},
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@pac': resolve(__dirname, 'packages'),
		},
		// 导入时忽略的后缀名
		extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
	},
	server: {
		port: 10100,
		host: '0.0.0.0',
	},
});
