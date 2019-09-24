module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    titleTemplate: `%s - Gatsby Tutorial`,
    description: `This is a sample description`,
    url: `https://rotsenacob.com`,
    image: `/images/favicon.ico`,
    twitterUsername: `@acobrotsen`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}