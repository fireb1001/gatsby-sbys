/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Hola Bonita ♥ Adora`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "GRAPH_PH",
        // This is the field under which it's accessible
        fieldName: "gph",
        // URL to query from
        url: "https://api.graphqlplaceholder.com/",
      },
    },
  ],
}
