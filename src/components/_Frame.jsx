import React from 'react';

const Frame = () => (
  <svg width="816" height="1056">
    <rect width="816" height="1056" fill="white" />
    <polygon points="500,0 0,0 0,100" className="border" />
    <polygon points="300,0 816,100, 816,0" fill="dimgray" />
    <polygon points="816,1056 816,956 306,1056" className="border" />
    <polygon points="516,1056 0,956 0,1056" fill="dimgray" />
  </svg>
);

export default Frame;
