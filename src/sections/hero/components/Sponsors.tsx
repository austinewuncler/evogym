import React from 'react';

import { sponsorForbes, sponsorFortune, sponsorRedbull } from '../assets';

const Sponsors = (): JSX.Element => {
  return (
    <div className="h-[150px] w-full bg-primary-100 py-10">
      <div className="mx-auto w-5/6">
        <div className="flex w-3/5 items-center justify-between gap-8">
          <img alt="redbull-sponsor" src={sponsorRedbull} />
          <img alt="forbes-sponsor" src={sponsorForbes} />
          <img alt="fortune-sponsor" src={sponsorFortune} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
