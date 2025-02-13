import SiteHelmet from '../../common/helmet';
import './index.scss';

const CookiePage = () => {
  return (
    <div className="cookie-page">
      <SiteHelmet
        title="Cookie Szabályzat - LISHE"
        description="A László István Honvéd Sporthorgász Egyesület weboldala nem használ cookie-kat, nem követi a látogatók tevékenységét, és nem alkalmaz harmadik féltől származó sütiket."
      />
      <p className="cookie-page__text-title">Cookie szabályzat</p>
      <p className="cookie-page__text">
        A László István Honvéd Sporthorgász Egyesület weboldala (www.lishe.hu) nem használ cookie-kat, nem követi a
        látogatók tevékenységét, és nem alkalmaz harmadik féltől származó sütiket (pl. Google Analytics, Facebook
        Pixel).
      </p>
    </div>
  );
};

export default CookiePage;
