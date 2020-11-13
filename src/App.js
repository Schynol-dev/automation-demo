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
import Contact from './components/bottom-sections/Contact';
import Media from './components/bottom-sections/Media';
import Footer from './components/bottom-sections/Footer';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Section including important information about company */}
      <section id="important">
        <Important />
      </section>

      <Heading />

      {/* Section including some basic informations about company */}
      <section id="information">
        <Information />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
        <Media />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
