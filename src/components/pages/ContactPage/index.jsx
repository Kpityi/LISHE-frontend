import { faClock, faEnvelope, faMapLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SiteHelmet from '../../common/helmet';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <SiteHelmet
        title="LISHE - Kapcsolat"
        description="László István Honvéd Sporthorgász Egyesület elérhetőségei, nyitvatartás, és kontakt információk."
      />
      <iframe
        className="contact-page__google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.1726143579526!2d20.31700908575841!3d46.42545813020206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47446f6569f2276b%3A0xdc12115b67eb28b3!2zTMOhc3psw7MgSXN0dsOhbiBIb252w6lkIFNwb3J0aG9yZ8Ohc3ogRWd5ZXPDvGxldA!5e0!3m2!1shu!2shu!4v1633437812401!5m2!1shu!2shu"
      ></iframe>
      <div className="contact-page__container">
        <div className="contact-page__contact">
          <p className="contact-page__title">László István Honvéd Sporthorgász Egyesület</p>
          <p className="contact-page__text">
            <strong>Horváth Gusztáv</strong>, elnök: +36-30/436-27-67
          </p>
          <p className="contact-page__text">
            <strong>Papp Róbert</strong>, ügyvezető elnök: +36-30/729-44-99
          </p>
          <p className="contact-page__text">
            <strong>Nagy Erzsébet</strong>, gazdasági vezető: +36-30/636-31-91
          </p>
          <hr className="contact-page__hr" />
          <p className="contact-page__title">Elérhetőségeink,kapcsolat</p>
          <p className="contact-page__text">
            <FontAwesomeIcon className="contact-page__icon" icon={faMapLocationDot} />
            <strong>Cím:</strong>6800 Hódmezővásárhely, Szántó Kovács János u. 87.
          </p>
          <p className="contact-page__text">
            <FontAwesomeIcon className="contact-page__icon" icon={faMobileScreenButton} />
            <strong>Telefon:</strong>, +36-30-436-27-67
          </p>
          <p className="contact-page__text">
            <FontAwesomeIcon className="contact-page__icon" icon={faEnvelope} />
            <strong>Email:</strong>, elnok@lishe.hu
          </p>
          <div className="contact-page__info">
            <p className="contact-page__text">
              Váltható: Állami jegy, területi engedélyek! (Egyéb egyesületi ügyintézés, kártya regisztráció, stb.)
            </p>
            <p className="contact-page__text-bold">Fizetési mód: készpénz!</p>
          </div>
        </div>
        <div className="contact-page__open">
          <p className="contact-page__title">nyitvatartás</p>
          <table className="contact-page__table">
            <tr className="contact-page__tr">
              <td className="contact-page__td">
                <FontAwesomeIcon className="contact-page__icon" icon={faClock} />
              </td>
              <td className="contact-page__td-day">Hétfő</td>
              <td className="contact-page__td">ZÁRVA</td>
            </tr>
            <tr className="contact-page__tr">
              <td className="contact-page__td">
                <FontAwesomeIcon className="contact-page__icon" icon={faClock} />
              </td>
              <td className="contact-page__td-day">Kedd</td>
              <td className="contact-page__td">13:00-17:00</td>
            </tr>
            <tr className="contact-page__tr">
              <td className="contact-page__td">
                <FontAwesomeIcon className="contact-page__icon" icon={faClock} />
              </td>
              <td className="contact-page__td-day">Szerda</td>
              <td className="contact-page__td">13:00-17:00</td>
            </tr>
            <tr className="contact-page__tr">
              <td className="contact-page__td">
                <FontAwesomeIcon className="contact-page__icon" icon={faClock} />
              </td>
              <td className="contact-page__td-day">Csütörtök</td>
              <td className="contact-page__td">13:00-17:00</td>
            </tr>
            <tr className="contact-page__tr">
              <td className="contact-page__td">
                <FontAwesomeIcon className="contact-page__icon" icon={faClock} />
              </td>
              <td className="contact-page__td-day">Péntek</td>
              <td className="contact-page__td">13:00-17:00</td>
            </tr>
            <tr className="contact-page__tr">
              <td className="contact-page__td">
                <FontAwesomeIcon className="contact-page__icon" icon={faClock} />
              </td>
              <td className="contact-page__td-day">Szombat</td>
              <td className="contact-page__td">ZÁRVA</td>
            </tr>
            <tr className="contact-page__tr">
              <td className="contact-page__td">
                <FontAwesomeIcon className="contact-page__icon" icon={faClock} />
              </td>
              <td className="contact-page__td-day">Vasárnap</td>
              <td className="contact-page__td">ZÁRVA</td>
            </tr>
          </table>
          <p className="contact-page__text-center">(+telefonos egyeztetés)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
