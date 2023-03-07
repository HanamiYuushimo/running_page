module.exports = {
  pathPrefix: '/', // Change to `/running_page` when running on github pages
  siteMetadata: {
    siteTitle: '幽霜的 Running Page',
    siteUrl: 'https://github.com/HanamiYuushimo/running_page',
    logo: 'https://raw.githubusercontent.com/HanamiYuushimo/running_page/main/headicon.png',
    description: "As long as we don't stop, the road will continue.",
    navLinks: [
      {
        name: 'My Blog',
        url: 'https://hanamiyuushimo.github.io',
      },
      {
        name: 'My Github',
        url: 'https://github.com/HanamiYuushimo',
      },
      {
        name: 'About this Project',
        url: 'https://github.com/HanamiYuushimo/running_page/blob/main/README.md',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    }
  ],
};
