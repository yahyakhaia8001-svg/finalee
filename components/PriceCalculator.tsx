import React, { useState } from 'react';
import { Calculator, Users, Calendar, MapPin, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const destinations = [
    { name: 'Turquie (Istanbul)', basePrice: 6500, perPerson: 5500 },
    { name: 'Dubaï & Abu Dhabi', basePrice: 9900, perPerson: 8500 },
    { name: 'Omra 2025', basePrice: 15900, perPerson: 14500 },
    { name: 'Espagne (Barcelone)', basePrice: 8500, perPerson: 7200 },
    { name: 'Thaïlande', basePrice: 18000, perPerson: 16000 },
    { name: 'Maldives', basePrice: 25000, perPerson: 22000 },
];

const PriceCalculator: React.FC = () => {
    const [destination, setDestination] = useState(destinations[0].name);
    const [travelers, setTravelers] = useState(2);
    const [duration, setDuration] = useState(7);
    const [hotelLevel, setHotelLevel] = useState('4');

    const selectedDest = destinations.find(d => d.name === destination) || destinations[0];

    // Calculate price
    const basePrice = selectedDest.basePrice;
    const perPersonPrice = selectedDest.perPerson;
    const hotelMultiplier = hotelLevel === '5' ? 1.4 : hotelLevel === '3' ? 0.75 : 1;
    const durationMultiplier = duration > 7 ? 1 + (duration - 7) * 0.1 : 1;

    const totalPrice = Math.round(
        (basePrice + (travelers - 1) * perPersonPrice) * hotelMultiplier * durationMultiplier
    );

    const handleWhatsApp = () => {
        const message = `Bonjour ! Je souhaite un devis pour:\n\n📍 Destination: ${destination}\n👥 Voyageurs: ${travelers}\n📅 Durée: ${duration} jours\n🏨 Hôtel: ${hotelLevel}★\n💰 Estimation: ${totalPrice.toLocaleString()} MAD\n\nMerci de me contacter !`;
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="bg-gradient-to-br from-tropicam-navy via-blue-900 to-tropicam-navy rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tropicam-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-tropicam-orange rounded-xl flex items-center justify-center">
                        <Calculator size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Calculateur de Prix</h3>
                        <p className="text-sm text-gray-300">Estimez votre voyage en 30 secondes</p>
                    </div>
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Destination */}
                    <div>
                        <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                            <MapPin size={14} />
                            Destination
                        </label>
                        <select
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-tropicam-orange outline-none"
                        >
                            {destinations.map((d, idx) => (
                                <option key={idx} value={d.name} className="text-gray-800">{d.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Travelers */}
                    <div>
                        <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                            <Users size={14} />
                            Nombre de voyageurs
                        </label>
                        <select
                            value={travelers}
                            onChange={(e) => setTravelers(Number(e.target.value))}
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-tropicam-orange outline-none"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                <option key={n} value={n} className="text-gray-800">{n} {n === 1 ? 'personne' : 'personnes'}</option>
                            ))}
                        </select>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                            <Calendar size={14} />
                            Durée du séjour
                        </label>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-tropicam-orange outline-none"
                        >
                            {[5, 6, 7, 8, 10, 12, 14].map(d => (
                                <option key={d} value={d} className="text-gray-800">{d} jours / {d - 1} nuits</option>
                            ))}
                        </select>
                    </div>

                    {/* Hotel Level */}
                    <div>
                        <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                            <Sparkles size={14} />
                            Niveau d'hôtel
                        </label>
                        <div className="flex gap-2">
                            {['3', '4', '5'].map(level => (
                                <button
                                    key={level}
                                    onClick={() => setHotelLevel(level)}
                                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${hotelLevel === level
                                            ? 'bg-tropicam-orange text-white'
                                            : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                >
                                    {level}★
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Result */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-white/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-300">Prix estimé (tout compris)</p>
                            <div className="flex items-baseline gap-2 mt-1">
                                <span className="text-4xl font-extrabold">{totalPrice.toLocaleString()}</span>
                                <span className="text-xl">MAD</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">soit ~{Math.round(totalPrice / travelers).toLocaleString()} MAD/personne</p>
                        </div>
                        <div className="text-right">
                            <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                Vol + Hôtel + Transferts
                            </span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
                >
                    <MessageCircle size={20} />
                    Recevoir mon devis exact
                    <ChevronRight size={18} />
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                    * Prix indicatif. Devis personnalisé gratuit en 5 min.
                </p>
            </div>
        </div>
    );
};

export default PriceCalculator;
