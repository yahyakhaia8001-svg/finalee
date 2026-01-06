import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, LOGO_SVG_DATA } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Voyages', path: '/packages' },
    { name: 'Nos Services', path: '/services' },
    { name: 'Omra', path: '/packages?cat=Omra' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic: If menu is open, header background is transparent (because the overlay provides the color)
  // but the TEXT and LOGO must be white to be visible on the dark overlay.
  const headerClass = isMobileMenuOpen
    ? 'bg-transparent py-3'
    : isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
      : 'bg-gradient-to-b from-black/60 to-transparent py-4 md:py-5';

  const textClass = isMobileMenuOpen
    ? 'text-white'
    : isScrolled
      ? 'text-tropicam-navy'
      : 'text-white';

  const logoTextClass = isMobileMenuOpen
    ? 'text-white'
    : isScrolled
      ? 'text-tropicam-navy'
      : 'text-white';

  const logoSubClass = isMobileMenuOpen
    ? 'text-gray-300'
    : isScrolled
      ? 'text-gray-500'
      : 'text-gray-200';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50 relative">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden p-2 rounded-xl group-hover:scale-105 transition-transform bg-tropicam-orange">
            <img src={LOGO_SVG_DATA} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-extrabold text-lg md:text-xl leading-none tracking-tight transition-colors ${logoTextClass}`}>
              TROPICAM
            </span>
            <span className={`font-sans text-[8px] md:text-[10px] font-bold tracking-[0.2em] transition-colors ${logoSubClass}`}>
              VOYAGE
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Hidden on Tablet (md), Visible on Large Screens (lg) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold hover:text-tropicam-orange transition-colors relative group ${textClass}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tropicam-orange transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - Hidden on Tablet (md), Visible on Large Screens (lg) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <div className={`flex items-center gap-2 text-sm font-bold transition-colors ${textClass}`}>
            <div className="w-8 h-8 rounded-full bg-tropicam-orange/10 flex items-center justify-center text-tropicam-orange">
              <Phone size={16} />
            </div>
            <span className="whitespace-nowrap">{PHONE_NUMBER}</span>
          </div>
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-tropicam-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Obtenir Mon Devis Gratuit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Actions (Devis + Menu) - Visible up to lg breakpoint */}
        <div className="lg:hidden flex items-center gap-3 z-50">
          {!isMobileMenuOpen && (
            <Link
              to="/contact"
              className="bg-tropicam-orange text-white px-3.5 py-2 rounded-lg text-xs font-bold shadow-md hover:bg-orange-600 transition-colors animate-fade-in"
            >
              Devis Gratuit
            </Link>
          )}

          <button
            className={`p-1 relative ${textClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 h-screen bg-[#0A2342] bg-opacity-100 z-40 transition-transform duration-300 lg:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ height: '100dvh' }} // Fallback for browsers that support dvh
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-white font-heading font-bold text-2xl hover:text-tropicam-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <div className="mt-8 flex flex-col items-center gap-6">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-white font-bold text-lg">
            <Phone size={20} className="text-tropicam-orange" />
            {PHONE_NUMBER}
          </a>
          <Link
            to="/contact"
            className="bg-tropicam-orange text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Demander un Devis
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;