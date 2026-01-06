import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

// Supplement default FAQs with the requested ones if needed, or just use these specific ones
const HOME_FAQS = [
    {
        question: "Comment réserver un voyage avec Tropicam Voyage ?",
        answer: "Vous pouvez réserver directement via WhatsApp, par téléphone au +212 6 08 98 69 49, ou en remplissant notre formulaire de devis. Notre équipe vous répond en moins de 5 minutes !"
    },
    {
        question: "Quels modes de paiement acceptez-vous ?",
        answer: "Nous acceptons les virements bancaires, les paiements par carte (CMI), Cash Plus, et Wafacash. Le paiement en plusieurs fois est possible."
    },
    {
        question: "L'agence est-elle agréée par le Ministère du Tourisme ?",
        answer: "Oui, Tropicam Voyage est une agence agréée avec tous les documents légaux. Nous sommes basés à Casablanca & Settat."
    },
    {
        question: "Puis-je annuler ma réservation ?",
        answer: "Oui, nous offrons une politique d'annulation flexible. Les conditions varient selon le forfait. Contactez-nous pour les détails."
    },
    {
        question: "Les vols sont-ils inclus dans les forfaits ?",
        answer: "Oui, tous nos voyages organisés incluent les vols aller-retour au départ de Casablanca ou d'autres villes marocaines."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">FAQ</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4 flex items-center justify-center gap-2">
                        Questions Fréquentes <HelpCircle className="text-tropicam-orange" />
                    </h2>
                    <div className="w-24 h-1 bg-tropicam-orange mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {HOME_FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg bg-white ring-1 ring-tropicam-orange/20' : 'bg-gray-50 hover:bg-white'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left font-bold text-tropicam-navy hover:text-tropicam-orange transition-colors"
                            >
                                <span className="text-sm md:text-base">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-tropicam-orange shrink-0" size={20} />
                                ) : (
                                    <ChevronDown className="text-gray-400 shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100/50 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
