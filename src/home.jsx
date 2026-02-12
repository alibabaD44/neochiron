import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Main/home";
import Footer from "./Footer/footer";
import Faq from "./faq/faq.jsx";
import Google from './googleMaps/map';

function Home2() {
  return (
    <>
      <Navbar />
      <Home />
      <Faq />
      <Google/>
      <Footer />
    </>
  );
}

export default Home2;
