import React from 'react';
import Image from './Image';

const ImageList = ({ images }) => {
  console.log(images);
  const renderedImages = images.map((image, index) => {
    return <Image image={image} key={index} />;
  });

  return <div>{renderedImages}</div>;
};

export default ImageList;
