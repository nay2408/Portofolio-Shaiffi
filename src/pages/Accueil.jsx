import { Mail, Code, Briefcase, Zap, Package, Layers, Github, Linkedin, ExternalLink, ChevronDown, Sparkles, Phone, MapPin, Send, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const EMAILJS_SERVICE_ID = 'service_v9acyg9';
  const EMAILJS_TEMPLATE_ID = 'template_bgc3w0c';
  const EMAILJS_PUBLIC_KEY = 'oEr--0Ipt5fYwXVl7';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nom,
          from_email: formData.email,
          subject: formData.sujet,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email envoyé avec succès:', result);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nom: '', email: '', sujet: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setIsError(true);
      
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-pink-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">Travaillons ensemble</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Informations */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Mes Coordonnées</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:shaiffinay07@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-all">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300 text-sm">shaiffinay07@gmail.com</p>
                  </div>
                </a>

                {/* Téléphone */}
                <a 
                  href="tel:+261349634974"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-500/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-all">
                    <Phone className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Téléphone</h4>
                    <p className="text-gray-300 text-sm">+261 34 96 349 74</p>
                  </div>
                </a>

                {/* Localisation */}
                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Localisation</h4>
                    <p className="text-gray-300 text-sm">Antananarivo, Madagascar 🇲🇬</p>
                  </div>
                </div>

                {/* CV */}
                <a 
                  href="/cv-shaiffi-nay.pdf"
                  download
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Mon CV</h4>
                    <p className="text-pink-100 text-sm">Télécharger (PDF)</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Retrouvez-moi</h3>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="https://github.com/nay2408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <Github size={24} />
                  <span className="font-medium">GitHub</span>
                  <ExternalLink size={16} className="ml-auto" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/shaiffi-nay-747870399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <Linkedin size={24} />
                  <span className="font-medium">LinkedIn</span>
                  <ExternalLink size={16} className="ml-auto" />
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Disponibilité</h3>
              <p className="text-gray-300 text-sm mb-4">
                Actuellement disponible pour des projets freelance et des opportunités de collaboration.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-300">Ouvert aux propositions</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle className="text-emerald-400" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message envoyé !</h4>
                <p className="text-gray-300">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : isError ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="text-red-400" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Erreur d'envoi</h4>
                <p className="text-gray-300 mb-4">Une erreur s'est produite. Veuillez réessayer.</p>
                <button
                  onClick={() => setIsError(false)}
                  className="text-blue-400 hover:text-blue-300 font-semibold underline"
                >
                  Retour au formulaire
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label htmlFor="sujet" className="block text-sm font-semibold text-gray-300 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Objet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation moderne */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              NAY Shaiffi
            </div>
            
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-blue-400 font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'home' ? 'Accueil' : 
                   section === 'about' ? 'À propos' : 
                   section === 'skills' ? 'Compétences' : 
                   'Expérience'}
                </button>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Redesigné */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Colonne gauche */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  NAY <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Shaiffi</span>
                </h1>
                
                <p className="text-2xl text-gray-300 font-light">
                  Développeur Full-Stack
                </p>

                <p className="text-xl text-gray-400 leading-relaxed pt-4">
                  Créateur d'applications web qui allient{' '}
                  <span className="text-blue-400 font-semibold">performance</span>,{' '}
                  <span className="text-emerald-400 font-semibold">design</span> et{' '}
                  <span className="text-purple-400 font-semibold">expérience utilisateur</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center gap-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Me contacter</span>
                </button>
                
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  <Code className="w-5 h-5" />
                  <span>Visualiser un projet</span>
                </button>
              </div>

              <div className="flex gap-4 pt-6">
                <a href="https://github.com/nay2408" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/shaiffi-nay-747870399/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Colonne droite - Photo avec effet moderne */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Effets de fond animés */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

              <div className="relative z-10">
                <div className="relative group">
                  {/* Bordure animée */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-3xl opacity-75 blur group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                  
                  {/* Carte photo */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl w-80 h-96 border border-white/10">
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <img src="/Fond.jpeg" alt="NAY Shaiffi" className='rounded-2xl w-full h-full object-cover'/>
                    </div>
                    
                    {/* Overlay décoratif */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Section À Propos - Modernisée */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Découvrir</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">À propos de moi</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Histoire */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold text-white">Mon parcours</h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Passionné par le <span className="text-blue-400 font-semibold">code</span>, 
                    l'<span className="text-emerald-400 font-semibold">expérience utilisateur</span> et 
                    la résolution de <span className="text-purple-400 font-semibold">problèmes complexes</span>.
                  </p>
                  <p>
                    Je construis des solutions web complètes, du design à la base de données.
                  </p>
                  <p>
                    Je m'appelle <span className='font-bold text-white'>NAY Shaiffi</span>, 
                    Développeur junior passionné dans la création d'applications web modernes. 
                    J'ai débuté en explorant le développement front-end avant de me spécialiser 
                    en full-stack, ce qui me permet de créer des solutions complètes de A à Z.
                  </p>
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {[
                  { icon: Code, title: 'Code de qualité', desc: 'Code propre, maintenable et performant' },
                  { icon: Sparkles, title: 'Innovation', desc: 'Toujours à l\'affût des nouvelles technologies' },
                  { icon: Zap, title: 'Performance', desc: 'Applications rapides et optimisées' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences - Redesignée */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">Mes compétences</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Logiciels */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Logiciels</h3>
              </div>
              
              <div className="flex flex-col items-center gap-4 py-6">
                <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-all">
                  <img src='/win25.png' alt='Windev' className='w-20 h-20 object-contain'/>
                </div>
                <span className="text-gray-300 font-medium">Windev 25</span>
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-blue-500 p-3 rounded-lg">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Frameworks</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { img: '/dj75.jpg', name: 'Django' },
                  { img: '/node75.jpg', name: 'Node.js' },
                  { img: '/symfony75.jpg', name: 'Symfony' },
                  { img: '/react75.jpg', name: 'React' },
                  { img: '/tailwind.jpeg', name: 'Tailwind' }
                ].map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition-all hover:scale-110">
                      <img src={tech.img} alt={tech.name} className='w-12 h-12 object-contain rounded'/>
                    </div>
                    <span className="text-gray-300 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Langages */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Langages</h3>
              </div>
              
              <div className="space-y-3">
                {['Python', 'JavaScript', 'PHP', 'SQL', 'Java', 'HTML', 'CSS'].map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expérience - Timeline moderne */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Parcours</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">Mon expérience</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {/* Expérience 2025 */}
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
              <div className="absolute left-[-8px] top-2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/20 group-hover:ring-8 transition-all"></div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <span className="text-blue-400 font-semibold text-sm">2025</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                  Stagiaire Développeur Front-end Symfony
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Création d'une application web de suivi de questions et réponses durant les rencontres parlementaires avec Symfony et MySQL comme base de données.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Symfony', 'MySQL', 'Front-end'].map((tech, idx) => (
                    <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Expérience 2024 */}
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-emerald-500 to-transparent"></div>
              <div className="absolute left-[-8px] top-2 w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-500/20 group-hover:ring-8 transition-all"></div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <span className="text-emerald-400 font-semibold text-sm">2024</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                  Stagiaire Développeur Full-stack
                </h3>
                <p className="text-gray-400 mb-3">Paositra Malagasy</p>
                <p className="text-gray-300 leading-relaxed">
                  Création d'une plateforme d'échange de devise complète.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Full-stack', 'Platform Development'].map((tech, idx) => (
                    <span key={idx} className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <ContactSection />
      {showVideoModal && (
  <div 
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
    onClick={() => setShowVideoModal(false)}
  >
    <div 
      className="relative w-full max-w-5xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header de la modale */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-2 rounded-lg">
            <Code className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Démonstration du projet</h3>
        </div>
        <button
          onClick={() => setShowVideoModal(false)}
          className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Contenu vidéo */}
      <div className="p-6">
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video
  src="/demonstration.mp4"
  controls
  autoPlay
  muted  // AJOUTEZ CECI
  playsInline  // AJOUTEZ CECI pour la compatibilité iOS
  preload="metadata"
  onEnded={() => setShowVideoModal(false)}
>
          </video>
        </div>
        
        {/* Description optionnelle */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-white">Note:</span> Vidéo de démonstration du projet développé durant mon expérience professionnelle.
          </p>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default Portfolio;