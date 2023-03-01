import enTranslations from './en.json';

export const translations = (language: string, key: string) => {
  switch (language) {
    case 'en': {
      {
        return enTranslations[key as keyof typeof enTranslations] ?? '';
      }
    }
    default: {
      {
        return '';
      }
    }
  }
};
