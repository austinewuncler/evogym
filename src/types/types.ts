import { Dispatch, SetStateAction } from 'react';

export enum PageSection {
  Hero = 'hero',
  Benefits = 'benefits',
  OurClasses = 'our-classes',
  ContactUs = 'contact-us',
}

export interface IPageContext {
  activeSection: PageSection;
  setActiveSection: Dispatch<SetStateAction<PageSection>>;
  isTopOfPage: boolean;
}
