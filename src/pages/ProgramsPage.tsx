import React from 'react';
import { ProgramsHero } from '../components/programs/ProgramsHero';
import { ProgramList } from '../components/programs/ProgramList';
import { FAQs } from '../components/programs/FAQs';
import { CTA } from '../components/home/CTA';

const ProgramsPage: React.FC = () => {
  return (
    <>
      <ProgramsHero />
      <ProgramList />
      <FAQs />
      <CTA />
    </>
  );
};

export default ProgramsPage;