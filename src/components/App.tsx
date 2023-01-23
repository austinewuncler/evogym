import React from 'react';

import {
  BenefitsSection,
  ContactUsSection,
  HeroSection,
  OurClassesSection,
} from '~/sections';

import Footer from './Footer';
import Header from './Header';

const App = (): JSX.Element => {
  return (
    <div className="app bg-gray-20">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <OurClassesSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default App;
