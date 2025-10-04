import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <TestimonialCarousel />
      <FAQ />
    </div>
  );
};

export default Home;
