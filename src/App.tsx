/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import RoiCalculator from "./components/RoiCalculator";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import ContactConsultation from "./components/ContactConsultation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-gray-950 min-h-screen relative overflow-x-hidden">
      {/* Background continuous mesh glow noise */}
      <div className="absolute top-[8%] right-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[35%] left-[2%] w-[400px] h-[400px] rounded-full bg-emerald-500/2.5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[65%] right-[3%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none"></div>

      <Header />
      <main className="relative z-10 animate-fade-in">
        <Hero />
        <Services />
        <WhyUs />
        <RoiCalculator />
        <Portfolio />
        <Products />
        <Testimonials />
        <ContactConsultation />
      </main>
      <Footer />
    </div>
  );
}
