const Image = ({ image }) => {
  return (
    <div>
      <img
        alt={image.alt_description}
        src={image.urls.small}
        style={{ width: '200px' }}
      />
    </div>
  );
};

export default Image;
