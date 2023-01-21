import { motion } from 'framer-motion';
import React from 'react';

import { HText } from '~/components';
import { usePage } from '~/hooks';
import { PageSection } from '~/types';

import ClassesList from './ClassesList';

const OurClassesSection = (): JSX.Element => {
  const { setActiveSection } = usePage();

  return (
    <section
      id={PageSection.OurClasses}
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => {
          setActiveSection(PageSection.OurClasses);
        }}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="lg:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ClassesList />
        </div>
      </motion.div>
    </section>
  );
};

export default OurClassesSection;
