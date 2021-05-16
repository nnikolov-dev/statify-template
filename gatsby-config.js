require("dotenv").config();
const projectAPI = `${process.env.GATSBY_API_URL}/api/project/${process.env.PROJECT_ID}`;

module.exports = {
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
        name: `statify-website`,
        short_name: `statify`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
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
  `gatsby-plugin-postcss`,
  `gatsby-plugin-offline`
  ],
}
