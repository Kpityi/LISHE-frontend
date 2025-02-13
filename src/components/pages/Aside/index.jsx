import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './index.scss';
import axios from 'axios';
import { API_BASE_URL, API_URL } from '../../../common/constants/environment';

const Aside = () => {
  const [links, setLinks] = useState();

  useEffect(() => {
    const fetchAsideLinks = async () => {
      try {
        const response = await axios.get(`${API_URL}/asideLinks`);
        if (response) {
          setLinks(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAsideLinks();
  }, []);
  return (
    <div className="aside">
      <h5 className="aside__title">Hasznos oldalak</h5>
      <div className="aside__links">
        {links
          ? links.map((link) => {
              return (
                <div className="aside__link" key={link.id}>
                  <Link to={link.url} target="_blank">
                    <img
                      src={`${API_BASE_URL}/${link.image_name}`}
                      alt={`${link.name} logo`}
                      title={link.name}
                      className="aside__image"
                    />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Aside;
