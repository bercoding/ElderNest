import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Programs } from '../components/home/Programs';
import { Testimonials } from '../components/home/Testimonials';
import { CTA } from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;