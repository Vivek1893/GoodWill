import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import About from "../components/About";

import Servicespage from "../components/Servicespage";
import Projectpage from "../components/Projectpage";

import ClientLogoSlider from "../components/ClientLogoSlider";


const Home = () => {
  return (
    <>
      {/* ✅ SEO FOR HOME PAGE */}
        <Helmet>
      
        <title>The Goodwill Facades | Best Facade Glazing Company | ACP Cladding & Aluminium Facade Solutions India</title>
        <meta
          name="description"
          content="The Goodwill Facades - India's leading facade glazing company. Expert in ACP cladding, aluminium windows, structural glazing, curtain wall systems, and architectural facade solutions. Serving Mumbai, Surat, and across India with premium facade design and installation services."
        />
        <meta
          name="keywords"
          content="facade glazing company, ACP cladding, aluminium windows, facade contractors, structural glazing, curtain wall systems, building facade, glass facade, architectural facade, facade manufacturing company, aluminium facade, facade engineering, facade contractors India, facade glazing Mumbai, facade contractors Mumbai, ACP cladding contractors, architectural facade solutions, commercial facade, residential facade, facade design, facade installation, facade maintenance, modern facade, premium facade, facade glazing Surat, facade contractors Surat"
        />
        <meta name="author" content="thegoodwillfacade" />
        <meta name="robots" content="index, follow" />


       
        <link rel="canonical" href="https://thegoodwillfacade.com/" />
        

     
        <meta property="og:title" content="The Goodwill Facades | Best Facade Glazing Company | ACP Cladding & Aluminium Facade Solutions India" />

        <meta
          property="og:description"
          content="India's leading facade glazing company. Expert in ACP cladding, aluminium windows, structural glazing, curtain wall systems, and architectural facade solutions. Serving Mumbai, Surat, and across India."
        />
        
        <meta property="og:image" content="https://thegoodwillfacade.com/images/logo1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Goodwill Facades | Best Facade Glazing Company India" />
        <meta name="twitter:description" content="Expert facade glazing, ACP cladding, and architectural facade solutions across India." />
        <meta name="twitter:image" content="https://thegoodwillfacade.com/images/logo1.webp" />

       
        <meta property="og:url" content="https://www.thegoodwillfacade.com/" />

   
        <meta property="og:type" content="website" />

   
        <meta property="og:site_name" content="The GoodWill Facade" />

   
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The GoodWill Facade",
            "alternateName": "The Goodwill Facades",
            "url": "https://www.thegoodwillfacade.com/",
            "logo": "https://www.thegoodwillfacade.com/images/logo1.webp",
            "sameAs": [
              "https://www.linkedin.com/in/neil-the-goodwill-facade-bhaidaswala-b471bb113",
              "https://www.instagram.com/thegoodwillfacade"
            ],
            "description": "India's leading facade glazing company specializing in ACP cladding, aluminium windows, structural glazing, curtain wall systems, and architectural facade solutions. Expert facade contractors serving Mumbai, Surat, and across India.",
            "knowsAbout": [
              "Facade Glazing",
              "ACP Cladding",
              "Aluminium Windows",
              "Structural Glazing",
              "Curtain Wall Systems",
              "Architectural Facade Design",
              "Facade Installation",
              "Facade Maintenance"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Disha C.H.S., Opp. Joggers Park, Chikoowadi, Borivali West",
              "addressLocality": "Mumbai",
              "postalCode": "400092",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9892118052",
              "contactType": "customer support",
              "email": "thegoodwillfacade@gmail.com",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "availableLanguage": ["English", "Hindi"]
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Mumbai"
              },
              {
                "@type": "City",
                "name": "Surat"
              },
              {
                "@type": "Country",
                "name": "India"
              }
            ]
          })}
        </script>
      </Helmet>

      <Hero />
    
      <About />
      <Projectpage />

      <Servicespage />
      <StatsSection />
      <ClientLogoSlider />

      {/* <Contact/> */}
    </>
  );
};

export default Home;
