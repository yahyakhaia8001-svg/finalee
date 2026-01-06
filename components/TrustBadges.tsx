import React from 'react';
import { CheckCircle, Users, ShieldCheck, Banknote } from 'lucide-react';

interface TrustBadgesProps {
    location?: 'hero' | 'footer' | 'sidebar';
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ location = 'hero' }) => {
    const isHero = location === 'hero';
    const isSidebar = location === 'sidebar';

    if (isSidebar) {
        return (
            <div className="flex flex-col gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>Agence Agréée Ministère</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-tropicam-orange" />
                    <span>Paiement 100% Sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                    <Banknote size={14} className="text-blue-500" />
                    <span>Remboursement Garanti</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-8 ${isHero ? 'text-white/90' : 'text-gray-600'} text-xs md:text-sm font-medium`}>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle size={16} className={isHero ? "text-tropicam-orange" : "text-green-500"} />
                <span>Agence Agréée Ministère Tourisme</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Users size={16} className={isHero ? "text-tropicam-orange" : "text-blue-500"} />
                <span>+5,000 Voyageurs Satisfaits</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <ShieldCheck size={16} className={isHero ? "text-tropicam-orange" : "text-tropicam-orange"} />
                <span>Paiement 100% Sécurisé</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Banknote size={16} className={isHero ? "text-tropicam-orange" : "text-purple-500"} />
                <span>Remboursement Garanti</span>
            </div>
        </div>
    );
};

export default TrustBadges;
