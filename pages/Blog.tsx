import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState(MOCK_BLOG_POSTS);

  useEffect(() => {
    // Update Title
    document.title = "Blog Voyage - Conseils & Inspirations | Tropicam Voyage";

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Découvrez le blog de Tropicam Voyage : guides complets, conseils pratiques et inspirations pour vos voyages en Turquie, à Dubaï, pour l'Omra et partout dans le monde depuis le Maroc.");

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', "blog voyage maroc, conseils voyageurs marocains, omra 2025, voyage organisé turquie, vacances dubai, agence voyage casablanca, tourisme maroc");

  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
                <h1 className="font-heading text-4xl font-bold text-tropicam-navy mb-2">Le Blog Voyage</h1>
                <p className="text-gray-500">Conseils, astuces et inspiration pour vos prochaines aventures.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                    <Link to={`/blog/${post.id}`} className="h-48 overflow-hidden relative block">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-tropicam-navy text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                            {post.category}
                        </span>
                    </Link>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-gray-400 mb-2">{post.date}</div>
                        <Link to={`/blog/${post.id}`}>
                            <h2 className="font-heading text-xl font-bold text-tropicam-navy mb-3 leading-tight hover:text-tropicam-orange transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                            {post.excerpt}
                        </p>
                        <Link to={`/blog/${post.id}`} className="text-tropicam-orange font-bold text-sm hover:underline self-start mt-auto flex items-center gap-1">
                            Lire la suite →
                        </Link>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;