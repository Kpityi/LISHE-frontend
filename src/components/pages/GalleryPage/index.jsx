import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../../common/constants/environment';
import AlbumCard from '../../AlbumCard';
import SiteHelmet from '../../common/helmet';

const GalleryPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get(`${API_URL}/gallery`);
        if (response.status >= 200 && response.status < 300) {
          setAlbums(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchGallery();
  }, []);

  return (
    <div className="gallery-page">
      <SiteHelmet
        title="Galéria - LISHE"
        description="László István Honvéd Sporthorgász Egyesület képgaléria, fotóalbum"
      />
      {albums &&
        albums.map((album, index) => {
          return (
            <React.Fragment key={index}>
              <AlbumCard title={album.albumName} images={album.images} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default GalleryPage;
