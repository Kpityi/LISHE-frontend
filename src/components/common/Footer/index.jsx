import { faClock, faEnvelope, faMapLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Link } from 'react-router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { PATHS } from '../../../common/paths';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__content-box">
          <p className="footer__title">INFORMÁCIÓK</p>
          <NavLink to="/" className="footer__link">
            Töltésközlekedés
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Hasznos linkeke
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Letöltések
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Pályázatok
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Alapszabályunk
          </NavLink>
          <hr className="footer__hr" />
        </div>
        <div className="footer__content-box">
          <p className="footer__title">AKTUÁLIS</p>
          <NavLink to="/" className="footer__link">
            Hírek
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Események
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Képgaléria
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Vezetőség
          </NavLink>
          <hr className="footer__hr" />
          <NavLink to="/" className="footer__link">
            Történetünk
          </NavLink>
          <hr className="footer__hr" />
        </div>
        <div className="footer__content-box">
          <p className="footer__title">ELÉRHETŐSÉGEINK</p>
          <p className="footer__text">László István Honvéd Sporthorgász Egyesület</p>
          <p className="footer__text">
            <FontAwesomeIcon icon={faMapLocationDot} className="footer__icon" />
            Cím: 6800 Hódmezővásárhely, Szántó Kovács Jánus u. 87.
          </p>
          <p className="footer__text">
            <FontAwesomeIcon icon={faMobileScreen} className="footer__icon" />
            <Link to="tel:+36304362767" className="footer__text">
              Telefon: +36304362767
            </Link>
          </p>
          <p className="footer__text">
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            <Link to="mailto:elnok@lishe.hu" className="footer__text">
              Email: elnok@lishe.hu
            </Link>
          </p>
          <p className="footer__text">
            <FontAwesomeIcon icon={faClock} className="footer__icon" />
            Nyitvatartás: Kedd - Péntek: 13:00 - 17:00
          </p>
          <p className="footer__text">
            <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
            <Link to="https://www.facebook.com/groups/1112347635453149" className="footer__text">
              Facebook
            </Link>
          </p>
        </div>
      </div>
      <div className="footer__row">
        <div className="footer__content-box flex-2">
          <p className="footer__text">
            Copyright &copy; 2025. László István Honvéd Sporthorgász Egyesület. Minden Jog Fenntartva.
          </p>
        </div>
        <div className="footer__content-box text-left">
          <NavLink to={`${PATHS.informations.privacy_policy}`} className="footer__link-bottom">
            Adatkezelés
          </NavLink>
          <NavLink to={`${PATHS.informations.cookies}`} className="footer__link-bottom">
            Süti szabályzat
          </NavLink>
          <NavLink to={`${PATHS.informations.impressum}`} className="footer__link-bottom">
            Impresszum
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
