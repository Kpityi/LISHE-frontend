import './index.scss';
import Button from './../../UI/Button';
import { useState } from 'react';
import classNames from 'classnames';
import FERules from '../FERules';
import FEDates from '../FEDates';
import FEMaterials from '../FEMaterials';
import SiteHelmet from '../../common/helmet';

const FishingExamPage = () => {
  const [active, setActive] = useState(1);

  const handleButtonClick = (isActive) => {
    setActive(isActive === active ? active : isActive);
  };

  return (
    <div className=" f-exam-page">
      <SiteHelmet
        title="Horgászvizsga - LISHE"
        description="Információk a horgászvizsga rendjéről, időpontokról és vizsgaanyagról a László István Honvéd Sporthorgász Egyesület oldalán."
      />
      <div className="f-exam-page__buttons">
        <Button
          label="Horgászvizga rendje"
          className="f-exam-page"
          type="button"
          onClick={() => handleButtonClick(1)}
        />
        <Button
          label="Horgászviszga időpontok"
          className="f-exam-page"
          type="button"
          onClick={() => handleButtonClick(2)}
        />
        <Button label="Vizsgaanyag" className="f-exam-page" type="button" onClick={() => handleButtonClick(3)} />
      </div>

      <div className="f-exam-page__container">
        {/* Fishing exam rules */}
        <div className={classNames('f-exam-page__content', active === 1 && '-active')}>
          <FERules />
        </div>

        {/* fishing exam dates  & times */}
        <div className={classNames('f-exam-page__content', active === 2 && '-active')}>
          <FEDates />
        </div>

        {/* fishing exam material */}
        <div className={classNames('f-exam-page__content', active === 3 && '-active')}>
          <FEMaterials />
        </div>
      </div>
    </div>
  );
};

export default FishingExamPage;
