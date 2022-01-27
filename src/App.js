import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="text-white bg-black-500 body-font">
      <Navbar />
      <Body />
      <Footer />
      
    </main>
  );
}

export default App;
