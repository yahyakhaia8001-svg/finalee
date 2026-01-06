import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, CheckCircle, ShieldCheck, CreditCard, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, LICENSE_NUMBER, ADDRESS, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tropicam-navy text-white pt-16 pb-8 border-t border-blue-900">
      <div className="container mx-auto px-4 md:px-6">

        {/* Footer Grid (Fix #13) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="h-10 w-40 bg-white/10 rounded items-center justify-center flex font-heading font-bold text-xl uppercase tracking-widest text-white border border-white/20">
                Tropicam
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre Voyage, Notre Passion. Agence de voyage agréée à Casablanca spécialisée dans les séjours organisés, Omra VIP et billetterie.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-tropicam-orange shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={16} className="text-tropicam-orange shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={16} className="text-tropicam-orange shrink-0" />
                <a href="mailto:contact@tropicamvoyage.com" className="hover:text-white transition-colors">contact@tropicamvoyage.com</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Popular Destinations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-tropicam-orange rounded-full"></span>
              Destinations
            </h4>
            <ul className="space-y-3">
              <li><Link to="/voyage-turquie" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Voyage Turquie</Link></li>
              <li><Link to="/voyage-dubai" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Voyage Dubaï</Link></li>
              <li><Link to="/omra-2025" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Omra 2025</Link></li>
              <li><Link to="/packages?cat=Maldives" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Séjour Maldives</Link></li>
              <li><Link to="/packages?cat=Europe" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Europe & Visa</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-tropicam-orange rounded-full"></span>
              Nos Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/packages" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Voyages Organisés</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Billetterie Aérienne</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Réservation Hôtels</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm hover:translate-x-1 inline-block">Devis Sur Mesure</Link></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors text-sm hover:translate-x-1 inline-block font-bold flex items-center gap-1"><MessageCircle size={14} /> Support WhatsApp</a></li>
            </ul>
          </div>

          {/* Column 4: Links & Trust */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-tropicam-orange rounded-full"></span>
              Liens Utiles
            </h4>
            <ul className="space-y-3 mb-6">
              <li><Link to="/about" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm">À Propos</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm">Blog Voyage</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-tropicam-orange transition-colors text-sm">Contactez-nous</Link></li>
            </ul>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="font-bold text-white text-sm mb-2">Paiement 100% Sécurisé</p>
              <div className="flex gap-2 opacity-80">
                <div className="h-6 w-10 bg-white rounded flex items-center justify-center text-[8px] text-blue-800 font-bold">VISA</div>
                <div className="h-6 w-10 bg-white rounded flex items-center justify-center text-[8px] text-red-600 font-bold">MC</div>
                <div className="h-6 w-10 bg-white rounded flex items-center justify-center text-[8px] text-blue-600 font-bold">CMI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-8 mb-8">
          <div className="flex items-center justify-center gap-3 bg-white/5 py-3 rounded-lg">
            <CheckCircle className="text-green-400" size={20} />
            <span className="text-sm font-medium">Agence Agréée Min. Tourisme</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/5 py-3 rounded-lg">
            <ShieldCheck className="text-tropicam-orange" size={20} />
            <span className="text-sm font-medium">Licence N° {LICENSE_NUMBER}</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/5 py-3 rounded-lg">
            <CreditCard className="text-blue-400" size={20} />
            <span className="text-sm font-medium">Paiement Sécurisé CMI</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Tropicam Voyage. Tous droits réservés.
          </p>

          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-all hover:-translate-y-1 text-white">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#fd5949] hover:to-[#d6249f] transition-all hover:-translate-y-1 text-white">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] transition-all hover:-translate-y-1 text-white">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;