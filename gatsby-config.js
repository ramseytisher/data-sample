module.exports = {
  siteMetadata: {
    title: `Let's Get Data`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@?`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
          // This type will contain the remote schema Query type
          typeName: "AWSAppSync",
          // This is the field under which it's accessible
          fieldName: "emails",
          // URL to query from
          url: `https://lgbsgy4pmngrrnuayjndrroo74.appsync-api.us-east-2.amazonaws.com/graphql`,
          headers: {
              "x-api-key": `da2-4crv4tplfrhujg34cksyyp6xcm`
          },
          refetchInterval: 10,
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
