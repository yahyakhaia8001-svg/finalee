import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import TurkeyLP from './pages/TurkeyLP';
import DubaiLP from './pages/DubaiLP';
import OmraLP from './pages/OmraLP';
import WhatsAppButton from './components/WhatsAppButton';
import DealBanner from './components/DealBanner';
import SocialProofNotification from './components/SocialProofNotification';
import ExitPopup from './components/ExitPopup';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    // Also show popup after 45 seconds if user hasn't left
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShownPopup]);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-800 antialiased selection:bg-tropicam-orange selection:text-white overflow-x-hidden">
        {/* Deal Banner at very top */}
        <DealBanner />

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* SEO Landing Pages */}
            <Route path="/voyage-turquie" element={<TurkeyLP />} />
            <Route path="/voyage-dubai" element={<DubaiLP />} />
            <Route path="/omra-2025" element={<OmraLP />} />
          </Routes>
        </main>
        <Footer />

        {/* Premium Interactive Elements */}
        <WhatsAppButton />
        <SocialProofNotification />
        <ExitPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />
      </div>
    </HashRouter>
  );
};

export default App;