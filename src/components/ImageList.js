import './ImageList.css';
import Image from './Image';

const ImageList = ({ images }) => {
  console.log(images);
  const renderedImages = images.map((image) => {
    return <Image key={image.id} image={image} />;
  });

  return <div className="imageList">{renderedImages}</div>;
};

export default ImageList;
