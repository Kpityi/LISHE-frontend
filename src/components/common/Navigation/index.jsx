import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faNewspaper,
  faTags,
  faCircleInfo,
  faImages,
  faUser,
  faAddressBook,
  faBars,
  faCaretDown,
  faFishFins,
  faQuestion,
  faCarSide,
  faLink,
  faDownload,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import './index.scss';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const createClassname = ({ isActive }) => classNames('navigation__nav-link', isActive && '-active');

  return (
    <nav className="navigation">
      <div
        className="navigation__toggle"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <FontAwesomeIcon icon={faBars} className="navigation__toggle-icon" />
      </div>
      <ul className={classNames('navigation__links', showMenu && '-show')}>
        <li
          className="navigation__link"
          onClick={() => {
            setShowMenu(!showMenu);
            setShowSubMenu(false);
          }}
        >
          <NavLink to="/" className={createClassname}>
            <FontAwesomeIcon icon={faHouse} className="navigation__icon" />
            FŐOLDAL
          </NavLink>
        </li>
        <li
          className="navigation__link"
          onClick={() => {
            setShowMenu(false);
            setShowSubMenu(false);
          }}
        >
          <NavLink to="/news" className={createClassname}>
            <FontAwesomeIcon icon={faNewspaper} className="navigation__icon" />
            HíREK/ESEMÉNYEK
          </NavLink>
        </li>
        <li
          className="navigation__link"
          onClick={() => {
            setShowMenu(false);
            setShowSubMenu(false);
          }}
        >
          <NavLink to="/prices" className={createClassname}>
            <FontAwesomeIcon icon={faTags} className="navigation__icon" />
            ÁRAINK
          </NavLink>
        </li>
        <li
          className="navigation__link -sublink"
          onClick={() => {
            setShowSubMenu(!showSubMenu);
          }}
        >
          <NavLink className="navigation__nav-link">
            <FontAwesomeIcon icon={faCircleInfo} className="navigation__icon" />
            INFORMÁCIÓK
            <FontAwesomeIcon
              icon={faCaretDown}
              className={classNames('navigation__submenu-icon', showSubMenu && '-rotate')}
            />
          </NavLink>
          <ul className={classNames('navigation__links -submenu', showSubMenu && '-show-submenu')}>
            <li
              className="navigation__link-sublink"
              onClick={() => {
                setShowMenu(false);
                setShowSubMenu(false);
              }}
            >
              <NavLink to="/fishing_regulations" className={createClassname}>
                <FontAwesomeIcon icon={faFishFins} className="navigation__icon" />
                HORGÁSZREND
              </NavLink>
            </li>
            <li
              className="navigation__link-sublink"
              onClick={() => {
                setShowMenu(false);
                setShowSubMenu(false);
              }}
            >
              <NavLink to="/fishing_exam" className={createClassname}>
                <FontAwesomeIcon icon={faQuestion} className="navigation__icon" />
                HORGÁSZVIZSGA
              </NavLink>
            </li>
            <li
              className="navigation__link-sublink"
              onClick={() => {
                setShowMenu(false);
                setShowSubMenu(false);
              }}
            >
              <NavLink to="/embankment_access_permit" className={createClassname}>
                <FontAwesomeIcon icon={faCarSide} className="navigation__icon" />
                TÖLTÉSKÖZLEKEDÉS
              </NavLink>
            </li>
            <li
              className="navigation__link-sublink"
              onClick={() => {
                setShowMenu(false);
                setShowSubMenu(false);
              }}
            >
              <NavLink to="/links" className={createClassname}>
                <FontAwesomeIcon icon={faLink} className="navigation__icon" />
                HASZNOS LINKEKE
              </NavLink>
            </li>
            <li
              className="navigation__link-sublink"
              onClick={() => {
                setShowMenu(false);
                setShowSubMenu(false);
              }}
            >
              <NavLink to="/downloads" className={createClassname}>
                <FontAwesomeIcon icon={faDownload} className="navigation__icon" />
                LETÖLTÉSEK
              </NavLink>
            </li>
            <li
              className="navigation__link-sublink"
              onClick={() => {
                setShowMenu(false);
                setShowSubMenu(false);
              }}
            >
              <NavLink to="/tenders" className={createClassname}>
                <FontAwesomeIcon icon={faFileInvoice} className="navigation__icon" />
                PÁLYÁZATOK
              </NavLink>
            </li>
            <li
              className="navigation__link-sublink"
              onClick={() => {
                setShowMenu(false);
                setShowSubMenu(false);
              }}
            >
              <NavLink to="/our_statues" className={createClassname}>
                <FontAwesomeIcon icon={faTags} className="navigation__icon" />
                ALAPSZABÁLYUNK
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className="navigation__link"
          onClick={() => {
            setShowMenu(false);
            setShowSubMenu(false);
          }}
        >
          <NavLink to="/gallery" className={createClassname}>
            <FontAwesomeIcon icon={faImages} className="navigation__icon" />
            GALÉRIA
          </NavLink>
        </li>
        <li
          className="navigation__link"
          onClick={() => {
            setShowMenu(false);
            setShowSubMenu(false);
          }}
        >
          <NavLink to="/about_us" className={createClassname}>
            <FontAwesomeIcon icon={faUser} className="navigation__icon" />
            RÓLUNK
          </NavLink>
        </li>
        <li
          className="navigation__link"
          onClick={() => {
            setShowMenu(false);
            setShowSubMenu(false);
          }}
        >
          <NavLink to="/contact" className={createClassname}>
            <FontAwesomeIcon icon={faAddressBook} className="navigation__icon" />
            KAPCSOLAT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
