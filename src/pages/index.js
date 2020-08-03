import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/logoimage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>
    This youtube channel is for software engineers and novice programmers alike to learn language features of a specific language when transitioning from one programming language to another.
    </p>
    <p>
    Most software engineers do not use one programming language, but many, especially over the course of their career. It is important to be able to streamline the learning process by finding common features in a new language that you have used in other languages.
    </p>
    <p>
    My goal is to create short videos around five minutes that can help software engineers learn just the feature they are looking for in a new language.      
    </p>

    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
