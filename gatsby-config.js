module.exports = {
  siteMetadata: {
    title: `Cadala`,
    description: `Indian manufactured products to the world`,
    author: `@devgeetech`,
  },
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
        name: `Cadala`,
        short_name: `Cadala`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#1B1464`,
        display: `fullscreen`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
