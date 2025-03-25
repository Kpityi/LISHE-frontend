import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import { PATHS } from './common/paths';
import Footer from './components/common/Footer';
import HomePage from './components/pages/HomePage';
import Aside from './components/pages/Aside';
import PricePage from './components/pages/PricePage';
import FishingRegulationsPage from './components/pages/FishingRegulationsPage';
import FishingExamPage from './components/pages/FishingExamPage';
import { pdfjs } from 'react-pdf';
import GalleryPage from './components/pages/GalleryPage';
import EAPermitPage from './components/pages/EmbankmentAccessPermitPage';
import LinksPage from './components/pages/LinksPage';
import DownloadsPage from './components/pages/DownloadPage';
import AboutUsPage from './components/pages/AboutUSPage';
import OurStatuesPage from './components/pages/OurStatuesPage';
import NewsPage from './components/pages/NewsPage';
import PostPage from './components/PostPage';
import TendersPage from './components/pages/TendersPage';
import TenderPage from './components/TenderPage';
import ContactPage from './components/pages/ContactPage';
import ImpressumPage from './components/pages/ImpressumPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import CookiePage from './components/pages/CookiesPage';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();
  }, []);
  return (
    <div className="app">
      <Header />
      <Navigation />
      <div className="main-container">
        <main className="main">
          <Routes>
            <Route path={PATHS.root} element={<HomePage />} />
            <Route path={PATHS.home} element={<Navigate to="/" />} />
            <Route path={PATHS.prices} element={<PricePage />} />
            <Route path={PATHS.gallery} element={<GalleryPage />} />
            <Route path={PATHS.news} element={<NewsPage />} />
            <Route path={PATHS.contact} element={<ContactPage />} />
            <Route path={`${PATHS.post}/${PATHS.params.postId}`} element={<PostPage />} />
            <Route path={PATHS.informations.tenders} element={<TendersPage />} />
            <Route path={`${PATHS.tender}/${PATHS.params.postId}`} element={<TenderPage />} />
            <Route path={PATHS.informations.fishing_regulations} element={<FishingRegulationsPage />} />
            <Route path={PATHS.informations.fishing_exam} element={<FishingExamPage />} />
            <Route path={PATHS.informations.embankment_Access_permit} element={<EAPermitPage />} />
            <Route path={PATHS.informations.links} element={<LinksPage />} />
            <Route path={PATHS.informations.downloads} element={<DownloadsPage />} />
            <Route path={PATHS.informations.our_statues} element={<OurStatuesPage />} />
            <Route path={PATHS.informations.impressum} element={<ImpressumPage />} />
            <Route path={PATHS.informations.privacy_policy} element={<PrivacyPolicyPage />} />
            <Route path={PATHS.informations.cookies} element={<CookiePage />} />
            <Route path={PATHS.about_us} element={<AboutUsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <aside className="aside-container">
          <Aside />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
