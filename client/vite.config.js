import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // ✅ Ensures assets load correctly from root domain
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // ✅ Optimize build output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    // ✅ Code splitting and chunk optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['react-icons', 'lucide-react'],
          'map-vendor': ['leaflet', 'react-leaflet'],
          'cms-vendor': ['contentful'],
        },
        // Optimize chunk file names
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // ✅ Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // ✅ Enable source maps only in development
    sourcemap: false,
    // ✅ Optimize asset inlining threshold
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // ✅ Optimize server options
  server: {
    compress: true,
  },
  // ✅ Optimize preview options
  preview: {
    compress: true,
  },
  theme: {
    extend: {
      animation: {
        'marquee-rtl': 'marquee-rtl 30s linear infinite',
        'marquee-ltr': 'marquee-ltr 30s linear infinite',
      },
      keyframes: {
        'marquee-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-ltr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
})