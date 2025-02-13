import SiteHelmet from '../../common/helmet';
import './index.scss';

const ImpressumPage = () => {
  return (
    <div className="impressum-page">
      <SiteHelmet
        title="Impresszum - LISHE"
        description="László István Honvéd Sporthorgász Egyesület impresszuma és jogi nyilatkozatai."
      />
      <p className="impressum-page__text-title">Impresszum</p>
      <p className="impressum-page__text">
        <strong>Név:</strong> László István Honvéd Sporthorgász Egyesület
      </p>
      <p className="impressum-page__text">
        <strong>Székhely:</strong> 6800 Hódmezővásárhely, Szántó Kovács János u. 87.
      </p>
      <p className="impressum-page__text">
        <strong>Adószám:</strong> 18474457-1-06
      </p>
      <p className="impressum-page__text">
        <strong>Nyilvántartási szám:</strong> 06-02-0002162
      </p>
      <p className="impressum-page__text">
        <strong>MOHOSZ kód:</strong> 061-06-27-1
      </p>
      <p className="impressum-page__text">
        <strong>Képviselő</strong> Horváth Gusztáv
      </p>
      <p className="impressum-page__text">
        <strong>E-mail:</strong> elnok@lishe.hu
      </p>
      <p className="impressum-page__text">
        <strong>Telefon:</strong> +36-30/436-27-67
      </p>
      <p className="impressum-page__text">
        <strong>Weboldal:</strong> https://www.lishe.hu
      </p>
      <p className="impressum-page__text-title">Tárhelyszolgáltató:</p>
      <p className="impressum-page__text">
        <strong>Név:</strong>
      </p>
      <p className="impressum-page__text">
        <strong>Székhely:</strong>
      </p>
      <p className="impressum-page__text">
        <strong>Weboldal</strong>
      </p>
      <p className="impressum-page__text">
        <strong>E-mail</strong>
      </p>
      <p className="impressum-page__text">
        <strong>Telefon:</strong>
      </p>
      <p className="impressum-page__text-title">Jogi nyilatkozat</p>
      <ul className="impressum-page__text-ul">
        <li className="impressum-page__text-li">
          A weboldalon található információk jóhiszeműen kerültek összeállításra, azonban az üzemeltető nem vállal
          felelősséget azok pontosságáért és teljességéért.
        </li>
        <li className="impressum-page__text-li">
          Az üzemeltető fenntartja a jogot a weboldal tartalmának előzetes értesítés nélküli módosítására.
        </li>
        <li className="impressum-page__text-li">
          A weboldalon található külső hivatkozások tartalmáért az üzemeltető nem vállal felelősséget.
        </li>
      </ul>
      <p className="impressum-page__text-title">Szerzői jogok</p>
      <ul className="impressum-page__text-ul">
        <li className="impressum-page__text-li">
          A weboldalon található valamennyi tartalom (szöveg, kép, hang, videó, szoftver stb.) szerzői jogi védelem
          alatt áll.
        </li>
        <li className="impressum-page__text-li">
          A felhasználó a weboldal tartalmát kizárólag saját felhasználásra jogosult kinyomtatni vagy lementeni.
        </li>
        <li className="impressum-page__text-li">
          A felhasználó nem jogosult a weboldal tartalmának bármilyen kereskedelmi célú felhasználására.
        </li>
      </ul>
    </div>
  );
};

export default ImpressumPage;
