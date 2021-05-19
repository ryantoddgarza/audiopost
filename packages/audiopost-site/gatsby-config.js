const config = require('gatsby-source-audiopost-cms/gatsby-config');

const { siteMetadata: site } = config;

module.exports = {
  plugins: [
    'gatsby-source-audiopost-cms',
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
  ],
};
