import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Check, X, MapPin, Calendar, Users, ChevronRight, Clock, MessageCircle, Phone, Shield, Eye, Flame } from 'lucide-react';
import { PACKAGES, WHATSAPP_LINK, LICENSE_NUMBER, PHONE_NUMBER, GOOGLE_REVIEWS } from '../constants';
import PaymentTrust from '../components/PaymentTrust';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';

const PackageDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const pkg = PACKAGES.find(p => p.id === id);

    if (!pkg) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-4 text-center">
                <h1 className="text-2xl font-bold text-tropicam-navy mb-4">Package non trouvé</h1>
                <Link to="/packages" className="text-tropicam-orange hover:underline">
                    Retour aux packages
                </Link>
            </div>
        );
    }

    // Calculate prices
    const originalPrice = Math.round(pkg.price * 1.2);
    const savings = originalPrice - pkg.price;

    // Fake data for demo
    const seatsLeft = Math.floor(Math.random() * 6) + 3;
    const viewers = Math.floor(Math.random() * 15) + 5;

    const departureDates = [
        { date: '15 Février 2025', available: true },
        { date: '22 Février 2025', available: true },
        { date: '1 Mars 2025', available: false },
        { date: '8 Mars 2025', available: true },
    ];

    const inclusions = [
        'Vol aller-retour depuis le Maroc',
        `Hébergement ${pkg.duration} en hôtel 4★`,
        'Petit-déjeuner quotidien',
        'Transferts aéroport',
        'Guide francophone',
        'Visites selon programme',
        'Assurance voyage',
    ];

    const exclusions = [
        'Repas non mentionnés',
        'Pourboires',
        'Dépenses personnelles',
        'Visa (si applicable)',
    ];

    const handleWhatsApp = () => {
        const message = `Bonjour ! Je suis intéressé(e) par le voyage "${pkg.title}" à ${pkg.price.toLocaleString()} MAD. Je souhaite plus d'informations.`;
        window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-tropicam-orange">Accueil</Link>
                        <ChevronRight size={14} />
                        <Link to="/packages" className="hover:text-tropicam-orange">Voyages</Link>
                        <ChevronRight size={14} />
                        <span className="text-tropicam-navy font-medium truncate">{pkg.title}</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-8">
                {/* Viewing Indicator */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
                        <Eye size={14} />
                        <span className="font-medium">{viewers} personnes regardent cette offre</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hero Image */}
                        <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[450px]">
                            <img
                                src={pkg.image}
                                alt={pkg.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                {pkg.featured && (
                                    <span className="bg-tropicam-orange text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                        <Flame size={12} />
                                        Coup de Coeur
                                    </span>
                                )}
                                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                    Départ Garanti
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex items-center gap-2 text-sm mb-2">
                                    <Clock size={16} />
                                    <span>{pkg.duration}</span>
                                </div>
                                <h1 className="text-2xl md:text-4xl font-extrabold">{pkg.title}</h1>
                                <p className="text-white/80 flex items-center gap-1 mt-1">
                                    <MapPin size={14} />
                                    {pkg.destination}
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="text-gray-600 text-sm">(127 avis vérifiés)</span>
                            <div className="flex gap-2">
                                {pkg.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs bg-blue-50 text-tropicam-navy px-2 py-1 rounded-full font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-bold text-tropicam-navy mb-4">À Propos de ce Voyage</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Découvrez {pkg.destination} avec Tropicam Voyage ! Ce forfait tout compris de {pkg.duration} vous emmène
                                à la découverte des plus beaux sites de cette destination exceptionnelle. Avec notre équipe expérimentée
                                et nos partenaires locaux de confiance, vivez une expérience inoubliable en toute sérénité.
                            </p>
                        </div>

                        {/* Inclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="font-bold text-tropicam-navy mb-4 flex items-center gap-2">
                                    <Check className="text-green-600" size={20} />
                                    Ce qui est inclus
                                </h3>
                                <ul className="space-y-3">
                                    {inclusions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50 rounded-2xl p-6">
                                <h3 className="font-bold text-tropicam-navy mb-4 flex items-center gap-2">
                                    <X className="text-red-500" size={20} />
                                    Non inclus
                                </h3>
                                <ul className="space-y-3">
                                    {exclusions.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sample Itinerary */}
                        <div>
                            <h2 className="text-xl font-bold text-tropicam-navy mb-4">Programme Indicatif</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                                    <div className="w-14 h-14 bg-tropicam-navy text-white rounded-xl flex flex-col items-center justify-center shrink-0">
                                        <span className="text-[10px] opacity-70">JOUR</span>
                                        <span className="font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-tropicam-navy">Départ du Maroc</h4>
                                        <p className="text-gray-500 text-sm">Vol vers {pkg.destination}, accueil à l'aéroport, transfert à l'hôtel et installation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                                    <div className="w-14 h-14 bg-tropicam-orange text-white rounded-xl flex flex-col items-center justify-center shrink-0">
                                        <span className="text-[10px] opacity-70">JOUR</span>
                                        <span className="font-bold">2-{parseInt(pkg.duration) - 1}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-tropicam-navy">Découverte & Visites</h4>
                                        <p className="text-gray-500 text-sm">Visites guidées des principaux sites, activités et découvertes selon le programme détaillé.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100">
                                    <div className="w-14 h-14 bg-gray-200 text-tropicam-navy rounded-xl flex flex-col items-center justify-center shrink-0">
                                        <span className="text-[10px] opacity-70">JOUR</span>
                                        <span className="font-bold">{parseInt(pkg.duration) || 7}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-tropicam-navy">Retour au Maroc</h4>
                                        <p className="text-gray-500 text-sm">Transfert à l'aéroport et vol retour vers le Maroc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reviews */}
                        <GoogleReviewsWidget />
                    </div>

                    {/* Sidebar - Sticky */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Price Card */}
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 overflow-hidden">
                                {/* Urgency Banner */}
                                <div className="bg-red-500 text-white text-center py-2 text-sm font-bold -mx-6 -mt-6 mb-6">
                                    🔥 Offre spéciale — Économisez {savings.toLocaleString()} MAD !
                                </div>

                                {/* Price */}
                                <div className="text-center mb-6">
                                    <div className="text-gray-400 line-through text-lg">{originalPrice.toLocaleString()} MAD</div>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-extrabold text-tropicam-navy">{pkg.price.toLocaleString()}</span>
                                        <span className="text-gray-500">MAD</span>
                                    </div>
                                    <div className="text-sm text-gray-500">par personne</div>
                                    <div className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                                        🎉 Économisez {savings.toLocaleString()} MAD
                                    </div>
                                </div>

                                {/* Availability Warning */}
                                <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 mb-6">
                                    <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
                                        <Flame size={16} />
                                        Plus que {seatsLeft} places disponibles !
                                    </div>
                                </div>

                                {/* Departure Dates */}
                                <div className="mb-6">
                                    <h4 className="font-bold text-tropicam-navy mb-3 flex items-center gap-2">
                                        <Calendar size={16} />
                                        Prochains Départs
                                    </h4>
                                    <div className="space-y-2">
                                        {departureDates.map((d, idx) => (
                                            <div
                                                key={idx}
                                                className={`flex items-center justify-between p-2 rounded-lg text-sm ${d.available ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-400 line-through'
                                                    }`}
                                            >
                                                <span>{d.date}</span>
                                                <span className="text-xs font-bold">
                                                    {d.available ? 'Disponible' : 'Complet'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTAs */}
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-3 shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5"
                                >
                                    <MessageCircle size={20} />
                                    Réserver via WhatsApp
                                </button>
                                <p className="text-center text-xs text-gray-500 mb-4">Réponse en moins de 5 minutes</p>

                                <a
                                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                                    className="w-full bg-tropicam-navy hover:bg-blue-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                                >
                                    <Phone size={18} />
                                    {PHONE_NUMBER}
                                </a>

                                {/* Trust Badges */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Shield size={12} className="text-green-500" />
                                            Agence Agréée N° {LICENSE_NUMBER}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Check size={12} className="text-green-500" />
                                            Paiement Sécurisé
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Trust */}
                            <PaymentTrust />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl p-4 lg:hidden z-50">
                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <div className="text-xs text-gray-500 line-through">{originalPrice.toLocaleString()} MAD</div>
                        <div className="font-extrabold text-tropicam-navy text-xl">{pkg.price.toLocaleString()} MAD</div>
                    </div>
                    <button
                        onClick={handleWhatsApp}
                        className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"
                    >
                        <MessageCircle size={18} />
                        Réserver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PackageDetail;
