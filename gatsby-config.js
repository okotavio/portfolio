module.exports = {
  pathPrefix: "/okotavio.github.io",
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-remark-images",
      options: {
        linkImagesToOriginal: false,
      },
     },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [     {
          resolve: "gatsby-remark-images",
          options: {
            linkImagesToOriginal: false,
            maxWidth: 1200,
            backgroundColor: "transparent",
          },
         }, ],
        plugins: [     {
          resolve: "gatsby-remark-images",
          options: {
            linkImagesToOriginal: false,
            maxWidth: 1200,
            backgroundColor: "transparent",
          },
         }, ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-dark-mode",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work",
        path: `${__dirname}/src/work`,
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/work`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        icon: "src/images/favicon.svg" 
      }
    },
  ],
};
