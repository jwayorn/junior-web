const { resolve } = require('path');

module.exports = {
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
            
         }
      }
   },
  
}