import { Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const LANGUAGES = [
  { code: 'fr', short: 'FR', label: 'Français' },
  { code: 'en', short: 'EN', label: 'English' },
];

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.03] p-1 ${className}`}
    >
      <Languages size={13} className="ml-1.5 mr-0.5 text-white/35" aria-hidden="true" />
      {LANGUAGES.map((language) => {
        const isActive = lang === language.code;
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => setLang(language.code)}
            aria-pressed={isActive}
            aria-label={language.label}
            title={language.label}
            className={`rounded-full px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] transition-colors ${
              isActive
                ? 'bg-accent text-ink-950'
                : 'text-white/45 hover:text-white'
            }`}
          >
            {language.short}
          </button>
        );
      })}
    </div>
  );
}
