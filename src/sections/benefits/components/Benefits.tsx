import { motion } from 'framer-motion';
import React from 'react';

import { benefits } from '../data';
import Benefit from './Benefit';

const Benefits = (): JSX.Element => {
  return (
    <motion.div
      className="mt-5 items-center justify-between gap-8 lg:flex"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {benefits.map(({ description, Icon, title }) => (
        <Benefit
          key={title}
          icon={<Icon />}
          title={title}
          description={description}
        />
      ))}
    </motion.div>
  );
};

export default Benefits;
