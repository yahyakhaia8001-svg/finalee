import React, { useState, useEffect } from 'react';
import { Check, MapPin, Clock } from 'lucide-react';

const notifications = [
    { name: 'Fatima Z.', city: 'Casablanca', action: 'a réservé', destination: 'Turquie Istanbul', time: '5 min' },
    { name: 'Ahmed M.', city: 'Rabat', action: 'a réservé', destination: 'Omra VIP', time: '12 min' },
    { name: 'Karim B.', city: 'Marrakech', action: 'demande un devis', destination: 'Dubaï', time: '18 min' },
    { name: 'Sara L.', city: 'Tanger', action: 'a réservé', destination: 'Maldives', time: '25 min' },
    { name: 'Youssef T.', city: 'Fès', action: 'demande un devis', destination: 'Espagne', time: '32 min' },
    { name: 'Nadia K.', city: 'Agadir', action: 'a réservé', destination: 'Thaïlande', time: '45 min' },
];

const SocialProofNotification: React.FC = () => {
    const [currentNotification, setCurrentNotification] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Don't show if user has dismissed
        if (hasInteracted) return;

        // Initial delay before first notification
        const initialDelay = setTimeout(() => {
            setIsVisible(true);
        }, 8000);

        return () => clearTimeout(initialDelay);
    }, [hasInteracted]);

    useEffect(() => {
        if (!isVisible || hasInteracted) return;

        // Auto-hide after 5 seconds
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        // Show next notification after 7 seconds
        const nextTimer = setTimeout(() => {
            setCurrentNotification(prev => (prev + 1) % notifications.length);
            setIsVisible(true);
        }, 15000);

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(nextTimer);
        };
    }, [isVisible, currentNotification, hasInteracted]);

    const handleDismiss = () => {
        setIsVisible(false);
        setHasInteracted(true);
    };

    const notification = notifications[currentNotification];

    return (
        <div
            className={`fixed bottom-24 left-4 z-50 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
        >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-xs relative">
                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs font-bold transition-colors"
                >
                    ×
                </button>

                <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 bg-gradient-to-br from-tropicam-orange to-orange-400 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                        {notification.name[0]}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800">
                            <span className="font-bold">{notification.name}</span> {notification.action}{' '}
                            <span className="font-bold text-tropicam-orange">{notification.destination}</span>
                        </p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                                <MapPin size={10} />
                                {notification.city}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock size={10} />
                                Il y a {notification.time}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Verified badge */}
                <div className="flex items-center gap-1 mt-3 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit">
                    <Check size={12} />
                    <span>Vérifié par Tropicam</span>
                </div>
            </div>
        </div>
    );
};

export default SocialProofNotification;
