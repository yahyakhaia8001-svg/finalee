import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Moon, Users, MessageCircle, ShieldCheck, Calendar, Heart } from 'lucide-react';
import { PACKAGES, WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';

const OmraLP: React.FC = () => {
    const omraPackages = PACKAGES.filter(p => p.destination === 'Arabie Saoudite');

    const inclusions = [
        { icon: Plane, text: 'Vol Royal Air Maroc ou Saudia' },
        { icon: Hotel, text: 'Hôtels 5★ proches du Haram' },
        { icon: Bus, text: 'Transferts bus VIP climatisé' },
        { icon: Users, text: 'Accompagnement religieux' },
    ];

    const formulas = [
        { name: 'Omra Économique', price: '15,900', features: ['Hôtel 3★', '500m du Haram', 'Départ groupe'], popular: false },
        { name: 'Omra Confort', price: '18,900', features: ['Hôtel 4★', '200m du Haram', 'Petit groupe'], popular: true },
        { name: 'Omra VIP', price: '25,900', features: ['Hôtel 5★', 'Face au Haram', 'Service premium'], popular: false },
    ];

    const handleWhatsApp = (formula?: string) => {
        const message = formula
            ? `Bonjour ! Je suis intéressé(e) par la formule ${formula} pour l'Omra 2025. Pouvez-vous me donner plus d'informations ?`
            : 'Bonjour ! Je souhaite des informations sur l\'Omra 2025 au départ du Maroc.';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2000&auto=format&fit=crop"
                    alt="Omra 2025 départ Maroc"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Moon size={12} className="text-yellow-400" />
                        Agence Agréée pour l'Omra
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Omra <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">2025</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Effectuez votre Omra avec une agence agréée. Hôtels proches du Haram, encadrement spirituel, et service de qualité.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleWhatsApp()}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Réserver Mon Omra
                        </button>
                        <Link
                            to="/contact"
                            className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Demander un Devis
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Visa Omra Inclus</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> À partir de 15,900 MAD</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Départs Ramadan 2025</span>
                    </div>
                </div>
            </section>

            {/* Inclusions */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {inclusions.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                <div className="w-12 h-12 bg-tropicam-orange/10 rounded-xl flex items-center justify-center shrink-0">
                                    <item.icon className="text-tropicam-orange" size={24} />
                                </div>
                                <span className="font-bold text-tropicam-navy text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Formules Omra 2025</h2>
                    <p className="text-gray-500">Choisissez la formule adaptée à vos besoins et votre budget</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {formulas.map((formula, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-2xl p-6 border-2 transition-all ${formula.popular ? 'border-tropicam-orange shadow-xl scale-105' : 'border-gray-100 shadow-sm'}`}
                        >
                            {formula.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tropicam-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                                    Plus Populaire
                                </div>
                            )}
                            <h3 className="font-bold text-xl text-tropicam-navy mb-2">{formula.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-3xl font-extrabold text-tropicam-navy">{formula.price}</span>
                                <span className="text-gray-500">MAD</span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {formula.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Check size={16} className="text-green-500" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handleWhatsApp(formula.name)}
                                className={`w-full py-3 rounded-xl font-bold transition-colors ${formula.popular ? 'bg-tropicam-orange text-white hover:bg-orange-600' : 'bg-gray-100 text-tropicam-navy hover:bg-gray-200'}`}
                            >
                                Choisir cette formule
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <Heart className="text-tropicam-orange mx-auto mb-6" size={48} />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Un Voyage Spirituel Serein</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Tropicam Voyage est une agence agréée par le Ministère du Tourisme pour l'organisation des voyages Omra et Hajj. Plus de 500 pèlerins nous ont fait confiance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleWhatsApp()}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Contactez-nous : {PHONE_NUMBER}
                        </button>
                    </div>
                    <p className="mt-6 text-gray-400 text-sm flex items-center justify-center gap-2">
                        <ShieldCheck size={16} />
                        Licence N° {LICENSE_NUMBER} — Agrément Ministère du Tourisme
                    </p>
                </div>
            </section>
        </div>
    );
};

export default OmraLP;
