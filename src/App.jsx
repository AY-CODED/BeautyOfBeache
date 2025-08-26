import React from "react";
import Navbar from "./components/Navbar";
import Ticker from "./pages/Ticker";
import Home from "./pages/Home";
import Zones from "./pages/Zones";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Zones />
      <Gallery />
      <About />
      <Contact />
      <Feedback />
      <Footer/>
      <Ticker />
    </>
  );
}

export default App;
