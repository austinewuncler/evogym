import React from 'react';

import { heroSectionImage } from '../assets';

const HeroSectionImage = (): JSX.Element => {
  return (
    <div className="flex basis-3/5 justify-center lg:z-10 lg:ml-40 lg:mt-16 lg:justify-items-end">
      <img alt="hero-section" src={heroSectionImage} />
    </div>
  );
};

export default HeroSectionImage;
