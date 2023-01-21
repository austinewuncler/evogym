import React, { useState } from 'react';

import { logo } from '~/assets';
import { useMediaQuery, usePage } from '~/hooks';
import { PageSection } from '~/types';

import ActionButton from './ActionButton';
import { Bars3Icon, XMarkIcon } from './icons';
import Link from './Link';

const Header = (): JSX.Element => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveLargeScreens = useMediaQuery('(min-width: 1024px)');
  const { isTopOfPage } = usePage();

  return (
    <header>
      <div
        className={`fixed top-0 z-30 flex w-full items-center justify-between py-6 ${
          isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
        }`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            <img alt="logo" src={logo} />
            {isAboveLargeScreens ? (
              <div className="flex w-full items-center justify-between">
                <nav className="flex items-center justify-between gap-8 text-sm">
                  <Link section={PageSection.Hero}>Home</Link>
                  <Link section={PageSection.Benefits}>Benefits</Link>
                  <Link section={PageSection.OurClasses}>Our Classes</Link>
                  <Link section={PageSection.ContactUs}>Contact Us</Link>
                </nav>
                <div className="flex items-center justify-between gap-8">
                  <p>Sign In</p>
                  <ActionButton>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 text-white"
                onClick={() => {
                  setIsMenuToggled(true);
                }}
              >
                <Bars3Icon />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveLargeScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuToggled(false);
              }}
              className="text-gray-400"
            >
              <XMarkIcon />
            </button>
          </div>
          <nav className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link section={PageSection.Hero}>Home</Link>
            <Link section={PageSection.Benefits}>Benefits</Link>
            <Link section={PageSection.OurClasses}>Our Classes</Link>
            <Link section={PageSection.ContactUs}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
