import React from "react";

import "./app.scss";

import Header from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";
import Main from "../Main/Main.jsx";

function App() {
  return (
    <div>
      <div class="root"></div>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
