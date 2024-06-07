import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import viteSvgToWebfont from 'vite-svg-2-webfont'
import {codeInspectorPlugin} from 'code-inspector-plugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [vue(), viteSvgToWebfont({
        context: path.resolve(__dirname, 'src', 'icons'),
    }), codeInspectorPlugin({
        bundler: 'vite',
        showSwitch: false,
    })],

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            // 3. tell vite to ignore watching `src-tauri`
            ignored: ["**/src-tauri/**"],
        },
    },
}));
