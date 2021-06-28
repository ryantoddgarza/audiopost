const site = require('./src/config');
const navigation = require('./src/navigation');

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
    navList: navigation,
  },
};
