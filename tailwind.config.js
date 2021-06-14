module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'barlow': ['Barlow', 'sans-serif'],
      'fraunces': ['Fraunces', 'serif'],
    },
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
        'sunnyside-mobile': '570px',
      },
      colors:{
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

      },
      fontSize: {
        'xxs': '0.8125rem', //13px
        '2tiny': '0.9375rem', // 15px
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
      },
      height: {
        'screen-70': '70vh',
        'screen-80': '80vh',
      },
      margin: {
      },
      spacing:{
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
      backgroundPosition: {
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
    extend: {},
  },
  plugins: [],
}
