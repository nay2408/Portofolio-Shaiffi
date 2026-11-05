import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  AlertCircle,
  ArrowUpRight,
  Bug,
  CheckCircle2,
  Code2,
  Download,
  FileText,
  Github,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import LanguageSwitcher from '../Components/LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

const EMAILJS_SERVICE_ID = 'service_v9acyg9';
const EMAILJS_TEMPLATE_ID = 'template_bgc3w0c';
const EMAILJS_PUBLIC_KEY = 'oEr--0Ipt5fYwXVl7';

const NAV_ITEMS = ['home', 'about', 'skills', 'experience', 'contact'];

const AUTOMATION_SKILLS = [
  { name: 'Playwright', level: 75, bar: 'bg-accent' },
  { name: 'Postman', level: 60, bar: 'bg-emerald-400' },
  { name: 'SQL', level: 50, bar: 'bg-amber-400' },
];

const TOOLS = [
  'Playwright',
  'Postman',
  'Git',
  'GitHub',
  'SQL',
  'JavaScript',
  'React',
  'ViteJS',
  'HTML/CSS',
  'Tailwind',
  'Figma',
  'Excel',
];

const VALUES = [
  { icon: ShieldCheck, key: 'rigorous' },
  { icon: Sparkles, key: 'automation' },
  { icon: Bug, key: 'reports' },
];

function SectionHeader({ index, label, title, description }) {
  return (
    <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
          <span className="text-white/30">{index}</span> — {label}
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-relaxed text-white/45 md:text-right">{description}</p>
      )}
    </div>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      await emailjs.send(
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

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nom: '', email: '', sujet: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="04"
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                {t.contact.details}
              </p>

              <div className="space-y-1">
                <a
                  href="mailto:shaiffinay07@gmail.com"
                  className="group flex items-center gap-4 rounded-xl px-3 py-3 transition hover:bg-white/[0.04]"
                >
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent">
                    <Mail size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/40">{t.contact.email}</span>
                    <span className="block truncate text-sm text-white">shaiffinay07@gmail.com</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto flex-shrink-0 text-white/25 transition group-hover:text-accent"
                  />
                </a>

                <a
                  href="tel:+261349634974"
                  className="group flex items-center gap-4 rounded-xl px-3 py-3 transition hover:bg-white/[0.04]"
                >
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-emerald-300">
                    <Phone size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/40">{t.contact.phone}</span>
                    <span className="block text-sm text-white">+261 34 96 349 74</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto flex-shrink-0 text-white/25 transition group-hover:text-emerald-300"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-xl px-3 py-3">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60">
                    <MapPin size={18} />
                  </span>
                  <span>
                    <span className="block text-xs text-white/40">{t.contact.location}</span>
                    <span className="block text-sm text-white">Antananarivo, Madagascar</span>
                  </span>
                </div>

                <a
                  href="/CV-Nay-Shaiffi-2025.pdf"
                  download
                  className="mt-3 flex items-center gap-4 rounded-xl border border-accent/25 bg-accent/10 px-4 py-3.5 transition hover:bg-accent/15"
                >
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-accent text-ink-950">
                    <FileText size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-white">{t.contact.downloadCV}</span>
                    <span className="block text-xs text-white/45">{t.contact.pdf}</span>
                  </span>
                  <Download size={16} className="ml-auto flex-shrink-0 text-accent" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                {t.contact.social}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/nay2408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shaiffi-nay-747870399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-6">
              <span className="mt-0.5 grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <CheckCircle2 size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-white">{t.contact.open}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/50">
                  {t.contact.openDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-white">{t.contact.sendTitle}</h3>
            <p className="mt-2 text-sm text-white/45">{t.contact.reply}</p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  <CheckCircle2 size={26} />
                </div>
                <h4 className="mt-5 font-display text-lg font-semibold text-white">{t.contact.sent}</h4>
                <p className="mt-2 text-sm text-white/50">
                  {t.contact.sentDesc}
                </p>
              </div>
            ) : isError ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-red-400/30 bg-red-400/10 text-red-300">
                  <AlertCircle size={26} />
                </div>
                <h4 className="mt-5 font-display text-lg font-semibold text-white">{t.contact.error}</h4>
                <p className="mt-2 text-sm text-white/50">
                  {t.contact.errorDesc}
                </p>
                <button
                  onClick={() => setIsError(false)}
                  className="mt-4 text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-soft"
                >
                  {t.contact.back}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="mb-2 block text-xs font-medium text-white/50">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium text-white/50">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="vous@email.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="mb-2 block text-xs font-medium text-white/50">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.subjectPlaceholder}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-white/50">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-950 border-t-transparent" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t.contact.form.send}
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
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showVideoModal ? 'hidden' : '';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setShowVideoModal(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showVideoModal]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 font-sans text-white antialiased">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(138,164,255,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[length:76px_76px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen
            ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-[11px] font-semibold text-accent">
              NS
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-white">
              nay shaiffi
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  activeSection === item ? 'text-white' : 'text-white/45 hover:text-white/80'
                }`}
              >
                {t.nav[item]}
                {activeSection === item && (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-accent" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft lg:inline-flex"
            >
              {t.nav.cta}
              <ArrowUpRight size={15} />
            </button>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/70 transition hover:border-white/20 hover:text-white lg:hidden"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-ink-950/95 px-6 py-4 lg:hidden">
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`flex items-center justify-between border-b border-white/5 py-3 text-left text-sm last:border-0 ${
                    activeSection === item ? 'text-accent' : 'text-white/60'
                  }`}
                >
                  {t.nav[item]}
                  <ArrowUpRight size={15} className="text-white/25" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="flex min-h-screen items-center pt-16">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                    {t.hero.availability}
                  </span>
                </div>

                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                  {t.hero.role}
                </p>

                <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  NAY
                  <br />
                  <span className="text-white/85">Shaiffi.</span>
                </h1>

                <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-white/55 sm:text-lg">
                  {t.hero.introLead}
                  <span className="text-white">{t.hero.introHighlight}</span>
                  {t.hero.introMiddle}
                  <span className="text-accent">{t.hero.introTool}</span>
                  {t.hero.introTail}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
                  >
                    {t.hero.start}
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                  >
                    <Play size={15} />
                    {t.hero.demo}
                  </button>
                </div>

                <div className="mt-9 flex items-center gap-5">
                  <a
                    href="https://github.com/nay2408"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-white/40 transition hover:text-white"
                  >
                    <Github size={19} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shaiffi-nay-747870399"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white/40 transition hover:text-white"
                  >
                    <Linkedin size={19} />
                  </a>
                  <span className="h-px w-8 bg-white/15" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                    {t.hero.location}
                  </span>
                </div>
              </div>

              <div
                className="relative mx-auto w-full max-w-sm animate-fade-up lg:mx-0 lg:ml-auto"
                style={{ animationDelay: '120ms' }}
              >
                <div className="absolute -left-3 -top-3 h-24 w-24 rounded-2xl border border-accent/20" />
                <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl border border-white/10" />

                <div className="relative rounded-[1.75rem] border border-white/10 bg-ink-850 p-2 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.95)]">
                  <div className="relative overflow-hidden rounded-[1.35rem]">
                    <img
                      src="/portrait-shaiffi.jpg"
                      alt="NAY Shaiffi"
                      width="736"
                      height="832"
                      className="h-[26rem] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur-md">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                          {t.hero.basedIn}
                        </p>
                        <p className="mt-0.5 text-sm text-white">{t.hero.location}</p>
                      </div>
                      <MapPin size={18} className="text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] sm:grid-cols-4">
              {[
                { label: t.hero.stats.focus, value: t.hero.stats.focusValue },
                { label: t.hero.stats.automation, value: t.hero.stats.automationValue },
                { label: t.hero.stats.api, value: t.hero.stats.apiValue },
                { label: t.hero.stats.base, value: t.hero.stats.baseValue },
              ].map((item) => (
                <div key={item.label} className="bg-ink-950 px-5 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-white/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              index="01"
              label={t.about.label}
              title={t.about.title}
              description={t.about.description}
            />

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div className="space-y-5 text-[15px] leading-relaxed text-white/55 md:text-base">
                <p>
                  {t.about.p1Lead}
                  <span className="font-medium text-white">{t.about.p1Highlight}</span>
                  {t.about.p1Tail}
                </p>
                <p>{t.about.p2}</p>
                <p>
                  {t.about.p3Lead}
                  <span className="font-medium text-white">{t.about.p3Highlight}</span>
                  {t.about.p3Tail}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  {t.about.profile}
                </p>
                <dl className="mt-5 divide-y divide-white/10">
                  {t.about.rows.map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-6 py-3 first:pt-0 last:pb-0">
                      <dt className="text-xs text-white/40">{row.label}</dt>
                      <dd className="text-right text-sm text-white/80">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {VALUES.map((item) => {
                const value = t.about.values[item.key];
                return (
                  <div
                    key={item.key}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent">
                      <item.icon size={18} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-white/5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              index="02"
              label={t.skills.label}
              title={t.skills.title}
              description={t.skills.description}
            />

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent">
                    <CheckCircle2 size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">{t.skills.manual}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.skills.manualItems.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-sm text-white/55">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent">
                    <Layers size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">{t.skills.automation}</h3>
                </div>
                <div className="mt-6 space-y-5">
                  {AUTOMATION_SKILLS.map((tool) => (
                    <div key={tool.name}>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-white/70">{tool.name}</span>
                        <span className="font-mono text-white/35">{tool.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${tool.bar}`}
                          style={{ width: `${tool.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent">
                    <Code2 size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">{t.skills.tools}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {TOOLS.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55 transition hover:border-white/25 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/5 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              index="03"
              label={t.experience.label}
              title={t.experience.title}
              description={t.experience.description}
            />

            <div className="space-y-4">
              {t.experience.items.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="group grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04] md:grid-cols-[190px_1fr] md:p-8"
                >
                  <div className="flex items-start justify-between gap-3 md:flex-col md:justify-start">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {t.experience.current}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                        <p className="mt-1 text-sm text-accent">{exp.company}</p>
                      </div>
                      {exp.location && (
                        <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-white/30 md:block">
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        <footer className="border-t border-white/5 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-lg font-semibold text-white">NAY Shaiffi</p>
              <p className="mt-1 text-sm text-white/35">QA Engineer · Antananarivo, Madagascar</p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/nay2408"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/40 transition hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shaiffi-nay-747870399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/40 transition hover:text-white"
              >
                <Linkedin size={18} />
              </a>
              <button
                onClick={() => scrollToSection('home')}
                className="inline-flex items-center gap-1.5 text-sm text-white/45 transition hover:text-white"
              >
                {t.footer.backToTop}
                <ArrowUpRight size={14} className="-rotate-45" />
              </button>
            </div>
          </div>
        </footer>
      </main>

      {showVideoModal && (
        <div
          className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md"
          onClick={() => setShowVideoModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t.video.aria}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent">
                  <Code2 size={17} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {t.video.title}
                  </h3>
                  <p className="text-xs text-white/40">{t.video.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/50 transition hover:border-white/20 hover:text-white"
                aria-label={t.video.close}
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 md:p-6">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                <video
                  src="/demonstration.mp4"
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  onEnded={() => setShowVideoModal(false)}
                  className="w-full"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                <span className="font-medium text-white">{t.video.note}</span>{' '}
                {t.video.noteText}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
