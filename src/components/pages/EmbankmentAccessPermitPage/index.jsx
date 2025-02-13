import { API_BASE_URL } from '../../../common/constants/environment';
import SiteHelmet from '../../common/helmet';
import './index.scss';
import { Link } from 'react-router';

const EAPermitPage = () => {
  return (
    <div className="eap-page">
      <SiteHelmet
        title="Töltésközlekedés - LISHE"
        description="Tájékoztatjuk az árvízvédelmi töltésen közlekedő személyeket a töltésközlekedési engedély változásairól és új szabályairól."
      />
      <p className="eap-page__text-title">Változott a töltésközlekedési engedély</p>
      <p className="eap-page__text">
        Tájékoztatjuk az árvízvédelmi töltésen közlekedő személyeket, hogy az idei évtől megváltozott az
        Alsó-Tisza-vidéki Vízügyi Igazgatóság működési területére kiadható töltésközlekedési engedély kiállítási módja.
      </p>
      <p className="eap-page__text">
        A töltésközlekedési engedély az árvízvédelmi töltéseken koronáin árvízmentes időszakban segédmotoros
        kerékpárral, motorkerékpárral, személygépkocsival, lassú járművel, legfeljebb 3,5 tonna összsúlyú
        tehergépjárművel, valamint állati vontatású járművel történő közlekedésére jogosítja fel az engedélyt kiváltó
        személyt.
      </p>
      <p className="eap-page__text-title">A töltésközlekedési engedély változott tartalma:</p>
      <ul className="eap-page__text-ul">
        <li className="eap-page__text-li">
          A jármű forgalmi rendszáma, ennek hiányában a közúti járművek forgalomba helyezésének és forgalomba tartásának
          műszaki feltételeiről szóló 6/1990. (IV. 12.) KöHÉM rendelet 27.§-ban szabályozott hatósági jelzése, utánfutó
          megléte/használata,
        </li>
        <li className="eap-page__text-li">Az engedély időtartama (kezdő dátum)</li>
        <li className="eap-page__text-li">
          Az engedélyes tájékoztatása arról, hogy az Igazgatóság a vízkárelhárítással összefüggésben végzett
          tevékenységei miatt a töltésen való közlekedést korlátozhatja, vagy megtilthatja.
        </li>
      </ul>
      <p className="eap-page__text">
        A töltésközlekedési engedély változott tartalma:{' '}
        <Link className="eap-page__link" to={`${API_BASE_URL}/doc/91_tolteskozlekedes2018.pdf`} target="blank">
          Töltésközlekedésről
        </Link>
      </p>
    </div>
  );
};

export default EAPermitPage;
