import { motion } from 'framer-motion';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ActionButton } from '~/components';
import { useMediaQuery, usePage } from '~/hooks';
import { PageSection } from '~/types';

import HeroSectionImage from './HeroSectionImage';
import HeroSectionText from './HeroSectionText';
import Sponsors from './Sponsors';

const HeroSection = (): JSX.Element => {
  const isAboveLargeScreens = useMediaQuery('(min-width:1024px)');
  const { setActiveSection } = usePage();

  return (
    <section
      id={PageSection.Hero}
      className="gap-16 bg-gray-20 py-10 lg:h-full lg:pb-0"
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center lg:flex lg:h-5/6"
        onViewportEnter={() => {
          setActiveSection(PageSection.Hero);
        }}
      >
        <div className="z-10 mt-32 lg:basis-3/5">
          <HeroSectionText />
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => {
                setActiveSection(PageSection.ContactUs);
              }}
              href={`#${PageSection.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <HeroSectionImage />
      </motion.div>
      {isAboveLargeScreens && <Sponsors />}
    </section>
  );
};

export default HeroSection;
