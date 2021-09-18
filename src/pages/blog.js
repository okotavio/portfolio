import React, { useEffect } from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Container from "../components/container"
import Grid from '@material-ui/core/Grid'
import { GatsbyImage } from "gatsby-plugin-image"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BlogPage({}) {
    return (
        <Layout pageTitle="My Blog Posts">
            <Container>
            <p>My cool posts will go in here</p>
            </Container>
        </Layout>
    )
}