import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import whaleGIF from "../gifs/whales.gif"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Adopt a whale today</h1>
    <p>Whales are our friends.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={whaleGIF} alt="Picture of Whale from BBC America" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage