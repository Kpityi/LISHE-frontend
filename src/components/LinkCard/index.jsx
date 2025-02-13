import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Link } from 'react-router';

const LinkCard = ({ title, description, url, className }) => {
  return (
    <Link to={url} target="blank" className={className}>
      <div className="link-card">
        <div className="link-card__title">
          <h6 className="link-card__text-title">{title}</h6>
        </div>
        <div className="link-card__description">
          <p>{description}</p>
        </div>
        <div className="link-card-footer">
          <p>
            tovább a linkre <FontAwesomeIcon icon={faSquareCaretRight} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LinkCard;
