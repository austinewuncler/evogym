import React, {
  type PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { PageContext } from '~/contexts';
import { type IPageContext, PageSection } from '~/types';

interface Props extends PropsWithChildren {}

const PageProvider = ({ children }: Props): JSX.Element => {
  const [activeSection, setActiveSection] = useState(PageSection.Hero);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setActiveSection(PageSection.Hero);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveSection]);

  const context = useMemo<IPageContext>(
    () => ({ activeSection, setActiveSection, isTopOfPage }),
    [activeSection, isTopOfPage]
  );

  return (
    <PageContext.Provider value={context}>{children}</PageContext.Provider>
  );
};

export default PageProvider;
