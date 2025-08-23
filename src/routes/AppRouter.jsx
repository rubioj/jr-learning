import { Routes, Route, Navigate } from 'react-router-dom';
import { ResponsiveRouter } from '../components/ResponsiveRouter';
import { HomeDesktop } from '../screens/HomeDesktop';
import { HomeMobile } from '../screens/HomeMobile';
import { AboutDesktop } from '../screens/AboutDesktop';
import { AboutMobile } from '../screens/AboutMobile';
import { ServicesDesktop } from '../screens/ServicesDesktop';
import { ServicesMobile } from '../screens/ServicesMobile';
import { ContactDesktop } from '../screens/ContactDesktop';
import { ContactMobile } from '../screens/ContactMobile';
import { MenuMobile } from '../screens/MenuMobile';
import { PublicationsMobile } from '../screens/PublicationsMobile';
import { PublicationsDesktop } from '../screens/PublicationsDesktop';
import { SmsOptInPage } from '../screens/SmsOptInPage';
import CurrentsOfCarePage from '../pages/CurrentsOfCarePage';

function AppRouter() {
  return (
    <>
      <ResponsiveRouter />
      <Routes>
        <Route path="/" element={<Navigate to="/home-desktop" replace />} />
        <Route path="/home-desktop" element={<HomeDesktop />} />
        <Route path="/home-mobile" element={<HomeMobile />} />
        <Route path="/about-desktop" element={<AboutDesktop />} />
        <Route path="/about-mobile" element={<AboutMobile />} />
        <Route path="/services-desktop" element={<ServicesDesktop />} />
        <Route path="/services-mobile" element={<ServicesMobile />} />
        <Route path="/contact-desktop" element={<ContactDesktop />} />
        <Route path="/contact-mobile" element={<ContactMobile />} />
        <Route path="/menu-mobile" element={<MenuMobile />} />
        <Route path="/publications-desktop" element={<PublicationsDesktop />} />
        <Route path="/publications-mobile" element={<PublicationsMobile />} />
        <Route path="/sms-opt-in" element={<SmsOptInPage />} />
        <Route path="/currents-of-care" element={<CurrentsOfCarePage />} />
      </Routes>
    </>
  );
}

export default AppRouter;
