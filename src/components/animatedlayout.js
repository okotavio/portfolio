import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import "../styles.scss"
import { motion } from "framer-motion";

export default function AnimatedLayout({ children }) {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Otávio Vidal — Product Designer</title>
        <link rel="canonical" href="http://otavio.work" />
      </Helmet>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0  }}
        transition={{ delay: 0, duration: .5 }}>
          <Header handletoggle={handleToggle} />
        </motion.div>
            {children}
        <Footer />
    </>
  )
  
}