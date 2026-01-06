import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Plane, Hotel, Car, Sunrise, Clock, MessageCircle, ShieldCheck, Building2 } from 'lucide-react';
import { PACKAGES, WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER } from '../constants';

const DubaiLP: React.FC = () => {
    const highlights = [
        { icon: Plane, text: 'Vols Emirates ou Etihad' },
        { icon: Hotel, text: 'Hôtels 4★ Marina ou Downtown' },
        { icon: Car, text: 'Transferts VIP inclus' },
        { icon: Sunrise, text: 'Safari désert avec dîner' },
    ];

    const experiences = [
        { title: 'Burj Khalifa', desc: 'Montée au 124ème étage', img: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=500&auto=format&fit=crop' },
        { title: 'Safari Désert', desc: 'Dunes bashing + dîner BBQ', img: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=500&auto=format&fit=crop' },
        { title: 'Dubai Mall', desc: 'Shopping + Aquarium géant', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500&auto=format&fit=crop' },
        { title: 'Palm Jumeirah', desc: 'Atlantis + plages privées', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=500&auto=format&fit=crop' },
    ];

    const handleWhatsApp = () => {
        const message = 'Bonjour ! Je suis intéressé(e) par un séjour à Dubaï. Pouvez-vous me donner plus d\'informations ?';
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/50 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
                    alt="Séjour Dubaï depuis Maroc"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6 uppercase tracking-wider">
                        <Building2 size={12} className="text-tropicam-orange" />
                        Luxe Accessible aux Marocains
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Séjour à <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Dubaï</span>
                    </h1>

                    <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Gratte-ciels, désert, shopping et luxe — Vivez l'expérience Dubaï avec Tropicam Voyage. Visa facile, vol + hôtel tout compris.
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
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> Visa EAU Facile</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> À partir de 9,900 MAD</span>
                        <span className="flex items-center gap-2"><Check size={14} className="text-green-400" /> 7 Jours / 6 Nuits</span>
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

            {/* Experiences Grid */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Expériences Incluses</h2>
                    <p className="text-gray-500">Des moments inoubliables dans la ville des superlatifs</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {experiences.map((item, idx) => (
                        <div key={idx} className="relative rounded-2xl overflow-hidden h-48 md:h-64 group">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-sm text-white/80">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-tropicam-navy to-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Votre Séjour de Rêve à Dubaï</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Contactez-nous pour un devis personnalisé. Notre équipe répond en 5 min !
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleWhatsApp}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={20} />
                            {PHONE_NUMBER}
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

export default DubaiLP;
