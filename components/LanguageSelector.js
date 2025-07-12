import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslations } from '../pages/_app';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations('languageSelector');

  const languages = [
    { code: 'en', name: t('english'), flag: '🇺🇸' },
    { code: 'es', name: t('spanish'), flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === router.locale) || languages[0];

  const handleLanguageChange = (localeCode) => {
    const { pathname, asPath, query } = router;
    
    // Cambiar el idioma usando Next.js router
    router.push({ pathname, query }, asPath, { locale: localeCode });
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative language-selector">
      <motion.button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <GlobeAltIcon className="w-5 h-5 text-white" />
        <span className="text-white font-medium">{currentLanguage.flag}</span>
        <span className="text-white text-sm font-medium hidden sm:inline">
          {currentLanguage.name}
        </span>
        <ChevronDownIcon 
          className={`w-4 h-4 text-white transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-sm rounded-lg border border-white/20 shadow-xl min-w-[150px] z-50"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-accent/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  currentLanguage.code === language.code 
                    ? 'bg-accent/20 text-accent' 
                    : 'text-gray-700 hover:text-accent'
                }`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.1 }}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {currentLanguage.code === language.code && (
                  <motion.div
                    className="ml-auto w-2 h-2 rounded-full bg-accent"
                    layoutId="activeLanguage"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 