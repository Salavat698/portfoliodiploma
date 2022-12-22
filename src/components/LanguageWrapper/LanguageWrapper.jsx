import React, { useState } from 'react';
import { createContext } from "react";
import { IntlProvider } from "react-intl";
import russian from '../../lang/ru.json';
import english from '../../lang/en.json';

let localeInit = localStorage.getItem('lang') || navigator.language;
let langInit;
if (localeInit.startsWith('en')) {
  langInit = english;
  localeInit = 'en';
} else if (localeInit.startsWith('ru')) {
  langInit = russian;
  localeInit = 'ru';
}

export const languages = {
  en: "en",
  ru: "ru",
};

export const LanguageContext = createContext({
  locale: "",
  selectLanguage: () => {}
});

export function LanguageWrapper(props) {
  const [locale, setLocale] = useState(localeInit);
  const [messages, setMessages] = useState(langInit);

  const selectLanguage = (locale) => {
    const newLocale = locale;
    setLocale(newLocale);
    if (newLocale === 'en') {
      setMessages(english);
    } else if (newLocale === 'ru') {
        setMessages(russian);
    }
    localStorage.setItem('lang', newLocale)
  }

  return (
    <LanguageContext.Provider value = {{locale, selectLanguage}}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}