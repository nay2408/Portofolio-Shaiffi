import { useState } from 'react';
import { User, Code, Mail } from 'lucide-react';

export default function NavbarHome() {
  const [activeTab, setActiveTab] = useState('home');
  
  const navItems = [
    { id: 'about', label: 'À propos', icon: User },
    { id: 'skills', label: 'Compétences', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleNavClick = (itemId) => {
    setActiveTab(itemId);
    
    // Scroll vers la section
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nom à gauche */}
          <div className="flex items-center">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-bold text-[#3B82F6] hover:opacity-80 transition-opacity"
            >
              NAY Shaiffi
            </button>
          </div>

          {/* Navigation à droite */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative flex items-center gap-2 group transition-all duration-300"
                >
                  {/* Conteneur avec fond animé */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#3B82F6] shadow-lg scale-105'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {/* Icône */}
                    <Icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-600 group-hover:text-[#3B82F6]'
                      }`}
                      strokeWidth={2.5}
                    />
                    
                    {/* Label */}
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-700 group-hover:text-[#3B82F6]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Indicateur actif en bas */}
                  <div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

