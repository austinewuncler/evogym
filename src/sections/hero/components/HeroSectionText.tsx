import { motion } from 'framer-motion';
import React from 'react';

import { heroSectionText } from '../assets';

const HeroSectionText = (): JSX.Element => {
  return (
    <motion.div
      className="lg:-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="relative before:absolute before:-top-20 before:-left-20 before:z-[-1] lg:before:content-evolvetext">
        <img alt="home-page-text" src={heroSectionText} />
      </div>

      <p className="mt-8 text-sm">
        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
        Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
        Now.
      </p>
    </motion.div>
  );
};

export default HeroSectionText;
