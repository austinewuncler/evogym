import { createContext } from 'react';

import { type IPageContext, PageSection } from '~/types';

const PageContext = createContext<IPageContext>({
  activeSection: PageSection.Hero,
  setActiveSection: () => {},
  isTopOfPage: true,
});

export default PageContext;
