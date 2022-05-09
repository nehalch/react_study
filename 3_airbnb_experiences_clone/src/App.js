import React from "react";
import "./styles/App.css";

import Header from "./conmponents/Header";
import MainContent from "./conmponents/MainContent";
import Footer from "./conmponents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
