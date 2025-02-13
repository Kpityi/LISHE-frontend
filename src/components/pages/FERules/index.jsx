import './index.scss';
import { Link } from 'react-router';

const FERules = () => {
  return (
    <div className="fe-rules">
      <h5 className="fe-rules__header-title">Horgászvizsga rendje 2021. március 01-től</h5>

      <h6 className="fe-rules__title">Február végétől megyénkben is újra indul a horgászvizsgáztatás.</h6>

      <p className="fe-rules__text">
        A hal védelméről és a halgazdálkodásról szól 2013.évi CII. törvény 40. § (9) bek., és a 63. § (5) bek. b) pont
        bh) alpontban foglaltak szerint az állami horgászvizsga megszervezése, lebonyolítása, közreműködési megállapodás
        megkötése, a vizsgáztatásra való feljogosítás, a vizsgázottak és vizsga alól mentesítettek nyilvántartása,
        vizsgabizottsági tagok képesítési, személyi megfelelőségi vizsgálata és nyilvántartása a MOHOSZ közfeladat
        ellátási kötelezettségi körébe került.
      </p>

      <p className="fe-rules__text">
        A MOHOSZ e kötelezettségét az általa megbízott tagszervezeteken keresztül, a Horgász-Informatikai rendszer
        (HORINFO) horgászvizsga moduljának beindításával és folyamatos működtetésével látja el.
      </p>

      <p className="fe-rules__text">
        Szövetségünk mint Csongrád megyei horgászvizsga koordinátor, és az arra megbízott tagegyesületeivel közvetlenül
        vizsgáztató szervezetként vesz részt a horgászvizsgáztatásban.
      </p>

      <p className="fe-rules__text">
        Megyénkben az eddig megszokottak szerint összesen tizenkét helyen zajlik majd rendszeres vizsgáztatás, de
        továbbra is lehetőség nyílik kihelyezett vizsgák lebonyolítására is. Elsőként a megyei szövetség irodájában,
        majd a MOHOSZ támogatásával és a HECSMSZ saját erős beruházásából biztosított technikai feltételek megteremtését
        követően fokozatosan a tagszervezeti helyszíneken is újraindulhat ez a munka.
      </p>

      <p className="fe-rules__text">
        Jelen összeállításunkkal a vizsgára készülőknek szeretnénk segítséget nyújtani az új, elektronikus
        vizsgarendszerben való eligazodáshoz.
      </p>

      <h6 className="fe-rules__title">Horgász vizsgázni szeretnék, hogyan tehetem?</h6>

      <p className="fe-rules__text-title">A horgászvizsgáról általában</p>

      <p className="fe-rules__text">
        2019. január 1-jén hatályba lépett a hal védelméről és a halgazdálkodásról szól 2013.évi CII. törvény
        módosítása, mely alapján a horgászvizsga 2019 január 1-től mindenki számára <strong>díjmentes</strong>{' '}
        díjmentes, azonban horgászvizsgára jelentkezni kizárólag 10 éves életkor betöltése után lehetz.
      </p>

      <p className="fe-rules__text">
        További fontos változás, hogy a horgászvizsgáztatás lebonyolításáért felelős szervezetként a fenti jogszabály a
        halgazdálkodási hatóság helyett a Magyar Országos Horgász Szövetséget jelölte ki, amely vizsgaszabályzatában a
        horgászvizsgán való részvételt a HORINFO rendszerében történt sikeres horgászregisztrációhoz köti.
      </p>
      <p className="fe-rules__text">
        2021-től megváltozott az Állami Horgászvizsga menete, legfontosabb különbség a korábbi évekhez képest, hogy a
        horgászvizsga elektronikus formában (okos-készülék segítségével: számítógép, tablet, okostelefon) kerül
        lebonyolításra ugyanakkor a személyes megjelenés továbbra is szükséges. Ami azt jelenti, hogy a vizsgázó az
        általa kiválasztott vizsgabizottság meghirdetett időpontjában megjelenik és helyben biztosított vagy saját
        okos-készülék segítségével ad számot horgászati, halismereti tudásáról.
      </p>

      <p className="fe-rules__text-title">Hogyan kell jelentkezni a horgászvizsgára?</p>
      <p className="fe-rules__text-bold">Az Állami Horgászvizsgára történő jelentkezés kizárólag:</p>

      <ul className="fe-rules__text-ul">
        <li className="fe-rules__text-li">
          a HORINFO rendszerben történt előzetes horgászregisztráció után (
          <Link to="https://horgaszjegy.hu/">https://horgaszjegy.hu</Link>)
        </li>
        <li className="fe-rules__text-li">
          a HORINFO-ban a személyes profilból online vizsgajelentkezés segítségével lehetséges.
        </li>
      </ul>

      <p className="fe-rules__text-bold">
        A vizsgabizottságok által közzétett vizsgaalkalmakra a vizsgát megelőző napig lehet feliratkozni. Kérjük a
        vizsga kezdése előtt legalább 10 perccel szíveskedjenek megjelenni!
      </p>

      <p className="fe-rules__text-title">A horgászvizsga jelentkezés előkészítése</p>

      <p className="fe-rules__text">
        <strong>HORGÁSZREGISZTRÁCIÓ</strong> a HORINFO rendszerben (
        <Link to="https://horgaszjegy.hu/">https://horgaszjegy.hu</Link>).
      </p>
      <p className="fe-rules__text">
        A regisztráció elvégezhető otthonról egyénileg online, de lehetőség nyílik arra is, hogy az egyesületi
        ügyintézők segítségét kérjék.
      </p>
      <p className="fe-rules__text">
        A regisztrációval létrejön egy egyéni HORINFO fiók (személyes profil) amelyben a horgász adatai kerülnek
        tárolásra és számos horgászattal kapcsolatos lehetőséget kínál. Például: verseny nevezések, Ma-Hor előfizetés,
        otthoni online jegyvásárlás, központi hírlevelek,…
      </p>
      <p className="fe-rules__text">
        A 15. életévüket tárgyévben betöltő személyeknél kötelező a Magyar Horgászkártya igénylése is, melynek ára
        2.200,- Ft.
      </p>

      <div className="fe-rules__image-container">
        <img
          src="/regisztracio.jpg"
          alt="regisztráció"
          title="Segítség a regisztrációhoz"
          className="fe-rules__image"
        />
      </div>

      <p className="fe-rules__text">
        <strong> RENDÍVÜL FONTOS!</strong> ! a személyes HORINFO profil további használatához a{' '}
        <strong>felhasználó azonosító és a jelszó megjegyzése!</strong>
        felhasználó azonosító és a jelszó megjegyzése!
      </p>

      <p className="fe-rules__text-title">VIZSGÁRA JELENTKEZÉS LÉPÉSEI</p>

      <ol className="fe-rules__text-ol">
        <li className="fe-rules__text-li">
          Jelentkezzünk be a HORONFO rendszerben a személyes profilunkba a Horgászregisztráció során megadott{' '}
          <strong>felhasználó azonosítóval és a jelszóval.</strong>
        </li>
        <li className="fe-rules__text-li">
          Bejelentkezést követően az alábbi képernyőkép jelenik meg, ott kattintsunk a bal oldali menüsorban a{' '}
          <strong>„Tagságok és Engedélyek”</strong> menüpontra, hogy elérjük a <strong>„Vizsgák”</strong> „Vizsgák”
          menüpontot.
          <div className="fe-rules__image-container">
            <img
              src="/permission.jpg"
              alt="regisztráció"
              title="Segítség a regisztrációhoz"
              className="fe-rules__image"
            />
          </div>
        </li>
        <li className="fe-rules__text-li">
          A <strong> „Tagságok és Engedélyek”</strong> menüpontra történő kattintás után megjelenő képernyőképen
          válasszuk ki a <strong>„Vizsgák”</strong> menüpontot!
          <div className="fe-rules__image-container">
            <img src="/exam.jpg" alt="regisztráció" title="Segítség a regisztrációhoz" className="fe-rules__image" />
          </div>
        </li>
        <li className="fe-rules__text-li">
          A <strong>„Vizsgák”</strong> menüpontra kattintva, az előtűnő újabb felületen a bal oldali narancssárga
          mezőben található <strong>„Időpontfoglalás”</strong> gombot kiválasztva elérhetővé válnak a különböző
          vizsgabizottságok, és az általuk meghirdetett vizsgaidőpontok.
        </li>
        <li className="fe-rules__text-li">
          Ezen az oldalon a keresőmezőbe a <strong>„HECSMSZ”</strong> szót beírva, majd a kék mezőben lévő{' '}
          <strong>„Keresés”</strong>-re kattintva kizárólag a Horgász Egyesületek Csongrád Megyei Szövetsége és
          tagegyesületei vizsgabizottságai, illetve az általuk meghirdetett vizsgaidőpontok jelennek meg.
          <div className="fe-rules__image-container">
            <img src="/search.jpg" alt="regisztráció" title="Segítség a regisztrációhoz" className="fe-rules__image" />
          </div>
        </li>
        <li className="fe-rules__text-li">
          A megjelenő HECSMSZ vizsgabizottságok és vizsgaidőpontok közül a számunkra megfelelőt a{' '}
          <strong>„Részletek”</strong> funkciógomb megnyomásával válaszhatjuk ki.
          <div className="fe-rules__image-container">
            <img src="/details.jpg" alt="regisztráció" title="Segítség a regisztrációhoz" className="fe-rules__image" />
          </div>
        </li>
        <li className="fe-rules__text-li">
          A következő felületen – vizsga helyszíne és pontos időpontja mellett – a vizsgára való jelentkezésünket a
          narancssárga mezőben található <strong>„Vizsga jelentkezés”</strong> gombra kattintva lehet véglegesíteni.
        </li>
      </ol>
      <p className="fe-rules__text-bold">
        A vizsgabizottságok által közzétett vizsgaalkalmakra a vizsgát megelőző napig lehet feliratkozni. Kérjük az adat
        egyeztetés lebonyolítása érdekében a vizsga megkezdése előtt legalább 10 perccel szíveskedjenek megjelenni!
      </p>
      <p className="fe-rules__text-title">Miből tudok felkészülni a horgászvizsgára?</p>
      <p className="fe-rules__text">
        A horgászvizsga felkészülést szolgáló elsődleges tananyag a HORINFO rendszer <strong>„Vizsga”</strong>{' '}
        menüpontjából letölthető. Illetve az ugyanitt található <strong>„Gyakorlás”</strong>-ra kattintva próbavizsgát
        tehetünk, melynek eredménye ugyan nem számít bele a vizsgába, de a felkészülést kiválóan szolgálja.
      </p>
      <div className="fe-rules__image-container">
        <img src="/exercise.jpg" alt="gyakorlás" title="Felkészülés a vizsgára" className="fe-rules__image" />
      </div>
      <p className="fe-rules__text-title">A horgászvizsga menete röviden</p>
      <p className="fe-rules__text">
        A horgászvizsga a meghirdetett időpontban pontosan kezdődik. A személyazonosság ellenőrzését követően minden
        vizsgázó kap egy okos-készüléket (igény esetén saját készülék is használható), amelyen elvégezhető az online
        vizsgaprogram.
      </p>
      <p className="fe-rules__text">
        A vizsgázó a helyben kapott, vagy hozott okos-készüléken belép a személyes profiljába, ahol a vizsga tesztlap
        immár lehívható lesz.
      </p>
      <p className="fe-rules__text">
        <strong>FONTOS,</strong> hogy a vizsgázó tudja a saját felhasználói azonosítóját és jelszavát, e nélkül nem
        tudja elindítani és teljesíteni a vizsgát.
      </p>
      <p className="fe-rules__text">
        A vizsga 45, egyenként egy pontot érő kérdésből áll, amelyek lefedik a vonatkozó jogszabályokban, valamint az
        Országos Horgászrendben foglalt horgászatra vonatkozó szabályok mellett a magyar halfauna ismeretét is. A
        kérdések teszt jellegűek, tehát minden kérdésre három válasz lehetőség közül kell kiválasztani a helyeset. A
        horgászvizsga 30 kérdés helyes megválaszolásával tekinthető sikeresnek, az ezalatt teljesítő jelölteknek a
        vizsgát meg kell ismételni.
      </p>
      <div className="fe-rules__image-container">
        <img src="/quection.jpg" alt="vizsga" title="Vizsga menete" className="fe-rules__image" />
      </div>
      <p className="fe-rules__text">
        A kérdések megválaszolására 60 perc áll rendelkezésre, ezt követően már a rendszer nem engedi a vizsga
        folytatását. Sikeres vizsga esetén a vizsgabizonyítvány automatikusan betöltődik a HORINFO rendszer
        horgászvizsgákat tartalmazó adatbázisába és a személyes profilba, ezért az állami horgászjegy igénylésekor azt
        már nem kell magunkkal vinni. Külön kérésre azonban a vizsgabizottságtól elkérhető egy kinyomtatott példány.
      </p>
      <p className="fe-rules__text-bold">
        FIGYELEM! A horgászvizsgán bármilyen elektronikus vagy írott segédanyag használata a vizsgáról való kizárást
        vonja maga után.
      </p>
      <p className="fe-rules__text"></p>
      <div className="fe-rules__image-container">
        <img src="/succes_exam.jpg" alt="vizsga" title="Sikeres vizsga" className="fe-rules__image" />
      </div>
      <p className="fe-rules__text-title">A horgászvizsgával kapcsolatos jogszabályi rendelkezések</p>
      <p className="fe-rules__text">
        <strong>Hhvtv. 40. § (2)</strong> Állami horgászjegyet és horgász fogási naplót az a természetes személy válthat
        ki, aki harmadik életévét betöltötte, rendelkezik állami horgászvizsgával vagy korábbi érvényes állami
        horgászjegyét bemutatja, horgászegyesületi tagságát igazolja. A horgász az állami horgászvizsga letételét állami
        horgászvizsga-bizonyítvánnyal igazolja. Magyar állampolgársággal és állandó lakóhellyel, valamint magyar állami
        horgászvizsgával nem rendelkező természetes személy más országban kiállított horgászati okirat vagy okmány
        bemutatásával jogosult az állami horgászjegy és a horgász fogási napló kiváltására.
      </p>
      <p className="fe-rules__text">
        <strong>Hhvtv. 40. § (3)</strong> Hároméves kortól az adott év december 31. napjáig a 15. életévét be nem
        töltött személy részére állami horgászjegy horgászvizsga és horgászegyesületi tagság hiányában is kiadható.
      </p>
      <p className="fe-rules__text">
        <strong>Hhvtv. 40. § (5)</strong> Az állami horgászvizsga letétele alól mentesül azon értelmi fogyatékos
        személy, akinek a törvényes képviselője az állapotát igazoló okmányokat az állami horgászvizsga bizottság
        számára benyújtja. Az állami horgászvizsga letétele alól mentesített, halfogásra jogosító okmányokkal rendelkező
        értelmi fogyatékos személy kizárólag 18. életévét betöltött, állami horgászvizsgával rendelkező személy
        folyamatos jelenlétében horgászhat.
      </p>
      <p className="fe-rules__text-bold">Horgász Egyesületek Csongrád Megyei Szövetsége</p>
    </div>
  );
};

export default FERules;
