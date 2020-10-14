const { description } = require('../../package')

module.exports = {
  title: 'baldeweg/cms-businesscard',
  description: description,
  locales: {
    '/': { lang: 'de-DE' },
  },
  head: [
    [ 'meta', { name: 'theme-color', content: '#e1661e' } ],
  ],
  themeConfig: {
    colors: {
      color10: '#e1661e',
      color05: '#eeab84',
      color00: '#fcf1ea'
    },
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'News',
        link: '/news'
      },
    ],
    links: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'News',
        link: '/news'
      },
    ],
  },
  plugins: []
}
