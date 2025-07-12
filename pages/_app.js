import "../styles/globals.css";
import { createContext, useContext } from 'react';

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

// Create a simple translations context
const TranslationsContext = createContext({});

export const useTranslations = (namespace) => {
  const translations = useContext(TranslationsContext);
  return (key) => {
    // First navigate to the namespace
    let namespaceData = translations;
    if (namespace) {
      namespaceData = translations?.[namespace];
    }
    
    // Then navigate to the key
    const keys = key.split('.');
    let value = namespaceData;
    for (let k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <TranslationsContext.Provider value={pageProps.messages || {}}>
      <Head>
        <link rel="icon" href="../public/logobg.png" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
            <Analytics />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </TranslationsContext.Provider>
  );
}

export default MyApp;
