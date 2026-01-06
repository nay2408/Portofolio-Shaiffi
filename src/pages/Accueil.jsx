import { Link } from 'react-router-dom';
import { Code2, Sparkles, Rocket, Mail, Github, Linkedin } from 'lucide-react';


export default function Accueil() {
  const competences = [
    { nom: 'React', niveau: 85, couleur: 'bg-blue-500' },
    { nom: 'Vite JS', niveau: 83, couleur: 'bg-blue-800' },
    { nom: 'Symfony', niveau: 80, couleur: 'bg-purple-500' },
    { nom: 'Django', niveau: 72, couleur: 'bg-yellow-800' },
    { nom: 'Tailwind CSS', niveau: 90, couleur: 'bg-cyan-500' },
    { nom: 'Bootstrap CSS', niveau: 90, couleur: 'bg-cyan-800' },
    { nom: 'HTML5/CSS3', niveau: 95, couleur: 'bg-orange-500' },
    { nom: 'Python', niveau: 75, couleur: 'bg-yellow-500' },
    { nom: 'Java', niveau: 70, couleur: 'bg-red-500' },
    { nom: 'Windev 25', niveau: 65, couleur: 'bg-orange-800' },


  ];

  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-6xl w-full transform-3D animate-fade-in">
        {/* Badge de statut */}
        <div className="flex justify-center mb-8 animate-bounce">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      Disponible pour des projets.
          </span>
        </div>

        {/* Nom principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          NAY Shaiffi
        </h1>

        {/* Rôle avec icône */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Code2 className="text-blue-600" size={28} />
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Développeur Web Full-Stack Junior
          </p>
        </div>

        {/* Description principale */}
        <p className="mt-8 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Passionné par le développement web moderne, je crée des applications 
          <span className="font-semibold text-blue-600"> performantes</span>, 
          <span className="font-semibold text-purple-600"> accessibles</span> et 
          <span className="font-semibold text-indigo-600"> élégantes</span>. 
          Basé à Madagascar 🇲🇬, je transforme des idées en solutions digitales concrètes.
        </p>

        {/* Section compétences */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-yellow-500 bg-transparent" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Mes Compétences</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competences.map((comp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{comp.nom}</span>
                  <span className="text-sm text-gray-500">{comp.niveau}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${comp.couleur} h-full rounded-full`}
                    style={{ width: `${comp.niveau}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Points forts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Code Propre</h3>
            <p className="text-sm text-gray-600">Code maintenable et bien structuré selon les meilleures pratiques</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-purple-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Design Moderne</h3>
            <p className="text-sm text-gray-600">Interfaces utilisateur attrayantes et intuitives</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-indigo-600" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Performance</h3>
            <p className="text-sm text-gray-600">Applications rapides et optimisées</p>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center">
          <Link to={'/contact'}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-4 px-8 rounded-xl shadow-md transition-all duration-300 text-center transform hover:-translate-y-1"
          >
            Me contacter
          </Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-16 flex gap-6 justify-center">
          <a
            href="https://github.com/nay2408"
            target="nay2408"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="text-white-700 group-hover:text-white transition-colors" size={24} />
            <span className="font-medium text-white group-hover:text-white">GitHub</span>
          </a>

          <a
            href="mailto:shaiffinay07@gmail.com"
            className="group flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="text-red-600 group-hover:text-red-500 transition-colors" size={24} />
            <span className="font-medium text-gray-700 group-hover:text-red-500">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}