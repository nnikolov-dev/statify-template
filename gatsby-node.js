const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProject {
        edges {
          node {
            userId
            pages {
              json
              title
            }
            createdAt
            updatedAt
            name
          }
        }
      }
    }
  `)
  result.data.allProject.edges.forEach(({ node }) => {
    node.pages.forEach((page) => {
      createPage({
        path: page.title,
        component: path.resolve(`./src/templates/page.jsx`),
        context: {
          pageData: page
        },
      })
    })
  })
}