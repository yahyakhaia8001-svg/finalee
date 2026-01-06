import React, { useState, useEffect } from 'react';
import { X, Gift, Clock, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface ExitPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Countdown timer for urgency
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 });

    useEffect(() => {
        if (!isOpen) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            // In real app, send to email service
            setTimeout(() => {
                window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(`Bonjour ! Je souhaite recevoir mon code promo -10%. Mon email: ${email}`)}`, '_blank');
            }, 1500);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                    <X size={18} className="text-gray-600" />
                </button>

                {/* Header Image */}
                <div className="relative h-40 bg-gradient-to-r from-tropicam-navy to-blue-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800')] bg-cover bg-center opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                            <Gift className="mx-auto mb-2" size={40} />
                            <h3 className="text-2xl font-bold">Attendez !</h3>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    {!isSubmitted ? (
                        <>
                            <div className="text-center mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-tropicam-navy mb-2">
                                    -10% sur votre 1er voyage
                                </h2>
                                <p className="text-gray-500">
                                    Recevez votre code promo exclusif par WhatsApp
                                </p>
                            </div>

                            {/* Countdown */}
                            <div className="flex justify-center gap-3 mb-6">
                                <div className="bg-tropicam-navy text-white px-4 py-2 rounded-xl text-center">
                                    <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                                    <div className="text-[10px] uppercase tracking-wider opacity-70">Heures</div>
                                </div>
                                <div className="bg-tropicam-navy text-white px-4 py-2 rounded-xl text-center">
                                    <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                    <div className="text-[10px] uppercase tracking-wider opacity-70">Minutes</div>
                                </div>
                                <div className="bg-tropicam-orange text-white px-4 py-2 rounded-xl text-center">
                                    <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                    <div className="text-[10px] uppercase tracking-wider opacity-70">Secondes</div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Votre email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tropicam-orange/20 focus:border-tropicam-orange outline-none transition-all text-center"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-tropicam-orange hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
                                >
                                    Obtenir mon -10% <ArrowRight size={18} />
                                </button>
                            </form>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                Offre valable 48h • Désinscription facile
                            </p>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Gift className="text-green-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-tropicam-navy mb-2">Félicitations ! 🎉</h3>
                            <p className="text-gray-500">Vous allez recevoir votre code promo via WhatsApp...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExitPopup;
