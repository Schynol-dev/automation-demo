import React from 'react';
import './App.css';

import Header from './components/top-page/Header';
import Banner from './components/top-page/Banner';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Section including important information about company */}
      <section id="important"></section>

      {/* Section including some basic informations about company */}
      <section id="information"></section>

      {/* Contact */}
      <section id="information"></section>

    </div>
  );
}

export default App;
