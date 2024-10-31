import React from 'react';
import Header from './components/Header';
import Downloader from './components/Downloader';
import Features from './components/Features';
import HowTo from './components/HowTo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Downloader />
        <Features />
        <HowTo />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;