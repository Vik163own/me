import React from 'react';

import './app.css';

import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Main from '../main/main.js';

function App() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
