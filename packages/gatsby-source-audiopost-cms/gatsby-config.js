const site = require('./src/config');

module.exports = {
  siteMetadata: {
    siteUrl: site.url,
    siteName: site.title,
    titleTemplate: `%s | ${site.title}`,
    description: site.description,
    author: site.author,
    email: site.email,
  },
};
