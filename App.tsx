import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tariffs from './components/Tariffs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Tariffs />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;