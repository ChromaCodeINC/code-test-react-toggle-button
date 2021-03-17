import React from 'react';

export const Loader = () => {
  return (
    <svg className="chromaloader" version="1.1"
      x="0px"
      y="0px"
      width="24px"
      height="30px"
      viewBox="0 0 24 30">
      <rect className="bar" x="0" y="0" width="4" height="20" fill="#85b040" />
      <rect className="bar" x="7" y="0" width="4" height="20" fill="#96bc3e" />
      <rect className="bar" x="14" y="0" width="4" height="20" fill="#ecde34" />
      <rect className="bar" x="21" y="0" width="4" height="20" fill="#e69928" />
    </svg>
  );
};
