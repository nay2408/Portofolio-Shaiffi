import React from 'react';

const FormationCypress = () => {
  const whatsappNumber = '261349634974'; // Ton numéro (à vérifier)
  const whatsappMessage = encodeURIComponent(
    "Bonjour Shaiffi ! Je veux commander le Guide Cypress Mada à 35 000 Ar"
  );

  return (
    <section id="formation-cypress" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500 text-slate-900 px-4 py-2 rounded-full font-bold mb-4">
            🧪 NOUVEAU
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cypress — Le Guide Complet du Testeur Moderne
          </h2>
          <p className="text-xl text-blue-200 mb-4">
            De l'installation à la CI/CD — Adapté aux environnements Madagascar 🇲🇬
          </p>
          <p className="text-lg text-gray-300">
            Formation QA Professionnelle • Édition 2026
          </p>
        </div>

        {/* Problème / Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-red-400">❌ Tu rencontres ces problèmes ?</h3>
            <ul className="space-y-3">
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Tu perds du temps à tester manuellement</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Tes apps ont des bugs en production</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span>PC limité + connexion lente</li>
              <li className="flex items-start"><span className="text-red-400 mr-2">•</span>Les tutos en anglais sont trop théoriques</li>
            </ul>
          </div>
          <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-green-400">✅ La solution :</h3>
            <ul className="space-y-3">
              <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Automatise tes tests même sur PC limité</li>
              <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Config optimisée pour connexions lentes</li>
              <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Exemples concrets : Mvola, e-commerce malgache</li>
              <li className="flex items-start"><span className="text-green-400 mr-2">✓</span>Guide pratique en français, 100% applicable</li>
            </ul>
          </div>
        </div>

        {/* Modules */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">📚 Ce que tu vas apprendre</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💻', title: 'Installation légère', desc: 'Config optimisée PC limité + connexion lente' },
              { icon: '🧪', title: 'Premier test en 15 min', desc: 'Crée un test login fonctionnel immédiatement' },
              { icon: '⭐', title: 'Bonnes pratiques 2026', desc: 'Sélecteurs robustes, attentes intelligentes' },
              { icon: '🇲🇬', title: 'Cas concrets locaux', desc: 'Tests Mvola, panier e-commerce, Ariary' },
              { icon: '🚀', title: 'CI/CD léger', desc: 'GitHub Actions gratuit, rapports PDF' },
              { icon: '🎁', title: 'Bonus exclusifs', desc: 'Checklist QA + template rapport de bug' }
            ].map((mod, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
                <div className="text-4xl mb-3">{mod.icon}</div>
                <h4 className="font-bold text-lg mb-2">{mod.title}</h4>
                <p className="text-gray-300 text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prix + CTA */}
        <div className="bg-white text-slate-900 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mb-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Investissement</h3>
          <div className="mb-6">
            <span className="text-gray-500 line-through text-xl">70 000 Ar</span>
            <div className="text-6xl font-bold text-green-600 my-2">35 000 Ar</div>
            <p className="text-gray-600">Prix de lancement — Édition 2026</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Guide PDF complet</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Code exemples</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Bonus inclus</span>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            📱 Commander sur WhatsApp
          </a>
          <p className="mt-4 text-gray-600 text-sm">
            Paiement Mvola / Orange Money • Livraison immédiate par email
          </p>
        </div>

      </div>
    </section>
  );
};

export default FormationCypress;