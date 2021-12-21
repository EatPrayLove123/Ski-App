import React from 'react';
import '../App.css'
import SkiSlopeList from '../components/SkiSlopeList';
import Slider from '../components/Slider';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Slider />
      <SkiSlopeList />
      <Footer />
    </>
  );
}

export default Home;
