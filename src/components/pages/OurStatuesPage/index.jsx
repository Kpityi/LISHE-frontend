import { useState } from 'react';
import PdfViewer from '../../PdfViewer';
import './index.scss';
import SiteHelmet from '../../common/helmet';

const OurStatuesPage = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div className="our-statues-page">
      <SiteHelmet
        title="Alapszabályzat - LISHE"
        description="Tekintse meg a László István Honvéd Sporthorgász Egyesület egységes szerkezetbe foglalt alapszabályázatát."
      />
      <PdfViewer setYear={setYear} file="Egyseges_szerkezetbe_foglalt_alapszabaly" />
    </div>
  );
};

export default OurStatuesPage;
