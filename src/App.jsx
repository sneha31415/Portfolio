import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <Hero />
        <About />
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>



        {/* about */}
        {/* projects */}
        {/* experience */}
        {/* testimonial */}
        {/* contact */}
        {/* footer */}
    </div>
  )
};

export default App;
