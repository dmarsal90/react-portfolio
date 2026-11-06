import { useEffect, useRef, useState } from "react";
import { locales, useI18n } from "../i18n";

export const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lang-switcher" ref={ref}>
      <button type="button" className="lang-btn" aria-label={t.nav.language} aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        {locale}
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      {open && (
        <ul className="lang-menu">
          {locales.map((code) => (
            <li key={code}>
              <button type="button" lang={code} aria-current={code === locale ? "true" : undefined}
                onClick={() => { setLocale(code); setOpen(false); }}>
                {code}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
