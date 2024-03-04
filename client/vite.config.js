import {fileURLToPath, URL} from 'node:url';
import VueRouter from 'unplugin-vue-router/vite';
import {defineConfig} from 'vite';
import Vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [VueRouter(), Vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
