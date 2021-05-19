const path = require('path');
const fs = require('fs');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  const sources = [];

  sources.forEach(({ type, dirpath }) => {
    const files = fs.readdirSync(dirpath);

    files.forEach((file) => {
      const filepath = path.resolve(dirpath, file);
      const data = require(filepath, 'utf8');

      createNode({
        ...data,
        id: createNodeId(`${type}-${data.id}`),
        internal: {
          type,
          contentDigest: createContentDigest(data),
        },
      });
    });
  });
};
