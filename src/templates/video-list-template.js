import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout.js"
import Navbar from "../components/navbar.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Article from "../components/article.js"
import MainHelmet from "../components/mainhelmet.js"
import YoutubeItem from "../components/youtubeitem.js"


const videolist = ({data, pageContext}) => {
    const videos = data.allYoutubeVideo.edges;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/videos/' : `/videos/${(currentPage - 1).toString()}`;
    const nextPage = `/videos/${(currentPage + 1).toString()}`;

    return (
        <Layout>
            <MainHelmet title="Polyglot Engineer" />
            <Navbar />
            <Header headline="Polyglot Engineer Videos" />
            <Article>
                <div style={{ display: 'block'}}>
                  {/* <Youtube id="oY1eDJGtjxE" /> */}
                  {videos.map( ({node}) => {
                        const title = node.title;
                        const videoId = node.videoId;
                        const description = node.description;
        
                      return (
                            <YoutubeItem id={videoId} videoId={videoId} title={title} description={description} />
                      );
                  })}
                  <p style={{ fontSize: '2rem'}}>
                  
                  </p>
                </div>

                <div style={{ margin: '0px 100px 30px 100px'}}>
                    {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        ← Previous Page
                    </Link>
                    )}
                    {!isLast && <span>&nbsp;</span>}
                    {!isLast && (
                    <Link to={nextPage} rel="next">
                        Next Page →
                    </Link>
                    )}
                </div>

            </Article>
            <Footer />
        </Layout>
    )
  }
  
  export default videolist;
  

export const videoListQuery = graphql`
query videoListQuery($skip: Int!, $limit: Int!) {
    allYoutubeVideo(sort: {fields: [publishedAt], order: ASC} 
        limit: $limit
        skip: $skip) {
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
`
