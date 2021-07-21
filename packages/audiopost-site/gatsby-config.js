require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const cssnano = require('cssnano');
const site = require('./config');

module.exports = {
  siteMetadata: {
    siteUrl: site.url,
    siteName: site.title,
    titleTemplate: `%s | ${site.title}`,
    shortDescription: site.shortDescription,
    description: site.description,
    author: site.author,
    email: site.email,
    instagram: 'audiopost.studio',
  },
  plugins: [
    // 1. first priority plugins
    // 2. source plugins
    'gatsby-source-audiopost-cms',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [cssnano()],
      },
    },
    // 3. transformer plugins
    // 4. other plugins
    'gatsby-plugin-react-svg',
    {
      resolve: '@bitpas/gatsby-plugin-seo',
      options: {
        helmet: {
          title: site.shortDescription,
          titleTemplate: site.titleTemplate,
          meta: [
            { name: 'description', content: site.description },
            { name: 'author', content: site.author },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: site.title,
        short_name: site.shortName,
        description: site.description,
        icon: site.favicon,
        lang: 'en',
        start_url: '/',
        background_color: site.backgroundColor,
        theme_color: site.themeColor,
        display: 'minimal-ui',
      },
    },
    // 5. last priority plugins
  ],
};
