import { useState } from 'react';
import './index.scss';
import PdfViewer from '../../PdfViewer';
import ReactPlayer from 'react-player/youtube';

const FEMaterials = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <div className="fe-materials">
      <p className="fe-materials__text">
        Alább megtekinthető a „Komárom-Esztergom Megyei Horgászegyesületek Szövetségének horgászvizsgára felkészítő
        oktatóvideója”!
      </p>
      <div className="fe-materials__video-container">
        <ReactPlayer
          url="https://youtu.be/KnbMR4eENwM"
          controls={true}
          className="fe-materials__video"
          width="350px"
          height="200px"
        />
      </div>

      <p className="fe-materials__text">
        Egyesületünkben a MOHOSZ által kiadott „Állami horgászvizsga felkészülést segítő jegyzet” térítés ellenében
        nyomtatott formában átvehető!
      </p>
      <div className="fe-materials__pdf-conainer">
        <PdfViewer setYear={setYear} file="Horgaszvizsga_felkeszito" />
      </div>
    </div>
  );
};

export default FEMaterials;
