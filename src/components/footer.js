import React, { useEffect } from "react"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Link } from "gatsby"

import Container from "../components/container"
import Grid from '@material-ui/core/Grid';

export default function Footer({ style }) {

  const gutter = 5

  const controls = useAnimation();
  const { ref, inView } = useInView({
      threshold: .3,
      triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const footer = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .5
      }
    }
  }

  return (
    <Container>
      <footer>
          <Grid container spacing={gutter} alignItems="flex-end">

            <Grid item lg={6}>
            <Grid container>
              <ul>
                <li>
                  <a href="#">
                  LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#">
                  Medium
                  </a>
                </li>
                <li>
                  <a href="#">
                  Instagram
                  </a>
                </li>
              </ul>
            </Grid>
            </Grid>
            
            <Grid item lg={6}>
            <Grid container justifyContent="flex-end">
              <div className="footer-rights">
              Otávio Vidal © {new Date().getFullYear()} 
              </div>
            </Grid>
            </Grid>

          </Grid>
      </footer>
    </Container>
  )
}