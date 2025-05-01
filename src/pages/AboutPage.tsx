import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { Story } from '../components/about/Story';
import { Brochure } from '../components/about/Brochure';
import { Philosophy } from '../components/about/Philosophy';
import { CTA } from '../components/home/CTA';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <Brochure />
      <Philosophy />

      <CTA />
    </>
  );
};

export default AboutPage;