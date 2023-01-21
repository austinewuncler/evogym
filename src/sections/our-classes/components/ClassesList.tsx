import React from 'react';

import { classes } from '../data';
import Class from './Class';

const ClassesList = (): JSX.Element => {
  return (
    <ul className="w-[2800px] whitespace-nowrap">
      {classes.map(({ image, name, description }, index) => (
        <Class
          key={`${name}-${index}`}
          name={name}
          description={description}
          image={image}
        />
      ))}
    </ul>
  );
};

export default ClassesList;
