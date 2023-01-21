import { motion } from 'framer-motion';
import React from 'react';

import { ActionButton, HText } from '~/components';
import { usePage } from '~/hooks';
import { PageSection } from '~/types';

import { BenefitsSectionImage } from '../assets';
import Benefits from './Benefits';
import BenefitsSectionText from './BenefitsSectionText';

const BenefitsSection = (): JSX.Element => {
  const { setActiveSection } = usePage();

  return (
    <section
      id={PageSection.Benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => {
          setActiveSection(PageSection.Benefits);
        }}
      >
        <motion.div
          className="lg:my-5 lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <Benefits />
        <div className="mt-16 items-center justify-between gap-20 lg:mt-28 lg:flex">
          <img
            className="mx-auto"
            alt="benefits-section"
            src={BenefitsSectionImage}
          />
          <div>
            <div className="relative before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{' '}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
            <BenefitsSectionText />
            <div className="relative mt-16 before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton>Join Now</ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
