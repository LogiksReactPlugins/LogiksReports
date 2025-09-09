// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   build: {
//     lib: {
//       entry: './src/index.js', 
//       name: 'ReactReportComponent',
//       fileName: 'index',
//       formats: ['es', 'cjs'],
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//         },
//       },
//     },
//     cssCodeSplit: true,
//   },
// });
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   build: {
//     lib: {
//       entry: './src/index.js',
//       name: 'ReactReportComponent',
//       formats: ['es', 'cjs'],
//       fileName: (format) => `index.${format}.js`,
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom', 'react/jsx-runtime'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//                     'react/jsx-runtime': 'jsxRuntime',

//         },
//         assetFileNames: (assetInfo) => {
//           if (assetInfo.name === 'index.css') return 'index.css'
//           return assetInfo.name;
//         },
//       },
//     },
//         cssCodeSplit: false,
//   },
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: "src/index.jsx", // or index.jsx
      name: "ReactReportComponent",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
    },
    cssCodeSplit: true, // ensures CSS is emitted separately
  },
});
