import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Clock, Share2 } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = MOCK_BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-gray-50">
        <h2 className="text-2xl font-bold text-tropicam-navy mb-4">Article non trouvé</h2>
        <Link to="/blog" className="text-tropicam-orange hover:underline font-bold">
          Retourner au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Header Image */}
        <div className="relative h-[50vh] min-h-[400px] md:h-[60vh] w-full overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10"></div>
             <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
             <div className="absolute bottom-0 left-0 w-full px-4 pt-4 pb-16 md:px-10 md:pb-20 z-20 text-white container mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 text-white hover:text-white mb-6 transition-all bg-black/50 hover:bg-tropicam-orange backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold shadow-lg border border-white/20 transform hover:-translate-y-0.5">
                    <ArrowLeft size={18} /> Retour au blog
                </Link>
                <div className="flex items-center gap-4 mb-4 text-sm font-medium animate-fade-in-up">
                    <span className="bg-tropicam-orange px-3 py-1 rounded-md shadow-sm">{post.category}</span>
                    <span className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded backdrop-blur-sm"><Calendar size={14} /> {post.date}</span>
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight max-w-4xl drop-shadow-lg mb-2 animate-fade-in-up delay-100">
                    {post.title}
                </h1>
             </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-30">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 max-w-4xl mx-auto">
                {/* Author & Share */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-8 mb-8">
                    <div className="flex items-center gap-3">
                         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-tropicam-navy">
                            T
                         </div>
                         <div>
                            <p className="font-bold text-tropicam-navy text-sm">Équipe Tropicam</p>
                            <p className="text-xs text-gray-500">Expert Voyage</p>
                         </div>
                    </div>
                    <button className="text-gray-400 hover:text-tropicam-orange transition-colors p-2 rounded-full hover:bg-gray-50">
                        <Share2 size={20} />
                    </button>
                </div>

                {/* Main Article Body */}
                <div className="prose prose-lg prose-blue max-w-none font-sans text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>

                {/* Footer CTA */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="bg-blue-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-heading font-bold text-xl text-tropicam-navy mb-2">Envie de vivre cette expérience ?</h3>
                            <p className="text-gray-600 text-sm">Nos conseillers sont là pour organiser votre voyage sur mesure.</p>
                        </div>
                        <Link to="/contact" className="bg-tropicam-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all hover:-translate-y-1 whitespace-nowrap">
                            Demander un Devis
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default BlogPost;