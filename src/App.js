import React from 'react';
import './assets/css/main.css';

// top
import Header from './components/top-page/Header';
import Banner from './components/top-page/Banner';

// middle
import Important from './components/middle-sections/Important';
import Information from './components/middle-sections/Information';
import Heading from './components/middle-sections/Heading';

//bottom
import Footer from './components/bottom-sections/Footer';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Section including important information about company */}
      <Important />

      <Heading />

      {/* Section including some basic informations about company */}
      <Information />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
