
module.exports = {

  clientModules: [
    require.resolve('./src/js/lightbox.js'),
  ],

  title: 'Yoru Cafe',            


  tagline: 'Inmersión Total',

  url: 'https://tu-sitio.com',      

  baseUrl: '/',                    

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  favicon: 'img/logo.png',



  i18n: {

    defaultLocale: 'es',

    locales: ['es'],

  },



  presets: [

    [

      'classic',

      {

        docs: {

          sidebarPath: require.resolve('./sidebars.js'),

          routeBasePath: '/', // Hace que las guías sean la página de inicio

        },

        blog: false,

        theme: {

          customCss: require.resolve('./src/css/custom.css'),

        },

      },

    ],

  ],



  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['es', 'en'],
        indexBaseUrl: true,
        maxHits: 8,
        highlightResult: true,
        disableVersioning: true,
      }
    ]
  ],



  themeConfig: {

    colorMode: {

      defaultMode: 'dark',

      disableSwitch: true,

    },

    navbar: {

      title: 'Yoru Cafe',

      logo: {
        alt: 'Yoru Cafe Logo',
        src: 'img/logo.png',
      },

      items: [

        {

          href: 'https://discord.gg/NwKYJAUeA',

          position: 'right',

          className: 'navbar-discord-link',

          'aria-label': 'Discord',

        }

      ],

    },

  },

}; 