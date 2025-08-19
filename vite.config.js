import { defineConfig } from 'vite';

export default defineConfig({
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
  },
  
  // Configuración de build
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  
  // Configuración de CSS/Sass (eliminamos la configuración problemática)
  css: {
    preprocessorOptions: {
      scss: {
        // Dejamos vacío para que use la configuración por defecto
      }
    }
  },
  
  // Archivos a copiar al build
  publicDir: 'public'
});
