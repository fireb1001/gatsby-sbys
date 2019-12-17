import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>It's working: {data.gph.post.title}</p>
        <div style={{ color: `teal` }}>
            <Header h1="Gatsby Header !"/>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    gph {
      post(postId:3){
        id
        title
      }
    }
  }
`