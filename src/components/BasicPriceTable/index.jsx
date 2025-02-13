import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { API_BASE_URL, API_URL } from '../../common/constants/environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const BasicPriceTable = ({ setYear, file }) => {
  const [basicPrices, setBasicPrices] = useState();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchBasicPrice = async () => {
      try {
        const result = await axios.get(`${API_URL}/prices/basic`);
        setYear(result.data[0].year);
        setCurrentYear(result.data[0].year);
        setBasicPrices(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBasicPrice();
  }, []);

  //sum Prices
  const sumPrice = (ticketType, priceType) => {
    let sum = 0;
    basicPrices.forEach((price) => {
      if (ticketType === price.ticket_type && priceType === 'normal') {
        sum += price.normal_price;
      } else if (ticketType === price.ticket_type && priceType === 'increased') {
        if (price.late_submission_price) {
          sum += price.late_submission_price;
        } else {
          sum += price.normal_price;
        }
      }
    });
    return sum;
  };

  return (
    <div className="basic-price">
      {basicPrices ? (
        <table className="basic-prices__table">
          <thead className="basic-prices__thead ">
            <tr className="basic-prices__tr bg-black">
              <th className="basic-prices__th" colSpan={2}></th>
              <th className="basic-prices__th">Normál</th>
              <th className="basic-prices__th">Emelt</th>
            </tr>
          </thead>
          <tbody className="basic-prices-tbody">
            <tr className="basic-prices__tr">
              <th className="basic-prices__th text-left" colSpan={2}>
                Alp Engedély -férfi, nő, ifi
              </th>
              <th className="basic-prices__th">{sumPrice('adult', 'normal')},-</th>
              <th className="basic-prices__th">{sumPrice('adult', 'increased')},-</th>
            </tr>
            {basicPrices &&
              basicPrices.map((price) => {
                return price.ticket_type === 'adult' ? (
                  <tr className="basic-prices__tr" key={price.id}>
                    <td className="basic-prices__td" colSpan={2}>
                      {price.name}
                    </td>
                    {price.late_submission_price ? (
                      <>
                        <td className="basic-prices__td">{price.normal_price}</td>
                        <td className="basic-prices__td">{price.late_submission_price}</td>
                      </>
                    ) : (
                      <td className="basic-prices__td" colSpan={2}>
                        {price.normal_price}
                      </td>
                    )}
                  </tr>
                ) : null;
              })}
            <tr className="basic-prices__tr">
              <th className="basic-prices__th text-left" colSpan={2}>
                Alp Engedély - 70 év felettiek, fogyatékkal élők
              </th>
              <th className="basic-prices__th">{sumPrice('adult', 'normal')}</th>
              <th className="basic-prices__th">{sumPrice('adult', 'increased')}</th>
            </tr>
            {basicPrices &&
              basicPrices.map((price) => {
                return price.ticket_type === 'discount' ? (
                  <tr className="basic-prices__tr" key={price.id}>
                    <td className="basic-prices__td" colSpan={2}>
                      {price.name}
                    </td>
                    {price.late_submission_price ? (
                      <>
                        <td className="basic-prices__td">{price.normal_price}</td>
                        <td className="basic-prices__td">{price.late_submission_price}</td>
                      </>
                    ) : (
                      <td className="basic-prices__td" colSpan={2}>
                        {price.normal_price}
                      </td>
                    )}
                  </tr>
                ) : null;
              })}
            <tr className="basic-prices__tr">
              <th className="basic-prices__th text-left" colSpan={2}>
                Alp Engedély - gyermek
              </th>
              <th className="basic-prices__th" colSpan={2}>
                {sumPrice('kid', 'normal')}
              </th>
            </tr>
            {basicPrices &&
              basicPrices.map((price) => {
                return price.ticket_type === 'kid' ? (
                  <tr className="basic-prices__tr" key={price.id}>
                    <td className="basic-prices__td" colSpan={2}>
                      {price.name}
                    </td>
                    <td className="basic-prices__td" colSpan={2}>
                      {price.normal_price}
                    </td>
                  </tr>
                ) : null;
              })}
            <tr className="basic-prices__tr-space">
              <td className="basic-prices__td" colSpan={2}></td>
              <td className="basic-prices__td" colSpan={2}></td>
            </tr>
            {basicPrices &&
              basicPrices.map((price) => {
                return price.ticket_type === null ? (
                  <tr className="basic-prices__tr" key={price.id}>
                    <td className="basic-prices__td" colSpan={2}>
                      {price.name}
                    </td>
                    <td className="basic-prices__td" colSpan={2}>
                      {price.normal_price}
                    </td>
                  </tr>
                ) : null;
              })}
          </tbody>
          <tfoot className="basic-prices__tfoot"></tfoot>
        </table>
      ) : null}
      <div className="basic-prices__download-container">
        <Link to={`${API_BASE_URL}/doc/${file}_${currentYear}.pdf`} className="basic-prices__download" target="_blank">
          PDF file letöltése <FontAwesomeIcon icon={faDownload} className="basic-prices__icon" />
        </Link>
      </div>
    </div>
  );
};

export default BasicPriceTable;
