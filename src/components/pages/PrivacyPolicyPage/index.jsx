import SiteHelmet from '../../common/helmet';
import './index.scss';

const PrivacyPolicyPage = () => {
  return (
    <div className="pp-page">
      <SiteHelmet
        title="Adatkezelési Tájékoztató - LISHE"
        description="A László István Honvéd Sporthorgász Egyesület adatkezelési tájékoztatója."
      />
      <p className="pp-page__text-title">Adatkezelési tájékoztató</p>
      <p className="pp-page__text">
        A László István Honvéd Sporthorgász Egyesület weboldala (www.lishe.hu) nem gyűjt és nem tárol személyes
        adatokat. Az oldal kizárólag információs céllal működik, és nem tartalmaz kapcsolatfelvételi űrlapot vagy
        felhasználói fiókot. Amennyiben kérdése van, kérjük, lépjen velünk kapcsolatba az elnok@lishe.hu e-mail címen.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
