import s from './Styles.module.css';

const ImageGalleryItem = ({ data, openModal }) => {
  console.log(data);
  return data.map(({ webformatURL, largeImageURL }, index) => {
    return (
      <li key={index} className={s.imageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={s.imageGalleryItemImage}
          onClick={() => openModal(largeImageURL)}
        />
      </li>
    );
  });
};
export default ImageGalleryItem;
