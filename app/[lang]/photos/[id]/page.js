import PhotoDetails from '@/components/PhotoDetails';

const PhotosDetailsPage = ({ params: { id, lang } }) => {
  return (
    <div>
      <PhotoDetails
        id={id}
        lang={lang}
      />
    </div>
  );
};

export default PhotosDetailsPage;
