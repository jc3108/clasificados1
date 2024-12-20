import { useMemo } from 'react';

interface TranslationParams {
  [key: string]: string | number;
}

type TranslationFunction = (params?: TranslationParams) => string;

interface TranslationSection {
  [key: string]: TranslationFunction;
}

interface Translations {
  welcome: TranslationFunction;
  greeting: TranslationFunction;
  categories: {
    [key: string]: TranslationFunction;
  };
  search: {
    [key: string]: TranslationFunction;
  };
  auth: {
    [key: string]: TranslationFunction;
  };
  ad: {
    [key: string]: TranslationFunction;
  };
}

export function useTranslation() {
  const translations = useMemo<Translations>(() => ({
    welcome: () => '¡Bienvenido a Clasificados!',
    greeting: (params = {}) => `¡Hola ${params.name}!`,
    categories: {
      articles: () => 'Artículos y Servicios',
      realEstate: () => 'Bienes Raíces',
      automotive: () => 'Automotriz'
    },
    search: {
      placeholder: () => 'Buscar en todas las categorías...',
      filter: () => 'Filtrar resultados',
      sort: () => 'Ordenar por'
    },
    auth: {
      login: () => 'Iniciar Sesión',
      register: () => 'Registrarse',
      logout: () => 'Cerrar Sesión'
    },
    ad: {
      create: () => 'Publicar Anuncio',
      edit: () => 'Editar Anuncio',
      delete: () => 'Eliminar Anuncio',
      price: (params = {}) => `$${params.amount} ${params.currency}`
    }
  }), []);

  const translate = (
    key: string,
    sectionOrParams: keyof Translations | TranslationParams = 'welcome',
    params?: TranslationParams
  ): string => {
    if (typeof sectionOrParams === 'object') {
      const translationFn = translations[key as keyof Translations];
      if (typeof translationFn === 'function') {
        return translationFn(sectionOrParams);
      }
      throw new Error(`Translation key "${key}" not found`);
    }

    const section = translations[sectionOrParams];
    if (typeof section === 'object' && section !== null && key in section) {
      return section[key](params);
    }
    if (typeof section === 'function') {
      return section(params);
    }
    throw new Error(`Translation not found for key "${key}" in section "${sectionOrParams}"`);
  };

  return { translate };
}