const config = require('gatsby-source-audiopost-cms/gatsby-config');
const autoprefixer = require('autoprefixer');

const { siteMetadata: site } = config;

module.exports = {
  plugins: [
    // 1. first priority plugins
    // 2. source plugins
    'gatsby-source-audiopost-cms',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    // 3. transformer plugins
    // 4. other plugins
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
    // 5. last priority plugins
  ],
};
