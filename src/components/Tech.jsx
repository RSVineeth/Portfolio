import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-50 flex-col items-center' key={technology.name}>
          {!isMobileDevice ? (
            <div>
              <BallCanvas icon={technology.icon} name={technology.name} />
              <p className='text-center text-white mt-2'>{technology.name}</p>
            </div>
          ) : (
            <p className='text-center text-white mt-2'>{technology.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
