
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Listings from './components/Listings';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Listings />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
