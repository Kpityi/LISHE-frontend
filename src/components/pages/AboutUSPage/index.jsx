import { useEffect, useState } from 'react';
import OurSatuesPage from '../OurStatuesPage';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../../common/constants/environment';
import SiteHelmet from '../../common/helmet';

const AboutUsPage = () => {
  const [management, setManagement] = useState([]);

  useEffect(() => {
    console.log('useEffect');

    const fetchManagement = async () => {
      console.log(`url: ${API_URL}/management`);
      try {
        const result = await axios.get(`${API_URL}/management`);
        console.log(result.data);

        if (result.status >= 200 && result.status < 300) {
          setManagement(result.data);
        }
      } catch (error) {
        console.error('error: ', error);
      }
    };
    fetchManagement();
  }, []);

  return (
    <div className="about-us-page">
      <SiteHelmet
        title="LISHE - Rólunk"
        description="A László István Honvéd Sporthorgász Egyesület bemutatása. Történet, programok, események és vízkezelési jog."
      />
      <div className="about-us-page__header">
        <h1 className="about-us-page__title">László István Honvéd Sporthorgász Egyesület - Hódmezővásárhely</h1>
      </div>

      {/* Our history */}
      <section className="about-us-page__our-history">
        <p className="about-us-page__text">
          Az egyesület 2005. évben közel harminc fővel alakult. 2010. évre több mint 800 felnőtt, ifjúsági és több mint
          80 fő gyermek horgász tagra bővült. Az elmúlt években az egyesület létszáma már meghaladta az 1000 főt.
        </p>
        <p className="about-us-page__text">
          Ez évi eddigi létszámunk már több mint 1350 fő. Néhány évvel ezelőtt a környékbeli településeken egyesületünk
          „égisze” alatt sporthorgász klubjaink alakultak, zömmel tiszai horgászokból. A klubok javarészt önállóan
          szervezik a programjaikat, melyek főleg a horgászattal kapcsolatos szabadidős tevékenységhez köthetők. Persze
          az anyaegyesület sem tétlenkedik. Évről évre a rendszeres és visszatérő programokat szervezünk.
        </p>
        <p className="about-us-page__text">Ilyenek például:</p>
        <div className="about-us-page__container">
          <article className="about-us-page__article">
            <p className="about-us-page__text-title">Tavaszi és őszi környezetvédelmi nap</p>
            <p className="about-us-page__text">
              Tavaszi és őszi környezetvédelmi nap megrendezése horgászversennyel egybekötve a Tisza körtvélyesi
              holtágán (TISZTA KÖRTVÉLYESÉRT KUPA).
            </p>
          </article>
          <article className="about-us-page__article">
            <p className="about-us-page__text-title">Nagy Sportágválasztó Nap</p>
            <p className="about-us-page__text">
              Májusban vagy szeptemberben részvétel a Hódmezővásárhelyen rendezendő „Nagy Sportágválasztó Nap”-on, mint
              kiállító.
            </p>
          </article>
          <article className="about-us-page__article">
            <p className="about-us-page__text-title">Generali Kupa” horgászverseny</p>
            <p className="about-us-page__text">
              Májusban vagy augusztusban rendezendő „Generali Kupa” horgászverseny a Generali Providencia Biztosító
              patronálásával.
            </p>
          </article>
          <article className="about-us-page__article">
            <p className="about-us-page__text-title">HORGÁSZRANDEVÚ</p>
            <p className="about-us-page__text">
              HORGÁSZRANDEVÚ megrendezése Hódmezővásárhelyen, melynek mottója Horgászok, Színészek a Fogyatékkal
              élőkért. A fogyatékkal élőkkel tervezzük, egy önállá horgászklub megalakítását is, hogy a klub az
              egyesületen belül önállóan működne.
            </p>
          </article>
          <article className="about-us-page__article">
            <p className="about-us-page__text-title">László István Horgászverseny</p>
            <p className="about-us-page__text">
              Októberben rendezzük meg a meghívásos László István Horgászversenyt külföldi résztvevőkkel.
            </p>
          </article>
          <article className="about-us-page__article">
            <img className="about-us-page__img" src="/14294302165094-300x224.jpg" alt="image" title="horgász tájkép" />
          </article>
        </div>
        <p className="about-us-page__text">
          Az előzőekben leírt programokat az egyesület nevezési díjakból, szövetségi támogatásból, de főleg saját
          forrásból finanszírozza.
        </p>
        <p className="about-us-page__text">
          A fenti programokból kiemelendő az évenkénti rendszerességgel megrendezendő tavaszi és őszi „Körtvélyesi
          környezetvédelmi” nap.
        </p>
        <p className="about-us-page__text">
          Gyakorlatilag már az egyesület megalakulása előtt néhány természetszerető horgászbarát összefogott, hogy a
          szeretett körtvélyesi holtág környékét rendbe tartsák, mivel egyre inkább kezdett elhanyagolt, gondozatlan és
          szemetes lenni. Tapasztalatunk szerint a horgászok mellett a kirándulók is felelősek a környék állapotáért. Az
          egyesület működésének egyik sarkalatos pontja épp a holtág védelme lett. Például szoros együttműködés volt a
          korábbi kezelő Tisza Halászati Szövetkezettel ( horgászhelyek kijelölése és karbantartása, szemétgyűjtő
          edények kihelyezése és a szemét összegyűjtése, a horgászhelyekre vezető utak karbantartása…stb.).
        </p>

        <div className="about-us-page__container-result">
          <article className="about-us-page__article">
            <p className="about-us-page__text-center">Több mint</p>
            <h3 className="about-us-page__text-title">+1000</h3>
            <p className="about-us-page__text-center">horgász tag</p>
          </article>
          <article className="about-us-page__article">
            <p className="about-us-page__text-center">Több mint</p>
            <h3 className="about-us-page__text-title">+5</h3>
            <p className="about-us-page__text-center">nagyszabású verszeny</p>
          </article>
          <article className="about-us-page__article">
            <p className="about-us-page__text-center">Több mint</p>
            <h3 className="about-us-page__text-title">+15</h3>
            <p className="about-us-page__text-center">elnyerhető kupa</p>
          </article>
          <article className="about-us-page__article">
            <p className="about-us-page__text-center">Több mint</p>
            <h3 className="about-us-page__text-title">+60</h3>
            <p className="about-us-page__text-center">hektár vízkezelési jog</p>
          </article>
        </div>
        <p className="about-us-page__text">
          A Horgász Egyesületek Csongrád Megyei Szövetsége és egyesületünk, a László István Honvéd Sporthorgász
          Egyesület között korábban létrejött pozitív, előremutató tárgyalás eredményeképp a „Körtvélyesi holtág”
          vízkezelési jogát, hasznosítását közösen, együttműködve kaptuk meg hasznosításra ez évtől 2031. december
          31.-ig. Ezzel a térség „úgymond” megvalósíthatja Tiszához kapcsolódó ökológiai rendszerének egységes elvek
          mentén zajló halgazdálkodását.
        </p>
        <article className="about-us-page__image-container">
          <img className="about-us-page__img" src="/14653253656820.jpg" alt="image1" title="Körtvélyesi-holtág" />
          <img className="about-us-page__img" src="/14294302169694.jpg" alt="image2" title="Körtvélyesi-holtág" />
          <img className="about-us-page__img" src="/14653253663773.jpg" alt="image3" title="Körtvélyesi-holtág" />
        </article>
        <p className="about-us-page__text">
          Az együttműködésünk alapvető célja egyesületünk tagságának igényeit figyelembe véve, a MOHOSZ ajánlását
          elfogadva, a reánk bízott vízkezelés leghatékonyabb és leggazdaságosabb megvalósítása.
        </p>
        <p className="about-us-page__text">
          Jelenleg érvényes forgalmazói megbízási szerződésünk van „Egységes Állami Horgászokmány” forgalmazására a
          jelenlegi szövetségünkkel (albizományos). E szerződés értelmében – a szerződés mellékletében feltüntetett
          forgalmazási pontokon – megkezdtük a szerződés szerinti okmányok kiadását. Ehhez szervesen illeszkedik a
          környékbeli horgászvizek területi jegyeinek értékesítése. Így gyakorlatilag február végén megkezdhettük a
          területi jegyek forgalmazását. Sőt a Gyermek horgászjegyek értékesítését is el tudtuk kezdeni. Ez igen fontos
          lépés az utánpótlás tekintetében.
        </p>
        <p className="about-us-page__text">
          A Körtvélyesi Holt – Tisza a Mártélyi Tájvédelmi Körzet része, a szentély jellegű holtágakhoz tartozik.
          Madárvédelmi szempontból fontos vizes élőhelynek számít. Területe:69ha Jellege:ártéri Tisza holtág
          Hossza:4,7km Átlagos szélessége:128m Átlagos vízmélység:3m Víztérfogata:1,8 millió m3. Helyrajzi szám:02060.
        </p>
        <p className="about-us-page__text">
          A Tisza bal partján, annak 203-205 fkm szelvényében fekszik. Közigazgatásilag Hódmezővásárhely városhoz
          tartozik. Tulajdonosa a Magyar Állam, kezelője a Kiskunsági Nemzeti Park Igazgatóság. A halászati jogot a
          Tisza Halászati Szövetkezet gyakorolja 2015-ig.
        </p>
        <p className="about-us-page__text">
          A Tisza szabályozásakor (1887) alakult ki az U alakú holtág amely Körtvélyes és Petres földnyelvét tartja az
          ölében. A két morotva között húzódik a Kutyafenék rétje, a körtvélyesi holtág alatt pedig a Barci-rét. A
          Mártélytól három kilométerre délre eső holtágat a töltésen és a parton egyaránt el lehet érni. E holtág a maga
          szigetével és a Barci-réttel már a madarak (és kutatóik) birodalma. A madárvilágot és vele a szabályozás kori
          Tisza-ártér ránk maradt kicsiny foltját óvja a védettség. A fél évszázados megfigyelés során 37 halat, 34
          emlőst, 119 fészkelő és 124 átvonuló madárfajt vettek számba. A természet háborítatlan csendje fogadja a
          természetkedvelőket. Kora tavasszal, rendszerint már márciusban megérkezik az első áradás, a víz órák alatt
          gáttól gátig nyúló tengerré válik, 2-3 m-es víz borítja el a hullámteret. Az árvíz alakulása kiszámíthatatlan.
          Egyik évben be sem következik, máskor néhány nap alatt levonul, de vannak esztendők, amikor hetekig is
          elidőzik. Ilyenkor többnyire utoléri a „zöldár”, a Tisza – lombfakadáskor esedékes – második tavaszi árvize.
          Az évszázados nyárasok, füzesek mellett, a holtágakon tenyészik a rucaöröm, a békatutaj, a tündérrózsa, és itt
          van a Tisza mente egyik legszebb ecsetpázsitos mocsárrétje az igen megritkult „harsogó” harissal. A
          Körtvélyes-sziget a fekete gólyák gyülekezőhelye, de előfordul rétisas, halvány geze, kis kócsag és üstökös
          gém is.
        </p>

        <article className="about-us-page__image-container">
          <img className="about-us-page__img" src="/14294302167499.jpg" alt="image1" title="Körtvélyesi-holtág" />
          <img className="about-us-page__img" src="/14294302163089.jpg" alt="image2" title="Körtvélyesi-holtág" />
          <img className="about-us-page__img" src="/14294302162038.jpg" alt="image3" title="Körtvélyesi-holtág" />
        </article>
      </section>

      {/* management */}
      <section className="about-us-page__management">
        <h3 className="about-us-page__title">Vezetőség</h3>
        <div className="about-us-page__management-container">
          {management &&
            management.map((person) => {
              return (
                <div className="about-us-page__person-container" key={person.id}>
                  <p className="about-us-page__name">{person.name}</p>
                  <p className="about-us-page__position">{person.position}</p>
                </div>
              );
            })}
        </div>
      </section>

      {/* Our statues */}
      <section className="about-us-page__our-statues">
        <OurSatuesPage />
      </section>
    </div>
  );
};

export default AboutUsPage;
