import React from 'react';

import { BenefitsSection } from '~/sections/benefits';
import { HeroSection } from '~/sections/hero';

import ContactUs from './ContactUs';
import Footer from './Footer';
import Header from './Header';
import OurClasses from './OurClasses';

const App = (): JSX.Element => {
  return (
    <div className="app bg-gray-20">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <OurClasses />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
