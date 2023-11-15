import React from 'react';
import { SVGProps } from '../../types/svg.types';

export const All = ({ className }: SVGProps): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path className={className} d="M22.2866 8.10875C21.1819 7.00376 19.7131 6.39539 18.1509 6.39539C16.5884 6.39539 15.1196 7.00376 14.0149 8.10875L12.9982 9.12536L15.1194 11.2465L16.136 10.2298C17.2478 9.11901 19.0546 9.11948 20.1655 10.2298C21.2763 11.3409 21.2763 13.1485 20.1655 14.2596C19.0547 15.3704 17.2478 15.371 16.136 14.2596L16.1125 14.2362L9.98513 8.10875C8.88038 7.00376 7.41162 6.39539 5.84913 6.39539C4.28687 6.39539 2.81812 7.00376 1.71336 8.10875C0.608377 9.2135 0 10.6823 0 12.2448C0 13.8072 0.608377 15.276 1.71336 16.3808C2.81812 17.4857 4.28687 18.0941 5.84913 18.0941C7.41162 18.0941 8.88038 17.4857 9.98513 16.3808L11.0018 15.3641L8.88061 13.243L7.86405 14.2597C6.75271 15.371 4.94584 15.3705 3.83449 14.2597C2.72367 13.1486 2.72367 11.341 3.83449 10.2299C4.39016 9.67444 5.11967 9.39689 5.84936 9.39689C6.57887 9.39689 7.30833 9.67449 7.864 10.2299L14.0149 16.3808C15.1196 17.4857 16.5884 18.0941 18.1509 18.0941C19.7131 18.0941 21.1819 17.4857 22.2866 16.3808C23.3916 15.276 24 13.8072 24 12.2448C24 10.6823 23.3916 9.2135 22.2866 8.10875Z" fill="#C5CBD1"/>
    </svg>
  );
};