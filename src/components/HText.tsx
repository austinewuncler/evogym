import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const HText = ({ children }: Props): JSX.Element => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};

export default HText;
