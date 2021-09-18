import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Container from "../../components/container"
import Grid from '@material-ui/core/Grid'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlogPost = ({ data }) => { 

  const post = data.mdx
  const gutter = 5
  const thumbnail = getImage(post.frontmatter.thumbnail)
  const endimage = getImage(post.frontmatter.endimage)
  
  const postColor = {
    background: post.frontmatter.color,
  }

  return (
        <Layout>
            <Container>
            <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0  }}
            transition={{ duration: .2 }}>
            <Grid container spacing={gutter} style={{marginTop: '40px'}}>
            <Grid item lg={3}>
              <div className="post-sidebar-wrapper">
                <div className="post-sidebar-content">
                  <h2 className="post-title">
                    {post.frontmatter.title}
                  </h2>
                  <p className="post-description">
                    {post.frontmatter.description}
                  </p>
                  <p className="post-date">
                    {post.frontmatter.date}
                  </p>
                  <a href={post.frontmatter.prototype} target="_blank">
                    <div className="post-cta">
                    View prototype
                    </div>
                  </a>
                </div>
              </div>
            </Grid>

            <Grid item lg={1} />

            <Grid item lg={8}>
              <article>
                <div className="post-photo" style={{background: post.frontmatter.color,
                }} >
                  <GatsbyImage image={thumbnail} alt="teste" />
                </div>
                <div className="post-content">
                  <MDXRenderer>
                    {post.body}
                  </MDXRenderer>
                </div>
              </article>
            </Grid>
            </Grid>
            </motion.div>
            </Container>
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM YYYY")
      description
      prototype
      color
      thumbnail {
        childImageSharp {
          gatsbyImageData(
            width: 900
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    body
  }
}
`