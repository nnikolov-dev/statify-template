const path = require(`path`)

// gatsby-node.js
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProject {
        edges {
          node {
            userId
            description
            keywords
            pages {
              description
              home
              id
              json
              title
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allProject.edges.forEach(({ node }) => {
    node.pages.forEach((page) => {
      createPage({
        path: `pages/${page.slug}`,
        component: path.resolve(`./src/templates/page.jsx`),
        context: {
          pageData: page
        },
      })
    })
  })
}