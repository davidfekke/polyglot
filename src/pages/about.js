import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Navbar from "../components/navbar.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Article from "../components/article.js"
import MainHelmet from "../components/mainhelmet.js"
import ExtLink from "../components/extlink.js"
import Youtube from "../components/youtube.js"

export default ({data}) => {
    return (
        <Layout>
            <MainHelmet title="Polyglot Engineer" />
            <Navbar />
            <Header headline="About Polyglot Engineer" />
            <Article>
                <div className="aboutDiv" >
                    <h2>Why learn a new programming language</h2>
                    <p>It is becoming increasingly dificult to have a career as a software engineer and only know one programming language.</p>
                    <p>A good habit for software engineers is to try to learn a new language every year. In my current capacity, I use six different languages in order to do my job.</p>
                    <Youtube id="oY1eDJGtjxE" />
                <br />
                <h3>Affiliations</h3>
                <ul>
                  <li>
                    <strong><ExtLink uri="https://www.jaxnode.com" name="JaxNode" /></strong>
                  </li>
                  <li>
                  <strong><ExtLink uri="http://jaxmug.com" name="JaxMUG" /></strong>
                  </li>
                  <li>
                    <ExtLink uri="https://craigpilots.org" name="Criag Pilots Airport Association" />
                  </li>
                </ul>
                </div>
            </Article>
            <Footer />
        </Layout>
    )
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "DavidFekke.jpg" }) {
//       id
//       extension
//       relativePath
//       dir
//       childImageSharp {
//         fixed(width: 112, height: 112) {
//             ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `