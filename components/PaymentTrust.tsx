import React from 'react';
import { Shield, CreditCard, Banknote, CheckCircle } from 'lucide-react';

const PaymentTrust: React.FC = () => {
    return (
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-green-600" size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-tropicam-navy text-lg">Paiement 100% Sécurisé</h3>
                    <p className="text-sm text-gray-500">Vos transactions sont protégées</p>
                </div>
            </div>

            {/* Payment Method Logos */}
            <div className="grid grid-cols-5 gap-3 mb-6">
                {/* CMI */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-center h-14 hover:shadow-md transition-shadow">
                    <div className="text-center">
                        <CreditCard size={20} className="text-blue-600 mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-gray-500">CMI</span>
                    </div>
                </div>

                {/* Visa */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-center h-14 hover:shadow-md transition-shadow">
                    <svg viewBox="0 0 48 48" className="h-6 w-auto">
                        <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z" />
                        <path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z" />
                    </svg>
                </div>

                {/* Mastercard */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-center h-14 hover:shadow-md transition-shadow">
                    <svg viewBox="0 0 48 48" className="h-6 w-auto">
                        <path fill="#FF5722" d="M32,24c0,8.837-7.163,16-16,16S0,32.837,0,24S7.163,8,16,8S32,15.163,32,24z" />
                        <path fill="#FF9800" d="M48,24c0,8.837-7.163,16-16,16S16,32.837,16,24S23.163,8,32,8S48,15.163,48,24z" />
                        <path fill="#FF7043" d="M24,24c0-4.418,1.791-8.418,4.691-11.313C25.867,9.891,21.205,8,16,8C7.163,8,0,15.163,0,24s7.163,16,16,16c5.205,0,9.867-1.891,12.691-4.687C25.791,32.418,24,28.418,24,24z" />
                    </svg>
                </div>

                {/* Cash Plus */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-center h-14 hover:shadow-md transition-shadow">
                    <div className="text-center">
                        <Banknote size={20} className="text-green-600 mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-gray-500">Cash+</span>
                    </div>
                </div>

                {/* Wafacash */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-center h-14 hover:shadow-md transition-shadow">
                    <div className="text-center">
                        <Banknote size={20} className="text-orange-500 mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-gray-500">Wafacash</span>
                    </div>
                </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    <span>Paiement en <strong>3x sans frais</strong> disponible</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    <span>Virement bancaire accepté</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    <span>Facture officielle fournie</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentTrust;
