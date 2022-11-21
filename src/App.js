import React from "react";
import "./App.css";
import { ScrollToTop } from "./components/scroll/scroll";
import {
  Blog,
  Footer,
  Header,
  Possibilities,
  WhatGPT3,
  Features,
  CADService,
} from "./containers/index";
import { CTA, Brand, Navbar } from "./components/index";
const App = () => {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <CADService />
        <Possibilities />
        <CTA />
        <Blog />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default App;
