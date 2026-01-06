import React from 'react';
import { Clock, Check, Users, ArrowRight, MessageCircle, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Package } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  // Calculate pricing logic (simulated for demo if not in data)
  const originalPrice = Math.round(pkg.price * 1.25); // Fake original price (+25%)
  const savings = originalPrice - pkg.price;

  // Random "seats left" for scarcity effect (between 2 and 8)
  const seatsLeft = Math.floor(Math.random() * 7) + 2;

  // Function to create pre-filled WhatsApp message
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Bonjour ! Je suis intéressé par le voyage "${pkg.title}" à ${pkg.price} MAD. Est-il toujours disponible ?`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Link to={`/packages/${pkg.id}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {pkg.featured && (
            <span className="bg-tropicam-orange text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg">
              <Flame size={10} /> Coup de Coeur
            </span>
          )}
          {seatsLeft <= 5 && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
              Dernières Places
            </span>
          )}
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3 text-white flex items-center gap-1 text-xs font-bold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg">
          <Clock size={12} /> {pkg.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-tropicam-navy mb-2 line-clamp-2 group-hover:text-tropicam-orange transition-colors">
          {pkg.title}
        </h3>

        {/* Destination */}
        <p className="text-gray-500 text-sm mb-4 font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-tropicam-orange"></span>
          {pkg.destination}
        </p>

        {/* Features Checklist */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> Vol inclus</span>
          <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> Hôtel 4★</span>
          <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> Petit-déj</span>
        </div>

        {/* Pricing Section (CRITICAL FIX #2) */}
        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-end justify-between mb-1">
            <div>
              <span className="block text-xs text-gray-400 line-through decoration-red-400">
                {originalPrice.toLocaleString()} MAD
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-tropicam-navy">
                  {pkg.price.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-tropicam-navy">MAD</span>
              </div>
            </div>
            <div className="text-right">
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full block mb-1">
                Éco {savings} MAD
              </span>
              <span className="text-xs text-gray-400">/personne</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-5 gap-2 mt-3">
            <button
              className="col-span-3 bg-tropicam-navy group-hover:bg-tropicam-orange text-white py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-tropicam-navy/20 group-hover:shadow-orange-500/30 flex items-center justify-center gap-1"
            >
              Voir l'offre <ArrowRight size={16} />
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="col-span-2 bg-green-50 text-green-600 hover:bg-green-500 hover:text-white py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1"
              title="Discuter sur WhatsApp"
            >
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;