const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem');
const dashify = require('dashify');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              lienService
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      let pathPage = edge.node.fields.slug;

      if (edge.node.frontmatter.templateKey === 'service') {
        pathPage = `/${edge.node.frontmatter.lienService}`;
      } 

      createPage({
        path: pathPage,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (edge.node.frontmatter.tags) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });

    // Make tag pages
    tags.forEach((tag) => {
      if (!tag) return;
      
      const tagPath = `/motscles/${dashify(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/motscle.js`),
        context: {
          tag,
        },
      });
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
