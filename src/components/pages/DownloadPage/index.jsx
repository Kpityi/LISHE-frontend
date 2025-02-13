import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_BASE_URL, API_URL } from '../../../common/constants/environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import SiteHelmet from '../../common/helmet';

const DownloadsPage = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchDownloadsLinks = async () => {
      try {
        const result = await axios.get(`${API_URL}/links/download`);
        setLinks(result.data);
        console.log(result.data);
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchDownloadsLinks();
  }, []);

  return (
    <div className="download-page">
      <SiteHelmet
        title="Letöltések - LISHE"
        description="Töltsd le a László István Honvéd Sporthorgász Egyesület dokumentumait és anyagait."
      />
      {links &&
        links.map((link) => {
          return (
            <Link
              className="download-page__link"
              to={`${API_BASE_URL}/doc/${link.file_name}`}
              target="blank"
              key={link.id}
            >
              <div className="download-page__row">
                <FontAwesomeIcon icon={faDownload} />
                <p className="download-page__text-title">{link.title} - </p>
                <p className="download-page__text">{link.description}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default DownloadsPage;
