import React from 'react';

const Image = ({ image }) => {
  return (
    <div>
      <img
        alt={image.description}
        src={image.links.download}
        style={{ width: '200px' }}
      />
    </div>
  );
};

export default Image;
