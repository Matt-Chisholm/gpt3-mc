import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Header,
  Features,
  Possibility,
  GPT3,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
