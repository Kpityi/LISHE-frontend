import './index.scss';
import { useState } from 'react';
import BasicPriceTable from '../../BasicPriceTable';
import PricesFromPDF from '../../PdfViewer';
import MartelyPriceTable from '../../MartelyPriceTable';
import HECSMSZPriceTable from '../../HECSMSZPriceTable';
import AccordionItem from '../../UI/AccordionItem';
import SiteHelmet from '../../common/helmet';

const PricePage = () => {
  const [active, setActive] = useState(0);
  const [yearBasic, setYearBasic] = useState();
  const [yearHECSMSZ, setYearHECSMSZ] = useState();
  const [yearMartely, setYearMartely] = useState();
  const [yearNationalBasic, setYearNationalBasic] = useState();
  const [yearNationalTerritorial, setYearNationalTerritorial] = useState();

  const handleAccordionClick = (newActiveAccordion) => {
    setActive(newActiveAccordion === active ? null : newActiveAccordion);
  };

  return (
    <div className="price-page">
      <SiteHelmet
        title="Engedély Árak - LISHE"
        description="László István Honvéd Sporthorgász Egyesület Általános és területi engedélye árak."
      />
      <div className="price-page__accordion-menu">
        <div className="price-page__accordion-menu__items">
          <AccordionItem
            title={`Alap engedély árak ${yearBasic}`}
            content={<BasicPriceTable setYear={setYearBasic} file="Alap_engedelyek" />}
            isActive={active === 1}
            onClick={() => handleAccordionClick(1)}
          />
          <AccordionItem
            title={`Országos Alap horgászengedély - ${yearNationalBasic}`}
            content={<PricesFromPDF setYear={setYearNationalBasic} file="Orszagos_ALAP_horgaszengedely" />}
            isActive={active === 2}
            onClick={() => handleAccordionClick(2)}
          />
          <AccordionItem
            title={`Országos területi horgászengedély - ${yearNationalTerritorial}`}
            content={<PricesFromPDF setYear={setYearNationalTerritorial} file="Orszagos_teruleti" />}
            isActive={active === 3}
            onClick={() => handleAccordionClick(3)}
          />
          <AccordionItem
            title={`HECSMSZ területi jegy árak - ${yearHECSMSZ}`}
            content={<HECSMSZPriceTable setYear={setYearHECSMSZ} file="HECSMSZ_arak" />}
            isActive={active === 4}
            onClick={() => handleAccordionClick(4)}
          />
          <AccordionItem
            title={`Mártély területi jegy árak - ${yearMartely}`}
            content={<MartelyPriceTable setYear={setYearMartely} file="Martely_Jegy_arak" />}
            isActive={active === 5}
            onClick={() => handleAccordionClick(5)}
          />
        </div>
      </div>
    </div>
  );
};

export default PricePage;
