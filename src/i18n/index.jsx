import { createContext, useContext, useEffect, useMemo, useState } from "react";
import es from "./es.json";
import en from "./en.json";
import it from "./it.json";
import de from "./de.json";
import pt from "./pt.json";
import fr from "./fr.json";

const dictionaries = { es, en, it, de, pt, fr };
export const defaultLocale = "es";
export const locales = Object.keys(dictionaries);
const STORAGE_KEY = "locale";
const isLocale = (value) => Object.hasOwn(dictionaries, value);

const detectLocale = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch { /* storage may be blocked */ }
  const browser = navigator.language?.split("-")[0];
  return isLocale(browser) ? browser : defaultLocale;
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(detectLocale);
  const t = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute("content", value);
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', t.meta.title);
    setMeta('meta[property="og:description"]', t.meta.description);
    try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* ignore */ }
  }, [locale, t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
