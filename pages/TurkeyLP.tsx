import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Bus, Camera, Clock, Users, MessageCircle, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { PACKAGES, WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';

const TurkeyLP: React.FC = () => {
    const turkeyPackages = PACKAGES.filter(p => p.destination === 'Turquie');

    const highlights = [
        { icon: Plane, text: 'Vols directs RAM depuis Casablanca' },
        { icon: Hotel, text: 'Hôtels 4★ et 5★ en centre-ville' },
        { icon: Bus, text: 'Transferts privés inclus' },
        { icon: Camera, text: 'Excursions guidées en français' },
    ];

    const itinerary = [
        { day: 'Jour 1', title: 'Arrivée à Istanbul', desc: 'Accueil aéroport, transfert hôtel, dîner de bienvenue' },
        { day: 'Jour 2', title: 'Vieille Ville', desc: 'Sainte-Sophie, Mosquée Bleue, Grand Bazar' },
        { day: 'Jour 3', title: 'Bosphore', desc: 'Croisière sur le Bosphore, Palais Dolmabahçe' },
        { day: 'Jour 4-5', title: 'Cappadoce', desc: 'Vol en montgolfière, vallées féeriques' },
        { day: 'Jour 6-7', title: 'Retour Istanbul', desc: 'Temps libre shopping, transfert aéroport' },
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par un voyage organisé en Turquie. Pouvez-vous me donner plus d\'informations ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop"
                    alt="Voyage organisé Turquie Istanbul"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Star size={12} className="text-yellow-400 fill-current" />
                        Destination N°1 des Marocains
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Voyage Organisé en <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Turquie</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Istanbul, Cappadoce, Antalya — Découvrez la magie de la Turquie avec Tropicam Voyage. Tout compris, sans visa, au départ du Maroc.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={20} />
                            Réserver via WhatsApp
                        </button>
                        <Link
                            to="/contact"
                            className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Demander un Devis
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Sans Visa pour Marocains</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> À partir de 6,500 MAD</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Départs chaque semaine</span>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {highlights.map((item, idx) => (
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

            {/* Itinerary */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Programme Type 7 Jours</h2>
                    <p className="text-gray-500">Un itinéraire pensé pour découvrir le meilleur de la Turquie</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {itinerary.map((item, idx) => (
                        <div key={idx} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-tropicam-navy text-white rounded-xl flex flex-col items-center justify-center shrink-0">
                                <span className="text-xs opacity-70">JOUR</span>
                                <span className="font-bold">{item.day.split(' ')[1]}</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-tropicam-navy mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à Découvrir la Turquie ?</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Contactez-nous maintenant pour recevoir votre devis personnalisé gratuit. Réponse garantie en 5 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            WhatsApp : {PHONE_NUMBER}
                        </button>
                    </div>
                    <p className="mt-6 text-gray-400 text-sm flex items-center justify-center gap-2">
                        <ShieldCheck size={16} />
                        Agence Agréée N° {LICENSE_NUMBER}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TurkeyLP;
