require("dotenv").config();
const projectAPI = `${process.env.GATSBY_API_URL}/api/project/${process.env.PROJECT_ID}`;

module.exports = {
  // siteMetadata: {
  //   title: `Gatsby Default Starter`,
  //   description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  //   author: `@gatsbyjs`,
  // },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          projectAPI
        ],
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: projectAPI,
          rootKey: "project",
          schemas: {
            project: `
              _id: String
              pages: [pages]
              description: String
              keywords: String
              userId: String
              name: String
              createdAt: String
              updatedAt: String
            `,
            pages: `
              _id: String
              title: String
              description: String
              slug: String
              json: String
            `
          }
      }
  },
  `gatsby-plugin-postcss`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
