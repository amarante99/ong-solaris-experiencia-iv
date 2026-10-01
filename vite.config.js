import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  publicDir: 'imagens',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true
  }
});
