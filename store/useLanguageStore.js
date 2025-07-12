import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLanguageStore = create(
  persist(
    (set, get) => ({
      // Estado inicial
      currentLocale: 'en',
      
      // Acciones
      setLocale: (locale) => {
        set({ currentLocale: locale });
        
        // Cambiar el idioma en el navegador
        if (typeof window !== 'undefined') {
          const currentPath = window.location.pathname;
          const newPath = `/${locale}${currentPath.replace(/^\/[a-z]{2}/, '')}`;
          window.location.href = newPath;
        }
      },
      
      // Getter para obtener el idioma actual
      getCurrentLocale: () => get().currentLocale,
      
      // Inicializar desde la URL si está disponible
      initializeFromPath: () => {
        if (typeof window !== 'undefined') {
          const pathSegments = window.location.pathname.split('/');
          const localeFromPath = pathSegments[1];
          
          if (['en', 'es'].includes(localeFromPath)) {
            set({ currentLocale: localeFromPath });
          }
        }
      }
    }),
    {
      name: 'language-storage',
      storage: typeof window !== 'undefined' ? {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      } : undefined,
    }
  )
); 