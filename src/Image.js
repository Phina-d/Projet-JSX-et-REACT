// src/Image.js
import React from 'react';

function Image({ image, name }) {
  return (
    <img
      src={image}
      alt={name}
      style={{ width: '300px', height: 'auto', objectFit: 'contain' }}
    />
  );
}

export default Image;
