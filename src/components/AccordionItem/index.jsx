import React from 'react';
import './index.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className="accordion-item" onClick={onClick}>
      <h6 className="accordion-item__title">
        <div className="accordion-item__icon-container">
          {isActive ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}{' '}
        </div>
        {title}
      </h6>
      <div className={classNames('accordion-item__content', isActive && '-active')}>{content}</div>
    </div>
  );
};

export default AccordionItem;
