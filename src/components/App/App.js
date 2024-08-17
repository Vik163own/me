import React from "react";

import "./app.scss";

import Header from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";
import Main from "../Main/Main.js";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
