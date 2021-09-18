import React, { useEffect } from "react"
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { GatsbyImage } from "gatsby-plugin-image"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function WorkThumb({ title, url, description, image, background, soon }) {

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: .1,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
      if (!inView) {
        controls.start('hidden');
      }
    }, [controls, inView]);
  
    const texts = {
      hidden: { y: -10, opacity: 0 },
      visible: {
        y: 0, opacity: 1
      }
    }

    const parent = {
      hidden: { scale: .9, opacity: 0 },
      visible: {
        scale: 1, 
        opacity: 1,
        transition: {
          duration: .25
        }
      }
      
    }

    return (
      soon === true ?
      <div className="work-thumb-color">
      <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={parent}>
          <div className="work-title-soon">
            {title}
          </div>
              <motion.div className="work-thumb disabled" style={background} >
              <GatsbyImage image={image} alt="teste" />
          </motion.div>
      </motion.div>
      </div>
      : 
      <div className="work-thumb-color">
      <Link to={url}>
      <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={parent}>
          <div className="work-title">
            {title}
          </div>
              <motion.div className="work-thumb" style={background} >
              <GatsbyImage image={image} alt="teste" />
          </motion.div>
      </motion.div>
      </Link>
      </div>
    )
}