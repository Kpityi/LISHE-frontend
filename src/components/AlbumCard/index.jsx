import React from 'react';
import './index.scss';
import { API_BASE_URL } from '../../common/constants/environment';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const AlbumCard = ({ images, title }) => {
  const [open, setOpen] = React.useState(false);
  const imageSlides = [];
  images.forEach((image) => {
    imageSlides.push({ src: `${API_BASE_URL}/media/images/${image}`, title: title });
  });
  console.log(imageSlides);

  return (
    <div
      className="album-card"
      onClick={() => {
        console.log('click', images[0]);
        setOpen(true);
      }}
    >
      <div className="album-card__title">{title}</div>
      <div className="album-card__image-container">
        <img className="album-card__image" src={`${API_BASE_URL}/media/images/${images[0]}`} alt="" />
      </div>
      <p className="album-card__text">A galéria megnyitásához kattintson a képre</p>
      <Lightbox
        plugins={[Counter, Captions, Fullscreen, Zoom, Slideshow, Thumbnails]}
        thumbnails={{
          width: 50,
          height: 40,
          border: 1,
          borderRadius: 5,
          padding: 3,
          gap: 4,
          showToggle: true,
        }}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
        open={open}
        close={() => setOpen(false)}
        slides={imageSlides}
      />
    </div>
  );
};

export default AlbumCard;
