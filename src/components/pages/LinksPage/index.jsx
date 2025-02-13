import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../../common/constants/environment';
import LinkCard from '../../LinkCard';
import SiteHelmet from '../../common/helmet';

const LinksPage = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const result = await axios.get(`${API_URL}/links`);
        if (result.status >= 200 && result.status < 300) {
          setLinks(result.data);
          console.log(result.data);
        }
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <div className="links-page">
      <SiteHelmet
        title="Hasznos Linkek - LISHE"
        description="László István Honvéd Sporthorgász Egyesület által ajánlott hasznos linkek."
      />
      {links &&
        links.map((link) => {
          return (
            <LinkCard
              className="links-page__link"
              title={link.title}
              description={link.description}
              url={link.url}
              key={link.id}
            />
          );
        })}
    </div>
  );
};

export default LinksPage;
