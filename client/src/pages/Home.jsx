import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";

import Servicespage from "../components/Servicespage";
import Projectpage from "../components/Projectpage";

import ClientLogoSlider from "../components/ClientLogoSlider";

const Home = () => {
  return (
    <>
      {/* ✅ SEO FOR HOME PAGE */}
      <Helmet>
        <title>The Goodwill Facades | Best Facade Glazing Company</title>
        <meta
          name="description"
          content="We design and manufacture modern facade glazing systems, ACP cladding, aluminium systems and architectural facade solutions."
        />
        <meta
          name="keywords"
          content="facade glazing, ACP cladding, aluminium windows, curtain wall, building facade, glass facade, architectural facade, facade contractors, facade manufacturing company, aluminium facade, facade engineering"
        />
        <link rel="canonical" href="https://thegoodwillfacade.com/" />
        {/* <!-- ✅ Open Graph for link preview (Facebook/WhatsApp/LinkedIn) --> */}
        <meta
          property="og:title"
          content="The Goodwill Facades | Facade Glazing & ACP Experts"
        />
        <meta
          property="og:description"
          content="Premium facade glazing, ACP cladding, aluminium systems and architectural facade solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thegoodwillfacade.com/" />
        <meta
          property="og:image"
          content="https://thegoodwillfacade.com//images/hero7.webp"
        />
      </Helmet>

      <Hero />
      <About />
      <Projectpage />

      <Servicespage />
      <ClientLogoSlider />

      {/* <Contact/> */}
    </>
  );
};

export default Home;
