import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../constants';

const GoogleReviewsWidget: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Calculate average rating
    const averageRating = GOOGLE_REVIEWS.reduce((acc, r) => acc + r.rating, 0) / GOOGLE_REVIEWS.length;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % GOOGLE_REVIEWS.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const nextReview = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(prev => (prev + 1) % GOOGLE_REVIEWS.length);
    };

    const prevReview = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(prev => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
    };

    const review = GOOGLE_REVIEWS[currentIndex];

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 relative overflow-hidden">
            {/* Google Branding */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 text-sm">Avis Google</p>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-800">{averageRating.toFixed(1)}</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className={i < Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-200'}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-gray-400">({GOOGLE_REVIEWS.length} avis)</span>
                        </div>
                    </div>
                </div>
                <a
                    href="https://g.page/r/tropicam-voyage/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                >
                    Voir tous <ExternalLink size={12} />
                </a>
            </div>

            {/* Review Card */}
            <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-tropicam-orange/10" size={60} />

                <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={18}
                                className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}
                            />
                        ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed mb-4 min-h-[60px]">
                        "{review.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-tropicam-navy to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                            {review.avatar}
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{review.name}</p>
                            <p className="text-xs text-gray-400">{review.date}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                    {GOOGLE_REVIEWS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-tropicam-orange w-6' : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={prevReview}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={nextReview}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleReviewsWidget;
