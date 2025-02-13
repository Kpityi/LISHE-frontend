import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_BASE_URL, API_URL } from '../../common/constants/environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { faDownload, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

const MartelyPriceTable = ({ setYear, file }) => {
  const [prices, setPrices] = useState();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const titles = [
    { name: 'Éves Engedélyek', ticket_type: 'individual_annual' },
    { name: '24 / 72 órás Jegyek', ticket_type: 'temporary' },
    { name: 'Kiegészítő jegyek', ticket_type: 'additional' },
  ];

  useEffect(() => {
    const fetchMartelyPrice = async () => {
      try {
        const result = await axios.get(`${API_URL}/prices/Martely`);
        setYear(result.data[0].year);
        setCurrentYear(result.data[0].year);
        setPrices(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMartelyPrice();
  }, []);

  return (
    <div className="Martely-prices">
      {prices ? (
        <table className="Martely-prices__table">
          <thead className="Martely-prices__thead ">
            <tr className="Martely-prices__tr bg-black">
              <th className="Martely-prices__th" colSpan={3}>
                Mártély Holt - Tisza Területi Engedélyek {currentYear}. évre
              </th>
            </tr>
          </thead>
          <tbody className="Martely-prices-tbody">
            <tr className="Martely-prices__tr bg-black">
              <th className="Martely-prices__th">Megnevezés</th>
              <th className="Martely-prices__th">Jegykód</th>
              <th className="Martely-prices__th">Jegy ár</th>
            </tr>
            {titles.map((title, index) => {
              return (
                <React.Fragment key={index}>
                  <tr className="Martely-prices__tr bg-black">
                    <td className="Martely-prices__td " colSpan={3}>
                      {title.name}
                    </td>
                  </tr>
                  {prices &&
                    prices.map((price) => {
                      return price.ticket_type === title.ticket_type ? (
                        <tr className="Martely-prices__tr" key={price.id}>
                          <td className="Martely-prices__td">{price.name}</td>
                          <td className="Martely-prices__td">{price.code}</td>
                          <td className="Martely-prices__td">{price.price} Ft</td>
                        </tr>
                      ) : null;
                    })}
                </React.Fragment>
              );
            })}
          </tbody>
          <tfoot className="Martely-prices__tfoot">
            <tr>
              <td colSpan={3}>
                <ul className="Martely-prices__ul">
                  <li className="Martely-prices__info">
                    <span className="Martely-prices__info-icon">
                      <FontAwesomeIcon icon={faStarOfLife} className="Martely-prices__icon" />
                    </span>
                    Az éves területi jegy a Természetvédelmi Hozzájárulást (1000 Ft) tartalmazza
                  </li>
                  <li className="Martely-prices__info">
                    <span className="Martely-prices__info-icon">
                      <FontAwesomeIcon icon={faStarOfLife} className="Martely-prices__icon" />
                      <FontAwesomeIcon icon={faStarOfLife} className="Martely-prices__icon" />
                    </span>
                    Az Éves területi jeggyel - a helyi horgászrendben a személyi jogosultságok szerint meghatározott -
                    kifogott halmennyiség után (pl. felnőttek esetében 30 darab ponty) ugyanazon darabszám-korl. védett
                    halfaj (pl. további 30 darab ponty) kifogásához Éves Többlethal elvitel kiegészítő jegy váltható
                    (Felnőtt: 46.000 Ft, Ifjúsági: 18.000 Ft, Gyermek: 6.500 Ft)
                  </li>
                  <li className="Martely-prices__info">
                    <span className="Martely-prices__info-icon">
                      <FontAwesomeIcon icon={faStarOfLife} className="Martely-prices__icon" />
                      <FontAwesomeIcon icon={faStarOfLife} className="Martely-prices__icon" />
                      <FontAwesomeIcon icon={faStarOfLife} className="Martely-prices__icon" />
                    </span>
                    A Felnőtt Parti területi jegy birtokosa Csónakos kiegészítő jeggyel (Éves vagy 24 órás) csónakos
                    horgászatra jogosult.
                  </li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p>Árak nem találhatók</p>
      )}
      <div className="Martely-prices__download-container">
        <Link
          to={`${API_BASE_URL}/doc/${file}_${currentYear}.pdf`}
          className="Martely-prices__download"
          target="_blank"
        >
          PDF file letöltése <FontAwesomeIcon icon={faDownload} className="Martely-prices__icon" />
        </Link>
      </div>
    </div>
  );
};

export default MartelyPriceTable;
