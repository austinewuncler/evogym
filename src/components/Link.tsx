import React, { type PropsWithChildren } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { usePage } from '~/hooks';
import { type PageSection } from '~/types';

interface Props extends PropsWithChildren {
  section: PageSection;
}

const Link = ({ children, section }: Props): JSX.Element => {
  const { activeSection, setActiveSection } = usePage();

  return (
    <AnchorLink
      className={`transition hover:text-primary-300 ${
        section === activeSection ? 'font-bold text-primary-500' : ''
      }`}
      href={`#${section}`}
      onClick={() => {
        setActiveSection(section);
      }}
    >
      {children}
    </AnchorLink>
  );
};

export default Link;
