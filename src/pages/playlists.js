import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Navbar from "../components/navbar.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Youtubeplaylist from "../components/youtubeplaylist.js"
import Article from "../components/article.js"
import MainHelmet from "../components/mainhelmet.js"
import ExtLink from "../components/extlink.js"

export default () => {
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
                <h1>Javascript</h1>
                <Youtubeplaylist list_id="PL1pnJRf1rXvg28q4ihJ-_0qs8A9DM7pCi" />{/* 89F2V0jdA_g oY1eDJGtjxE */}
                <p style={{ fontSize: '1rem'}}>
                These are some of the presentations on Javascript from the <ExtLink uri="https://www.jaxnode.com" name="JaxNode user group" />. 
                </p>
              </div>
          </Article>
          <Footer />
      </Layout>
    )
}