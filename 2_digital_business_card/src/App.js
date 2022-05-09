import React from "react";
import "./styles/App.css";

import Header from "./conponents/Header";
import MainContent from "./conponents/MainContent";
import Footer from "./conponents/Footer";

function App() {
  return (
    <div id="card" >
      <Header />
      <MainContent />
      <Footer />
    </div >
  );
}

export default App;