import React from "react"

import Layout from "../components/layout.js"
import Navbar from "../components/navbar.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Article from "../components/article.js"
import MainHelmet from "../components/mainhelmet.js"
import Youtube from "../components/youtube.js"

export default () => {
  return (
      <Layout>
          <MainHelmet title="Polyglot Engineer" />
          <Navbar />
          <Header headline="Welcome to the Polyglot Engineer" />
          <Article>
              <div style={{ display: 'block'}}>
                <h2><a href="https://www.youtube.com/channel/UC1TglgvYxS354qj7ZlmoUcA/featured" target="_blank">Polyglot Engineer Channel</a></h2>
                <Youtube id="oY1eDJGtjxE" />{/* 89F2V0jdA_g oY1eDJGtjxE */}
                <p style={{ fontSize: '2rem'}}>
                This site is for software engineers and novice programmers alike to learn language features of a specific language when transitioning from one programming language to another.
                </p>
              
                <p  style={{ fontSize: '1.5rem'}}>
                Most software engineers do not use one programming language, but many, especially over the course of their career. It is important to be able to streamline the learning process by finding common features in a new language that you have used in other languages.
                </p>

                <p style={{ fontSize: '1.5rem'}}>
                My goal is to create short videos around five minutes that can help software engineers learn just the feature they are looking for in a new language.
                </p>

                  
                  
                      
                     
              </div>
          </Article>
          <Footer />
      </Layout>
  )
}