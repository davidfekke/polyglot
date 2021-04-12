import React from "react"
import Layout from "../components/layout.js"
import Navbar from "../components/navbar.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Youtubeplaylist from "../components/youtubeplaylist.js"
import Article from "../components/article.js"
import MainHelmet from "../components/mainhelmet.js"
import ExtLink from "../components/extlink.js"

const playlist = () => {
    return (
        <Layout>
          <MainHelmet title="Polyglot Engineer Playlists" />
          <Navbar />
          <Header headline="Playlists" />
          <Article>
              <div style={{ display: 'block'}}>
                <h1>Objective-C</h1>
                <Youtubeplaylist list_id="PL1pnJRf1rXvib5fpvNOH0jXOeEK8NOrlm" />{/* 89F2V0jdA_g oY1eDJGtjxE */}
                <p style={{ fontSize: '1rem'}}>
                Check out the Objective-C series.
                </p>
              </div>

              <div style={{ display: 'block'}}>
                <h1>Swift</h1>
                <Youtubeplaylist list_id="PL1pnJRf1rXvjT2DJXSb9lw3mzRHI2Wrah" />{/* 89F2V0jdA_g oY1eDJGtjxE */}
                <p style={{ fontSize: '1rem'}}>
                Check out the Swift series.
                </p>
              </div>

              <div style={{ display: 'block'}}>
                <h1>Javascript</h1>
                <Youtubeplaylist list_id="PL1pnJRf1rXvg28q4ihJ-_0qs8A9DM7pCi" />{/* 89F2V0jdA_g oY1eDJGtjxE */}
                <p style={{ fontSize: '1rem'}}>
                These are some of the presentations on Javascript. 
                </p>
              </div>

              <div style={{ display: 'block'}}>
                <h1>iOS Frameworks</h1>
                <Youtubeplaylist list_id="PL1pnJRf1rXvhld8hxCeKH23mRp46FQHnu" />{/* 89F2V0jdA_g oY1eDJGtjxE */}
                <p style={{ fontSize: '1rem'}}>
                Check out the iOS Frameworks series. 
                </p>
              </div>

              <div style={{ display: 'block'}}>
                <h1>TypeScript</h1>
                <Youtubeplaylist list_id="PL1pnJRf1rXvjOP7qc-Y15UH1qfq9I_Arc" />{/* 89F2V0jdA_g oY1eDJGtjxE */}
                <p style={{ fontSize: '1rem'}}>
                Check out the TypeScript series. 
                </p>
              </div>
          </Article>
          <Footer />
      </Layout>
    )
}

export default playlist;
