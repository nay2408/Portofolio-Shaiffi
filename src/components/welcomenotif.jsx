import { useState, useEffect } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import bienvenueSound from '../assets/sounds/soyez_le_bienvenue.mp3';

export default function WelcomeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setTimeout(() => {
        setShow(true);
        
        const audio = new Audio(bienvenueSound);
        audio.volume = 0.5;
        audio.play().catch(err => console.log('Erreur audio:', err));
        
        sessionStorage.setItem('hasVisited', 'true');
      }, 300);
    }
  }, []);

  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={() => setShow(false)}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-lg mx-4 shadow-2xl transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          {/* Icône principale */}
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className=" text-yellow-500 animate-pulse" size={24} />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Bienvenue ! <span className='text-transparent' > 🎉 </span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Merci de visiter mon portfolio.<br/>
            Découvrez mes projets et compétences !
          </p>
          
          <button
            onClick={() => setShow(false)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Explorer maintenant
          </button>
        </div>
      </div>
    </div>
  );
}