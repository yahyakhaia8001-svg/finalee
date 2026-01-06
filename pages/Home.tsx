import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Headset, Plane, Star, Check, Globe, Users, Map, Hotel, FileCheck, Car, Newspaper, Award, MapPin, ThumbsUp, MessageCircle, Flame, ArrowRight } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import GoogleReviewsWidget from '../components/GoogleReviewsWidget';
import PriceCalculator from '../components/PriceCalculator';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import { PACKAGES, TESTIMONIALS, PARTNERS, MOCK_BLOG_POSTS, STATS, LICENSE_NUMBER, GOOGLE_REVIEWS, WHATSAPP_LINK } from '../constants';

const ArrowIcon = () => <ArrowRight size={16} />;

const Home: React.FC = () => {
    const featuredPackages = PACKAGES.filter(p => p.featured).slice(0, 3);
    const latestPosts = MOCK_BLOG_POSTS.slice(0, 3);

    const popularDestinations = [
        { name: 'Turquie', displayName: 'Voyages Turquie', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop', count: '15+ Offres' },
        { name: 'Dubaï', displayName: 'Séjours Dubaï', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop', count: '9+ Offres' },
        { name: 'Espagne', displayName: 'Vacances Espagne', img: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop', count: '12+ Offres' },
        { name: 'Thailande', displayName: 'Exotisme Thaïlande', img: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?auto=format&fit=crop&w=1000&q=80', count: '5+ Offres' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Overlay & Image */}
                <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/40 to-tropicam-navy/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                    alt="Agence de voyage Maroc - Voyages organisés et Omra"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Content */}
                <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto mt-16 md:mt-0">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold mb-4 md:mb-6 tracking-widest uppercase">
                        <Star size={12} className="text-tropicam-orange fill-current" />
                        Agence de Voyage Agréée au Maroc
                        <Star size={12} className="text-tropicam-orange fill-current" />
                    </div>

                    <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
                        Votre Voyage de Rêve,<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Organisé de A à Z</span>
                    </h1>

                    <p className="text-gray-100 text-sm md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-4">
                        Rejoignez {STATS.travelers.toLocaleString()}+ voyageurs marocains qui nous font confiance. <br className="hidden md:block" />
                        Paiement en Dirhams, équipe locale à Casablanca & Settat.
                    </p>

                    {/* Urgency Banner (FIX #7) */}
                    <div className="inline-block bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm md:text-base mb-8 animate-pulse-slow shadow-lg border border-white/20">
                        🔥 Offre Limitée : -15% sur les voyages Turquie jusqu'au 28 Février
                    </div>

                    {/* Professional Search Box */}
                    <div className="bg-white p-3 rounded-2xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:gap-2">
                        <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-100 focus-within:ring-2 focus-within:ring-tropicam-orange/20 transition-all w-full">
                            <Map className="text-tropicam-orange shrink-0" size={24} />
                            <div className="text-left w-full">
                                <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Destination de rêve</label>
                                <input type="text" placeholder="Ex: Istanbul, Dubaï, La Mecque..." className="w-full bg-transparent focus:outline-none text-gray-800 font-bold placeholder-gray-400 text-sm md:text-base" />
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-100 focus-within:ring-2 focus-within:ring-tropicam-orange/20 transition-all w-full">
                            <Plane className="text-tropicam-orange shrink-0" size={24} />
                            <div className="text-left w-full">
                                <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Type de séjour</label>
                                <select className="w-full bg-transparent focus:outline-none text-gray-800 font-bold appearance-none cursor-pointer text-sm md:text-base">
                                    <option>Voyage Organisé (Pack)</option>
                                    <option>Omra & Hajj 2025</option>
                                    <option>Vol Uniquement</option>
                                    <option>Hôtel à la carte</option>
                                </select>
                            </div>
                        </div>

                        <Link to="/packages" className="bg-tropicam-navy hover:bg-tropicam-orange text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg md:w-auto w-full group shrink-0">
                            <Search size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="md:hidden lg:inline">Rechercher</span>
                        </Link>
                    </div>

                    <div className="mt-10">
                        <TrustBadges location="hero" />
                    </div>
                </div>
            </section>

            {/* Partners Strip */}
            <section className="bg-white py-10 md:py-12 border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto px-4">
                    <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 md:mb-10">Compagnies Aériennes Partenaires</p>

                    {/* Grid Layout for perfect responsive alignment */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
                        {PARTNERS.map((partner, index) => (
                            <div
                                key={index}
                                className="w-full h-16 md:h-20 flex items-center justify-center cursor-pointer group"
                            >
                                <img
                                    src={partner.logo}
                                    alt={`Logo ${partner.name} Maroc`}
                                    className="max-h-[35px] md:max-h-[50px] max-w-[120px] md:max-w-[140px] w-auto h-auto object-contain transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                        // Fallback to text if image fails
                                        e.currentTarget.style.display = 'none';
                                        const span = document.createElement('span');
                                        span.innerText = partner.name;
                                        span.className = "text-sm font-heading font-bold text-gray-400 group-hover:text-tropicam-navy transition-colors text-center";
                                        e.currentTarget.parentElement?.appendChild(span);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-12 md:py-16 bg-tropicam-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <div className="w-14 h-14 bg-tropicam-orange/20 rounded-2xl flex items-center justify-center">
                                    <Users className="text-tropicam-orange" size={28} />
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{STATS.travelers.toLocaleString()}+</div>
                            <div className="text-sm text-gray-300">Voyageurs Satisfaits</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <div className="w-14 h-14 bg-tropicam-orange/20 rounded-2xl flex items-center justify-center">
                                    <MapPin className="text-tropicam-orange" size={28} />
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{STATS.destinations}+</div>
                            <div className="text-sm text-gray-300">Destinations Mondiales</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <div className="w-14 h-14 bg-tropicam-orange/20 rounded-2xl flex items-center justify-center">
                                    <Award className="text-tropicam-orange" size={28} />
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{STATS.yearsExperience}</div>
                            <div className="text-sm text-gray-300">Années d'Expérience</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-3">
                                <div className="w-14 h-14 bg-tropicam-orange/20 rounded-2xl flex items-center justify-center">
                                    <ThumbsUp className="text-tropicam-orange" size={28} />
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{STATS.satisfaction}%</div>
                            <div className="text-sm text-gray-300">Taux de Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Destinations Grid */}
            <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Destinations Préférées des Marocains</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">Nos meilleures offres de voyages organisés au départ du Maroc.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                    {popularDestinations.map((dest, idx) => (
                        <Link to={`/packages?cat=${dest.name}`} key={idx} className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer h-48 md:h-[300px]">
                            <img src={dest.img} alt={`Voyage organisé ${dest.name} pas cher`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                                <h3 className="text-lg md:text-xl font-bold font-heading mb-1">{dest.displayName}</h3>
                                <p className="text-[10px] md:text-xs text-white/80 font-medium bg-white/20 inline-block px-2 py-1 rounded backdrop-blur-sm group-hover:bg-tropicam-orange transition-colors">
                                    {dest.count}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Services Highlights */}
            <section className="py-12 md:py-16 bg-blue-50/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        <Link to="/services" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-blue-50 text-tropicam-navy rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-tropicam-navy group-hover:text-white transition-colors">
                                <Plane size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Vols au Maroc</h3>
                            <p className="text-[10px] md:text-xs text-gray-500">Comparateur tarifs</p>
                        </Link>
                        <Link to="/services" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-orange-50 text-tropicam-orange rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-tropicam-orange group-hover:text-white transition-colors">
                                <Hotel size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Hôtels & Riads</h3>
                            <p className="text-[10px] md:text-xs text-gray-500">Sélection vérifiée</p>
                        </Link>
                        <Link to="/services" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <FileCheck size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Assistance Visa</h3>
                            <p className="text-[10px] md:text-xs text-gray-500">Dossier Complet</p>
                        </Link>
                        <Link to="/contact" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Users size={20} className="md:w-6 md:h-6" />
                            </div>
                            <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Sur Mesure</h3>
                            <p className="text-[10px] md:text-xs text-gray-500">Devis personnalisé</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                    <div>
                        <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Offres Tout Compris</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy leading-tight">
                            Nos Meilleurs Voyages Organisés
                        </h2>
                    </div>
                    <Link to="/packages" className="group flex items-center gap-2 text-tropicam-navy font-bold hover:text-tropicam-orange transition-colors text-sm md:text-base">
                        Voir tous les packs
                        <span className="bg-gray-100 p-2 rounded-full group-hover:bg-tropicam-orange group-hover:text-white transition-colors"><ArrowIcon /></span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {featuredPackages.map(pkg => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-10">
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-500/30 hover:-translate-y-0.5 transition-all"
                    >
                        <MessageCircle size={20} />
                        Discutez avec nous sur WhatsApp
                    </a>
                </div>
            </section>

            {/* Price Calculator Section */}
            <section className="py-12 md:py-20 bg-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Devis Instantané</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Estimez Votre Voyage en 30 Secondes</h2>
                            <p className="text-gray-500 mb-6">Plus besoin d'attendre ! Notre calculateur vous donne une estimation immédiate du prix de votre voyage. Recevez ensuite un devis personnalisé et détaillé gratuitement.</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Check className="text-green-500" size={20} />
                                    <span className="text-gray-700">Prix tout compris : vol + hôtel + transferts</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-green-500" size={20} />
                                    <span className="text-gray-700">Devis détaillé envoyé en 5 minutes</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-green-500" size={20} />
                                    <span className="text-gray-700">Sans engagement, 100% gratuit</span>
                                </div>
                            </div>
                        </div>
                        <PriceCalculator />
                    </div>
                </div>
            </section>

            {/* Omra Highlight Section */}
            <section className="py-16 md:py-24 bg-tropicam-navy relative overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-tropicam-orange rounded-full blur-[128px] opacity-20"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
                            <div className="inline-block border border-orange-500/30 bg-orange-500/10 backdrop-blur text-tropicam-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                                Organisation Omra Maroc 2025
                            </div>
                            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
                                Omra & Hajj <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-tropicam-orange">Départs Garantis</span>
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                Effectuez votre Omra en toute sérénité avec une agence agréée. Vols directs Royal Air Maroc ou Saudia, Hôtels proches du Haram et encadrement religieux francophone/arabophone.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-left">
                                <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                                    <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                                    <span className="font-medium text-sm">Visa Omra Inclus</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                                    <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                                    <span className="font-medium text-sm">Transferts Bus VIP</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                                    <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                                    <span className="font-medium text-sm">Hôtels Proches Haram</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                                    <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                                    <span className="font-medium text-sm">Guides Marocains</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link to="/packages?cat=Omra" className="bg-gradient-to-r from-tropicam-orange to-orange-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold shadow-xl shadow-orange-900/30 hover:scale-105 transition-transform inline-flex items-center gap-2">
                                    Consulter les programmes Omra
                                    <ArrowIcon />
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-full order-first md:order-last">
                            <div className="relative z-20 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop" alt="Pèlerinage La Mecque Omra" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Makkah Al Mukarramah</p>
                                    <p className="text-xs opacity-80">Départs chaque semaine depuis Casablanca</p>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-tropicam-orange/30 rounded-3xl -z-10 hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        <div className="text-center px-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-blue-50 text-tropicam-navy rounded-2xl flex items-center justify-center mb-6 shadow-sm rotate-3 hover:rotate-0 transition-all duration-300">
                                <ShieldCheck size={32} className="md:w-10 md:h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-tropicam-navy mb-3">Agence Agréée & Sécurisée</h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">Licence officielle du Ministère du Tourisme Marocain. Vos paiements en Dirhams sont 100% sécurisés avec facture officielle.</p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-orange-50 text-tropicam-orange rounded-2xl flex items-center justify-center mb-6 shadow-sm -rotate-3 hover:rotate-0 transition-all duration-300">
                                <Globe size={32} className="md:w-10 md:h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-tropicam-navy mb-3">Organisation De A à Z</h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">Vols, Transferts, Hôtels et Visites. Pas de mauvaise surprise sur place. Un programme clair et validé avant votre départ.</p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm rotate-3 hover:rotate-0 transition-all duration-300">
                                <Headset size={32} className="md:w-10 md:h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-tropicam-navy mb-3">Service Client Local</h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">Une équipe basée au Maroc à votre écoute 7j/7. Nous sommes joignables par téléphone, WhatsApp ou à notre agence à Casablanca.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="pt-12 md:pt-20 pb-8 md:pb-12 bg-gray-50 container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Avis Clients Tropicam Voyage</h2>
                    <div className="w-24 h-1 bg-tropicam-orange mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {TESTIMONIALS.map(testi => (
                        <div key={testi.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow relative border border-gray-100">
                            <div className="absolute -top-4 left-8 text-6xl text-tropicam-orange/20 font-serif">"</div>
                            <div className="flex gap-1 mb-4 md:mb-6 text-yellow-400">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10 text-sm md:text-base">{testi.text}</p>
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                                <div className="w-10 h-10 bg-tropicam-navy text-white rounded-full flex items-center justify-center font-bold">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-tropicam-navy text-sm">{testi.name}</h4>
                                    <span className="text-xs text-gray-500 flex items-center gap-1"><Map size={10} /> {testi.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 max-w-2xl mx-auto">
                    <GoogleReviewsWidget />
                </div>
            </section>

            {/* FAQ Section (FIX #6) */}
            <FAQSection />

            {/* Latest Blog Posts */}
            <section className="pt-8 md:pt-12 pb-12 md:pb-20 bg-white border-t border-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                        <div>
                            <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Conseils Voyageurs Marocains</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy leading-tight">
                                Guides & Actualités Voyage
                            </h2>
                        </div>
                        <Link to="/blog" className="group flex items-center gap-2 text-tropicam-navy font-bold hover:text-tropicam-orange transition-colors text-sm md:text-base">
                            Lire le blog
                            <span className="bg-gray-100 p-2 rounded-full group-hover:bg-tropicam-orange group-hover:text-white transition-colors"><ArrowIcon /></span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {latestPosts.map(post => (
                            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                                <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-2xl mb-4 relative aspect-[4/3]">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-tropicam-navy text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                                        {post.category}
                                    </div>
                                </Link>
                                <div className="flex-1 flex flex-col">
                                    <div className="text-xs text-gray-400 mb-2 font-medium flex items-center gap-2">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>5 min lecture</span>
                                    </div>
                                    <Link to={`/blog/${post.id}`}>
                                        <h3 className="font-heading text-xl font-bold text-tropicam-navy mb-3 leading-snug group-hover:text-tropicam-orange transition-colors">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <Link to={`/blog/${post.id}`} className="mt-auto text-tropicam-orange text-sm font-bold hover:underline self-start inline-flex items-center gap-1">
                                        Lire le guide
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-16 md:py-20 bg-tropicam-navy">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Promos & Bons Plans Voyage</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">Recevez nos offres exclusives "Dernière Minute" et nos guides de voyage avant tout le monde. Désinscription facile.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Votre email principal" className="px-6 py-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-tropicam-orange text-gray-800" />
                        <button className="bg-tropicam-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap">
                            Recevoir les offres
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};



export default Home;