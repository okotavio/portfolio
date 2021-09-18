import React, { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import "../styles.scss"

export default function Layout({ children, props }) {

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
        <Header handletoggle={handleToggle} />
          {children}
        <Footer />
    </>
  )
  
}