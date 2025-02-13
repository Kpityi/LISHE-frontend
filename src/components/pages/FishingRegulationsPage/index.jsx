import './index.scss';
import React, { useState } from 'react';
import AccordionItem from '../../UI/AccordionItem';
import PricesFromPDF from '../../PdfViewer';
import SiteHelmet from '../../common/helmet';

const FishingRegulationsPage = () => {
  const [active, setActive] = useState(0);
  const [yearHECSMSZ, setYearHECSMSZ] = useState();
  const [yearMartely, setYearMartely] = useState();
  const [yearNational, setYearNational] = useState();

  const handleAccordionClick = (newActiveAccordion) => {
    setActive(newActiveAccordion === active ? null : newActiveAccordion);
  };
  return (
    <div className="fr-page">
      <div className="accordion-menu">
        <SiteHelmet
          title="Horgászrendek - LISHE"
          description="Tekintse meg a László István Honvéd Sporthorgász Egyesület horgászrendjeit a különböző vizekre vonatkozóan."
        />
        <div className="accordion-menu__items">
          <AccordionItem
            title={`Horgászrend ${yearHECSMSZ} HECSMSZ vizeire`}
            content={<PricesFromPDF setYear={setYearHECSMSZ} file="HECSMSZ_Horgaszrend" />}
            isActive={active === 1}
            onClick={() => handleAccordionClick(1)}
          />
          <AccordionItem
            title={`Horgászrend ${yearMartely} - Mártély Holt Tisza vizeire`}
            content={<PricesFromPDF setYear={setYearMartely} file="Martely_Horgaszrend" />}
            isActive={active === 2}
            onClick={() => handleAccordionClick(2)}
          />
          <AccordionItem
            title={`Horgászrend ${yearNational} - Országos`}
            content={<PricesFromPDF setYear={setYearNational} file="Orszagos_Horgaszrend" />}
            isActive={active === 3}
            onClick={() => handleAccordionClick(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default FishingRegulationsPage;
