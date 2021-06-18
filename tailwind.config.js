module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'barlow': ['Barlow', 'sans-serif'],
      'fraunces': ['Fraunces', 'serif'],
      'overpass': ['Overpass', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
        'sunnyside-mobile': '570px',
      },
      colors:{
        /** Sunnyside */
        'sunnyside-soft-red': 'hsl(7, 99%, 70%)',
        'sunnyside-yellow': 'hsl(51, 100%, 49%)',
        'sunnyside-d-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'sunnyside-d-bluue': 'hsl(198, 62%, 26%)',
        'sunnyside-d-moderate-cyan': 'hsl(168, 34%, 41%)',
        'sunnyside-vd-desaturated-blue': 'hsl(212, 27%, 19%)',
        'sunnyside-vd-grayish-blue': 'hsl(213, 9%, 39%)',
        'sunnyside-d-grayish-blue': 'hsl(232, 10%, 55%)',
        'sunnyside-grayish-blue': 'hsl(210, 4%, 67%)',
        'sunnyside-white': 'hsl(0, 0%, 100%)',

        /** Blogr */
        'blogr-l-red': 'hsl(356, 100%, 66%)',
        'blogr-vl-red': 'hsl(355, 100%, 74%)',
        'blogr-vd-blue': 'hsl(208, 49%, 24%)',
        'blogr-grayish-blue': 'hsl(240, 2%, 79%)',
        'blogr-vd-grayish-blue': 'hsl(207, 13%, 34%)',
        'blogr-vd-grayish-blue': 'hsl(240, 10%, 16%)',

      },
      fontSize: {
        'xxs': '0.8125rem', //13px
        '2tiny': '0.9375rem', // 15px
        '2rem': '2rem', // 32px
      },
      maxWidth:{
        'mobile': '23.4375rem',
        'desktop': '90rem',
      },
      minWidth:{
        'mobile': '23.4375rem',
        'desktop': '90rem',
      },
      width: {
        '41.25': '10.3125rem', //165px
        '37.25': '9.3125rem', //165px
      },
      height: {
        'screen-70': '70vh',
        'screen-80': '80vh',
        '17.25': '4.3125rem', // 69px
        '13.25': '3.3125', // 53px
      },
      margin: {
      },
      spacing:{
        '27.5': '6.875rem',  // 110px
        '57.5': '14.375rem', // 230px
        '104': '26rem', // 416px
        '128': '32rem',
        '160': '40rem',
        '134.5': '33.625rem',
        '136': '34rem',
        '148': '37rem',
        '200': '50rem',
      },
      inset: {
      },
      letterSpacing: {
        'widest-2': '0.2em',
      },
      borderRadius:{
        '8.5': '8.5rem',
        '7.5': '7.5rem',
      },
      backgroundImage: theme => ({
        'sunnyside-m-header':"url('/sunnyside-agency-landing-page/images/mobile/image-header.jpg')",
        'sunnyside-d-header':"url('/sunnyside-agency-landing-page/images/desktop/image-header.jpg')",
        

        'sunnyside-m-transform':"url('/sunnyside-agency-landing-page/images/mobile/image-transform.jpg')",
        'sunnyside-d-transform':"url('/sunnyside-agency-landing-page/images/desktop/image-transform.jpg')",
        'sunnyside-m-standout':"url('/sunnyside-agency-landing-page/images/mobile/image-stand-out.jpg')",
        'sunnyside-d-standout':"url('/sunnyside-agency-landing-page/images/desktop/image-stand-out.jpg')",
        
        
        'sunnyside-m-graphic-design':"url('/sunnyside-agency-landing-page/images/mobile/image-graphic-design.jpg')",
        'sunnyside-d-graphic-design':"url('/sunnyside-agency-landing-page/images/desktop/image-graphic-design.jpg')",
        'sunnyside-m-photography':"url('/sunnyside-agency-landing-page/images/mobile/image-photography.jpg')",
        'sunnyside-d-photography':"url('/sunnyside-agency-landing-page/images/desktop/image-photography.jpg')",
      
      }),

    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [],
}
