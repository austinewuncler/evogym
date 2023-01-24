import React, { type PropsWithChildren } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { usePage } from '~/hooks';
import { PageSection } from '~/types';

interface Props extends PropsWithChildren {}

const ActionButton = ({ children }: Props): JSX.Element => {
  const { setActiveSection } = usePage();

  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => {
        setActiveSection(PageSection.ContactUs);
      }}
      href={`#${PageSection.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
