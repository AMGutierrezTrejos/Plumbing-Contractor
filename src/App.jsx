import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AboutUs from "./components/Banner/AboutUs";
import Footer from "./components/Footer/Footer";
import PrincipalBg from '/PrincipalBg.png'

const App = () => {
  return (
    <main className="bg-cover bg-center relative overflow-x-hidden bg-white text-dark" style={{ backgroundImage: `url(${PrincipalBg})` }}>
      <Hero />
      <Services />
      <Banner />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default App;
