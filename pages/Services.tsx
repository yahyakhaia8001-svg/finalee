import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, FAQ_ITEMS, LICENSE_NUMBER } from '../constants';
import { Plane, Building, FileCheck, Moon, Car, Map, ArrowRight, ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from 'lucide-react';

const iconMap: any = {
    Plane: Plane,
    Building: Building,
    FileCheck: FileCheck,
    Moon: Moon,
    Car: Car,
    Map: Map
};

const Services: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                    <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Nos Services Voyage au Maroc</span>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-tropicam-navy mb-4 md:mb-6">Une Agence de Voyage Complète pour Tous Vos Besoins</h1>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                        Billets d'avion, réservation d'hôtel, assistance Visa ou voyage organisé clé en main. Tropicam s'occupe de tout pour que vous voyagiez l'esprit tranquille.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {SERVICES_LIST.map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <div key={service.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-tropicam-navy rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-tropicam-navy group-hover:text-white transition-colors duration-300">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-tropicam-navy mb-3 group-hover:text-tropicam-orange transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 mb-6 leading-relaxed text-sm md:text-base">
                                    {service.description}
                                </p>

                                {service.link.includes('http') ? (
                                    <a href={service.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-tropicam-navy hover:text-tropicam-orange transition-colors">
                                        Demander un devis <ArrowRight size={16} />
                                    </a>
                                ) : (
                                    <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-bold text-tropicam-navy hover:text-tropicam-orange transition-colors">
                                        En savoir plus <ArrowRight size={16} />
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* FAQ Section */}
                <section className="mt-16 md:mt-24">
                    <div className="text-center mb-10 md:mb-12">
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 bg-tropicam-orange/10 rounded-2xl flex items-center justify-center">
                                <HelpCircle className="text-tropicam-orange" size={28} />
                            </div>
                        </div>
                        <h2 className="font-heading text-2xl md:text-4xl font-bold text-tropicam-navy mb-4">Questions Fréquentes</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Retrouvez les réponses aux questions les plus posées par nos voyageurs.</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {FAQ_ITEMS.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl border transition-all duration-300 ${openFaq === index ? 'border-tropicam-orange shadow-lg' : 'border-gray-100 shadow-sm'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                                >
                                    <span className={`font-bold text-sm md:text-base pr-4 ${openFaq === index ? 'text-tropicam-orange' : 'text-tropicam-navy'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-tropicam-orange text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </button>
                                {openFaq === index && (
                                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Trust Note */}
                    <div className="max-w-3xl mx-auto mt-8 flex items-center justify-center gap-3 text-sm text-gray-500 bg-green-50 p-4 rounded-xl">
                        <ShieldCheck className="text-green-600 shrink-0" size={20} />
                        <span>Tropicam Voyage est une agence agréée par le Ministère du Tourisme (Licence N° {LICENSE_NUMBER})</span>
                    </div>
                </section>

                {/* CTA Banner */}
                <div className="mt-12 md:mt-20 bg-gradient-to-r from-tropicam-navy to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un voyage sur mesure ?</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                            Voyages de groupe, séminaires d'entreprise ou Lune de Miel VIP. Nos experts à Settat construisent votre projet personnalisé.
                        </p>
                        <Link to="/contact" className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-block w-full md:w-auto">
                            Parler à un conseiller voyage
                        </Link>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-tropicam-orange/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
                </div>

            </div>
        </div>
    );
};

export default Services;