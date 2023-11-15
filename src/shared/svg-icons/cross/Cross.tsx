import React from 'react';
import { SVGProps } from '../../types/svg.types';

export const Cross = ({className}: SVGProps): JSX.Element => {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect id="Rectangle Copy 45" x="12.5752" y="10.9541" width="24" height="3" rx="1.5" transform="rotate(45 12.5752 10.9541)" fill="currentColor"/>
      <rect id="Rectangle Copy 47" width="24" height="3" rx="1.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 27.4248 10.9541)" fill="currentColor"/>
    </svg>
  );
};
