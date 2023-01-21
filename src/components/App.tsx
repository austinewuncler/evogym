import React from 'react';

import { BenefitsSection } from '~/sections/benefits';
import { ContactUsSection } from '~/sections/contact-us';
import { HeroSection } from '~/sections/hero';
import { OurClassesSection } from '~/sections/our-classes';

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
