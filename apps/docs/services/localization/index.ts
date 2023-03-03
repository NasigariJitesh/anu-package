import enTranslations from './en.json';

export const translations = (language: string, key: keyof typeof enTranslations) => {
  switch (language) {
    case 'en': {
      {
        return enTranslations[key] ?? '';
      }
    }
    default: {
      {
        return '';
      }
    }
  }
};
