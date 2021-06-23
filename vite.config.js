import vue from '@vitejs/plugin-vue';
// import { defineConfig } from 'vite';

const { resolve } = require('path');


module.exports = {
   plugins: [vue()],
   base: '/junior-web/',
   root: 'src',
   build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
            sunnysideAgencyLandingPage: resolve(__dirname, 'src/sunnyside-agency-landing-page/index.html'),
            blogrLandingPage: resolve(__dirname, 'src/blogr-landing-page/index.html'),
            crowdfundingProductPage: resolve(__dirname, 'src/crowdfunding-product-page/index.html'),
         }
      }
   },

}
