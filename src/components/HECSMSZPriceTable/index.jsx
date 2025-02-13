import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_BASE_URL, API_URL } from '../../common/constants/environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const HECSMSZPriceTable = ({ setYear, file }) => {
  const [prices, setPrices] = useState();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const titles = [
    { name: 'Egyesített vizekre érvényes éves területi jegyek', ticket_type: 'unified_annual' },
    { name: 'Önálló vízre érvényes éves területi jegyek', ticket_type: 'individual_annual' },
    { name: 'Időszakos területi jegyek', ticket_type: 'temporary' },
    { name: 'Kiegészítő jegyek', ticket_type: 'additional' },
  ];

  useEffect(() => {
    const fetchHECSMSZPrice = async () => {
      try {
        const result = await axios.get(`${API_URL}/prices/HECSMSZ`);
        setYear(result.data[0].year);
        setCurrentYear(result.data[0].year);
        setPrices(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHECSMSZPrice();
  }, []);

  return (
    <div className="HECSMSZ-prices">
      {prices ? (
        titles.map((title, index) => {
          {
            console.log('name: ', title.name);
            console.log('type: ', title.ticket_type);
            console.log('index: ', index);
          }
          return (
            <table className="HECSMSZ-prices__table" key={index}>
              <thead className="HECSMSZ-prices__thead ">
                <tr className="HECSMSZ-prices__tr bg-black">
                  <th className="HECSMSZ-prices__th" colSpan={4}>
                    {title.name}
                  </th>
                </tr>
                <tr className="HECSMSZ-prices__tr bg-black">
                  <th className="HECSMSZ-prices__th">Tipus</th>
                  <th className="HECSMSZ-prices__th">Megnevezés</th>
                  <th className="HECSMSZ-prices__th">Érvényes</th>
                  <th className="HECSMSZ-prices__th">Ár</th>
                </tr>
              </thead>
              <tbody className="HECSMSZ-prices-tbody">
                {prices &&
                  prices.map((price) => {
                    return price.ticket_type === title.ticket_type ? (
                      <tr className="HECSMSZ-prices__tr" key={price.id}>
                        <td className="HECSMSZ-prices__td">{price.type}</td>
                        <td className="HECSMSZ-prices__td">{price.name}</td>
                        <td className="HECSMSZ-prices__td">{price.area}</td>
                        <td className="HECSMSZ-prices__td">{price.price} Ft</td>
                      </tr>
                    ) : null;
                  })}
              </tbody>
              <tfoot className="HECSMSZ-prices__tfoot"></tfoot>
            </table>
          );
        })
      ) : (
        <p>Árak nem találhatók</p>
      )}
      <div className="HECSMSZ-prices__info">
        Figyelem a {currentYear}. évre szóló HECSMSZ vizekre vonatkozó horgászrendi szabályokat a HECSMSZ Egységes
        Horgászrendje tartalmazza, az EHR-t a horgászat megkezdése előtt kötelező megismerni, ajánlott figyelmesen
        elolvasni, valamint értelmezni és a szabályok betartása a horgászat alatt kötelező.
      </div>
      <div className="HECSMSZ-prices__download-container">
        <Link
          to={`${API_BASE_URL}/doc/${file}_${currentYear}.pdf`}
          className="HECSMSZ-prices__download"
          target="_blank"
        >
          PDF file letöltése <FontAwesomeIcon icon={faDownload} className="HECSMSZ-prices__icon" />
        </Link>
      </div>
    </div>
  );
};

export default HECSMSZPriceTable;
