const config = require('gatsby-source-audiopost-cms/gatsby-config');
const autoprefixer = require('autoprefixer');

const { siteMetadata: site } = config;

module.exports = {
  plugins: [
    'gatsby-source-audiopost-cms',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
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
    // Last priority plugins
    'gatsby-plugin-remove-trailing-slashes',
  ],
};
