import React from "react";
import "./App.css";
import Broadroutes from "./Routes/Broadroutes";
import Header from "./Component/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Broadroutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
