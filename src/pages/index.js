import React, { useState, useEffect, useRef } from "react"
import { Link, graphql } from 'gatsby'
import {   useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
  useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import AnimatedLayout from "../components/animatedlayout"

import Container from "../components/container"
import Grid from '@material-ui/core/Grid';
import { StaticImage, getImage } from "gatsby-plugin-image"

import WorkThumb from "../components/workthumb"

import Circles from "../images/circles"
import Symbol from "../images/symbol"

import documentationGif from "../images/documentation.gif"

const IndexPage = ({ data, props }) => {

  const gutter = 5
  let postCounter = 0

  const { scrollY } = useViewportScroll();
  const square1 = useTransform(scrollY, [0, 300], [0, -1500]);
  const square2 = useTransform(scrollY, [0, 500], [0, -900]);
  const square3y = useTransform(scrollY, [0, 500, 501], [0, 1400, -2000]);
  const photo = useTransform(scrollY, [0, 300, 750, 900], [0, -550, -700, -800]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
      threshold: .3
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const parent = {
    hidden: { scale: 0.95 },
    visible: {
      scale: 1,
      transition: {
        duration: .5
      }
    }
  }

  return (
    <AnimatedLayout>
      <Container>
        <Grid container spacing={gutter}>

        <motion.div className="square1"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0, duration: .5 }}
        style={{ y: square1}}>

          <Symbol />
        </motion.div>

        <motion.div className="square2"
        initial={{ y: 100, opacity: 1}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: .5 }}
        style={{ y: square2}}>
          <Circles />
        </motion.div>
        
        <motion.div className="square3"
        initial={{ x: 100, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: .5 }}
        style={{ y: square3y }}> 
          <div className="childsquare3" />
        </motion.div>

        <Grid item lg={7} md={5} />
          <Grid item lg={5} md={7} style={{ zIndex: '1'}}>
              <div
              className="hero"
              >
              <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .25, duration: .5 }}>
                Product designer,
              </motion.h1><br/>
              <motion.h1 initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: .65, duration: .5 }}>design systems</motion.h1>
              </div>
          </Grid>


          <Grid item xl={5} lg={5} md={8} sm={12} xs={12} style= {{ }}>
            <motion.div className="hero-description"         initial={{ y: 500  }}
            animate={{ y: 0 }}
            transition={{ delay: .25, duration: 1 }}>
              <p>Otávio is a Brazilian football nerd, a punk rock fan and a product designer passionate about branding and front-end development.</p>

              <p>He designs end-to-end, user-centered solutions from early discoveries to  iteration cycles while being the conduit between the business and users.</p>
            
              <p>Otávio has a bachelor's degree in Communication from  Universidade de São Paulo, where he proudly wrote a thesis on emotional design in football.</p>
                            
              <p>He is currently a Senior Product Designer working with design systems at proptech startup <a href="https://quintoandar.com.br" target="_blank">QuintoAndar</a> in São Paulo, Brazil.</p>
            </motion.div>
            </Grid>
            
            <Grid item lg={2} />

            <Grid item lg={5} md={12} style={{ zIndex: '1'}}>
              <motion.div className="hero-picture"
              style={{ y: photo }}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={parent}>
                <div>
                  <StaticImage src="../images/heroprofile.png" />
                </div>

              </motion.div>
            </Grid>
        </Grid>
        <section className="work-loop">
        {
          data.allMdx.nodes.map((node) => {
            postCounter++
            return (
              postCounter % 2 === 0 ?
              <div className="work-thumb-margin">
              <Grid container spacing={gutter}>
              <Grid item lg={4} md={0}></Grid>
              <Grid item lg={6} md={10} sm={12}>
              <div style={{color: node.frontmatter.color,}}>
              <WorkThumb 
              title={node.frontmatter.title}
              key={node.frontmatter.title}
              image={getImage(node.frontmatter.thumbnail)}
              soon={node.frontmatter.soon}
              url={`/work/${node.slug}`} 
              />
              </div>
              </Grid>
              </Grid>
              </div>
              :
              <Grid container spacing={gutter}>
              <Grid item lg={2} md={2}></Grid>
              <Grid item lg={6} md={10} sm={12}>
              <div style={{color: node.frontmatter.color,}}>
              <WorkThumb 
              title={node.frontmatter.title}
              key={node.frontmatter.title}
              image={getImage(node.frontmatter.thumbnail)}
              soon={node.frontmatter.soon}
              url={`/work/${node.slug}`} 
              />
              </div>
              </Grid>
              </Grid>
            )
          })
        }
        </section>

        <Grid container>
        
        <Grid item lg={5} />
        <Grid item lg={6}>
        <div className="footer-description">  
          <p>Otávio started his career at digital media agency <a href="https://sa365.ag" target="_blank">SA365</a> as an art director, where he had the opportunity to explore various fields, from branding to motion design, before eventually focusing his career on user experience design.</p>

          <p>In 2018, he became a Product Designer at <a href="https://quintoandar.com.br" target="_blank">QuintoAndar</a>, a proptech startup focused on long-term rentals and home sales. Since then, he has worked in a wide range of contexts, from credit approvals to home inspections.</p>

          <p>After these experiences, Otávio moved to a cross-functional, dedicated design systems team, where he currently leads a cross-platform design system used by all QuintoAndar’s digital products, including web and native applications for tenants, landlords, realtors, photographers, and operational teams.
          </p>

          <p>During this time, he has helped the team ship initiatives to improve product development and designing experience, such as a semantic tokens system; accessible and reusable patterns; a refined technical, cross-functional documentation template; a new icons library; redesign and design of components of varied atomicity; as well as maintaining components and tokens libraries on Figma.
          </p>    
          
          <p>Otávio has now 5 years of design experience and is open for an overseas opportunity.</p>
        </div>
        </Grid>

        </Grid>
      </Container>
    </AnimatedLayout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: ASC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        soon
        color
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 1200
            )
          }
        }
      }
      id
      slug
    }
  }
}
`