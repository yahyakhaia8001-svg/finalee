import React, { useState, useEffect } from 'react';
import { Flame, Clock, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const DealBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                // Reset to 24 hours when it reaches 0
                return { hours: 23, minutes: 59, seconds: 59 };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-2 md:py-3 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%200h20v20H0zm20%2020h20v20H20z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-slide"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
                    {/* Fire icon */}
                    <div className="hidden sm:flex items-center gap-2">
                        <Flame className="animate-pulse" size={20} />
                        <span className="font-bold text-sm md:text-base">OFFRE FLASH</span>
                    </div>

                    {/* Message */}
                    <div className="flex items-center gap-2 text-sm md:text-base">
                        <span className="font-medium">Turquie dès <span className="font-extrabold text-yellow-300">6,500 MAD</span></span>
                        <span className="hidden md:inline">•</span>
                        <span className="hidden md:inline font-medium">Économisez jusqu'à <span className="font-extrabold">-30%</span></span>
                    </div>

                    {/* Countdown */}
                    <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                        <Clock size={14} />
                        <span className="font-mono font-bold text-sm">
                            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                    </div>

                    {/* CTA */}
                    <Link
                        to="/packages?cat=Turquie"
                        className="bg-white text-red-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap"
                    >
                        Je fonce →
                    </Link>

                    {/* Close */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center hover:bg-black/20 rounded-full transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DealBanner;
