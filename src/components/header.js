import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"

import Container from "../components/container"
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Clock from 'react-live-clock';
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Light from "../icons/light"

export default function Header({ style }) {

  const gutter = 5

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
      <Container>
      <header>
      <Grid container spacing={gutter} className="header-alignment">

        <Grid item lg={7} md={3} sm={6} xs={6}>
          <div className="logo">
            <Link to="/">
              Otávio Vidal
            </Link>
          </div>
        </Grid>

        <Hidden only={['sm', 'xs']}>
        <Grid item lg={2} md={3}>
          São Paulo, Brazil <br/>
          <Clock
            format={'h:mm:ss a'}
            ticking={true}
            className={isActive ? "time" : "timeteste"} />
        </Grid>
        </Hidden>

        <Grid item lg={3} md={6} sm={6} xs={6}>
          <Grid container justifyContent="flex-end">
          <nav>
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label className="lightswitch">
                    <input
                      type="checkbox"
                      onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                      checked={theme === 'dark'}
                      alt="Dark mode"
                      onClick={handleToggle}
                    /> <Light /> </label>
                )}
              </ThemeToggler>

                <a href="https://drive.google.com/file/d/1_nsprB3PGrtYcXfJrhbidR1VktYhjVvz/view?usp=sharing" target="_blank" className="button">
                  Resume
                </a>

                <a href="https://www.linkedin.com/in/otaviovidal/" target="_blank" className="button">
                  LinkedIn
                </a>

                <a href="mailto:otavioluisvidal@gmail.com" target="_blank" className="button">
                  Contact
                </a>
          </nav>
          </Grid>
        </Grid>

      </Grid>    
      </header>
      </Container>
  )
}