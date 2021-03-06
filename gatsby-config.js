module.exports = {
  siteMetadata: {
    title: `Polyglot Engineer`,
    description: `WebSite for the Polyglot Engineer channel`,
    author: `@davidfekke`,
    twitterHandle: '@polyglotengine1',
    url: 'https://polyglotengineer.com',
    siteUrl: 'https://polyglotengineer.com',
    facebookAppId: '833529826996398'
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/pelogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UC1TglgvYxS354qj7ZlmoUcA'],
        apiKey: process.env.youtube_api_key, // Optional for public requests
        maxVideos: 1000 // Defaults to 50
      },
    },
  ],
}
