import PhotoCart from './PhotoCart';

const PhotoList = ({ photos }) => {
  return (
    <div className='img-grid'>
      {photos.map((photo) => (
        <PhotoCart
          key={photo.id}
          photo={photo}
        />
      ))}
    </div>
  );
};

export default PhotoList;
