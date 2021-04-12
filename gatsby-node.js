const path = require('path');
const _ = require('lodash');
const graphql = require('gatsby').graphql;

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        //const videoPage = path.resolve('src/templates/videopage.js');
        resolve(
            graphql(`
              {
                videos: allYoutubeVideo(sort: {fields: [publishedAt], order: ASC}, limit: 1000) {
                edges {
                  node {
                    id
                    title
                    description
                    videoId
                    publishedAt
                    privacyStatus
                    channelTitle
                    thumbnail {
                      url
                    }
                    localThumbnail {
                      childImageSharp {
                        resize {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
            `).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const posts = result.data.videos.edges;
                const postsPerPage = 10;
                const numPages = Math.ceil(posts.length / postsPerPage);

                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path: i === 0 ? `/videos` : `/videos/${i + 1}`,
                        component: path.resolve("./src/templates/video-list-template.js"),
                        context: {
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            numPages,
                            currentPage: i + 1
                        } 
                    })
                })
            })
        );
    });
};
