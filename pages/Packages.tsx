import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import { PACKAGES, DESTINATION_CATEGORIES } from '../constants';
import { Filter } from 'lucide-react';

const Packages: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  
  // Parse query param for initial category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat) {
        // Simple mapping for demo
        const found = DESTINATION_CATEGORIES.find(c => c.value === cat);
        if (found) setSelectedCategory(found.value);
    }
  }, [location]);

  const filteredPackages = selectedCategory === 'Tous' 
    ? PACKAGES 
    : PACKAGES.filter(p => {
        if(selectedCategory === 'Asie') return ['Thaïlande', 'Malaisie', 'Bali'].includes(p.destination);
        if(selectedCategory === 'Europe') return ['France', 'Espagne', 'Italie'].includes(p.destination);
        if(selectedCategory === 'Omra') return p.destination === 'Arabie Saoudite';
        return p.destination === selectedCategory;
    });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Nos Voyages Organisés</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">Explorez nos offres exclusives vers les destinations les plus prisées. De la Turquie à Dubaï, en passant par l'Omra.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {DESTINATION_CATEGORIES.map((cat) => (
                <button
                    key={cat.label}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                        selectedCategory === cat.value
                        ? 'bg-tropicam-navy text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPackages.length > 0 ? (
                filteredPackages.map(pkg => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))
            ) : (
                <div className="col-span-full text-center py-20">
                    <div className="bg-white p-10 rounded-2xl shadow-sm inline-block">
                        <Filter className="mx-auto text-gray-300 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Aucun voyage trouvé</h3>
                        <p className="text-gray-500">Essayez de changer les filtres ou contactez-nous pour du sur-mesure.</p>
                    </div>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default Packages;