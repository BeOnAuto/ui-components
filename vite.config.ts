import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      rollupTypes: false,
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    target: 'es2020',
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        components: resolve(__dirname, 'src/components.tsx'),
        catalog: resolve(__dirname, 'src/catalog.ts'),
        'catalog-tools': resolve(__dirname, 'src/catalog-tools.ts'),
        openui: resolve(__dirname, 'src/openui.tsx'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => {
        if (id.startsWith('.') || id.startsWith('/')) return false;
        return true;
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
  },
});
