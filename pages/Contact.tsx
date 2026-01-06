import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, LICENSE_NUMBER, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        destination: 'Turquie',
        budget: '5,000-10,000 MAD',
        date: '',
        travelers: 2,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create WhatsApp message
        const message = `Bonjour Tropicam Voyage !%0A%0AJe souhaite obtenir un devis GRATUIT :%0A%0A👤 Nom: ${formData.name}%0A📞 Tel: ${formData.phone}%0A✉️ Email: ${formData.email}%0A🌍 Destination: ${formData.destination}%0A💰 Budget: ${formData.budget}%0A📅 Départ: ${formData.date}%0A👥 Voyageurs: ${formData.travelers}%0A%0A📝 Message: ${formData.message}`;

        // Simulate submission delay then redirect
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            window.open(`https://wa.me/212608986949?text=${message}`, '_blank');
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-gray-50">
            {/* Header */}
            <div className="text-center mb-12 px-4">
                <h1 className="font-heading text-3xl md:text-5xl font-bold text-tropicam-navy mb-4">Contactez-nous</h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Nos experts voyage à Casablanca sont à votre écoute pour organiser votre séjour de rêve.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Contact Info Side */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-tropicam-navy mb-6">Nos Coordonnées</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-tropicam-navy rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Téléphone & WhatsApp</span>
                                        <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-tropicam-navy hover:text-tropicam-orange transition-colors">
                                            {PHONE_NUMBER}
                                        </a>
                                        <p className="text-sm text-green-600 font-medium mt-1 flex items-center gap-1">
                                            <Clock size={14} /> Réponse en 5 min sur WhatsApp
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-50 text-tropicam-orange rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Agence à Casablanca</span>
                                        <p className="text-lg font-medium text-tropicam-navy leading-relaxed">
                                            {ADDRESS}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Agence Agréée</span>
                                        <p className="text-lg font-medium text-tropicam-navy">
                                            Licence N° {LICENSE_NUMBER}
                                        </p>
                                        <p className="text-sm text-gray-500">Ministère du Tourisme</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="mt-8 rounded-2xl overflow-hidden h-64 border border-gray-200 shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.5600075531!2d-7.669394468647893!3d33.57240323277726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb118423d75d5f9f3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1652882292021!5m2!1sen!2sma"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Tropicam Voyage Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-tropicam-orange/10 relative overflow-hidden">

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-tropicam-navy">Demandez votre Devis Gratuit</h3>
                                    <p className="text-gray-500">Réponse garantie sous 24h (ou 5min via WhatsApp)</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all"
                                        placeholder="Ex: Mohamed Alami"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone / WhatsApp *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all"
                                            placeholder="+212 6XX XXX XXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Nombre de voyageurs</label>
                                        <input
                                            type="number"
                                            name="travelers"
                                            min="1"
                                            value={formData.travelers}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all"
                                        placeholder="nom@exemple.com"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Destination *</label>
                                        <select
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all bg-white"
                                        >
                                            <option value="Turquie">Turquie</option>
                                            <option value="Dubaï">Dubaï</option>
                                            <option value="Omra">Omra</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Europe">Europe</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Date de départ souhaitée</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Budget approximatif</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all bg-white"
                                    >
                                        <option value="Moins de 5,000 MAD">Moins de 5,000 MAD</option>
                                        <option value="5,000-10,000 MAD">5,000-10,000 MAD</option>
                                        <option value="10,000-20,000 MAD">10,000-20,000 MAD</option>
                                        <option value="Plus de 20,000 MAD">Plus de 20,000 MAD</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optionnel)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tropicam-navy focus:ring-4 focus:ring-tropicam-navy/10 outline-none transition-all resize-none"
                                        placeholder="Précisez vos besoins..."
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-tropicam-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transform transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                Obtenir Mon Devis Gratuit en 30s <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-xs text-gray-400 mt-4 flex justify-center items-center gap-2">
                                    <Shield size={12} /> Vos données sont 100% sécurisées et ne seront jamais partagées.
                                </p>
                            </form>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="text-green-600" size={48} />
                                </div>
                                <h3 className="text-3xl font-bold text-tropicam-navy mb-4">Message Envoyé !</h3>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    Merci ! Notre équipe a bien reçu votre demande. Nous allons vous contacter via WhatsApp dans les prochaines minutes.
                                </p>
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-green-600 transition-colors"
                                >
                                    <MessageCircle size={20} /> Discuter maintenant
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;