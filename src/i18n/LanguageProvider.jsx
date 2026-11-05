import { useEffect, useMemo, useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './LanguageContext';

const STORAGE_KEY = 'portfolio-language';
const SUPPORTED = ['fr', 'en'];

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'fr';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(stored)) return stored;

  const browserLanguage = window.navigator.language?.toLowerCase() ?? '';
  return browserLanguage.startsWith('en') ? 'en' : 'fr';
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    const meta = translations[lang].meta;
    document.documentElement.lang = lang;
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.description);

    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
