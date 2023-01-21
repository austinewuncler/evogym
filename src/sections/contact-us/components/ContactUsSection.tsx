import { motion } from 'framer-motion';
import React from 'react';

import { HText } from '~/components';
import { usePage } from '~/hooks';
import { PageSection } from '~/types';

import { contactUsSectionImage } from '../assets';
import ContactUsForm from './ContactUsForm';

const ContactUsSection = (): JSX.Element => {
  const { setActiveSection } = usePage();

  return (
    <section id={PageSection.ContactUs} className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => {
          setActiveSection(PageSection.ContactUs);
        }}
      >
        <motion.div
          className="lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 lg:flex">
          <motion.div
            className="mt-10 basis-3/5 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ContactUsForm />
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] lg:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-section"
                src={contactUsSectionImage}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUsSection;
