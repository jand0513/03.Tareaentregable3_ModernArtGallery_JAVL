import { defineConfig } from 'vite';

export default defineConfig({
  // Configuración base para GitHub Pages
  base: '/03.Tareaentregable3_ModernArtGallery_JAVL/',
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
  },
  
  // Configuración de build para GitHub Pages
  build: {
    outDir: 'docs',
    sourcemap: true,
    assetsDir: 'assets',
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
