import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

// framer motion
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
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
    </>
  );
}

export default MyApp;
