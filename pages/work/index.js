// components
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// translations
import { useTranslations } from '../_app';

// icons
import { HiWrenchScrewdriver, HiRocketLaunch } from 'react-icons/hi2';

const Work = () => {
  const t = useTranslations('work');
  const tCommon = useTranslations('common');

  return (
    <div className='min-h-screen bg-primary/30 flex items-center justify-center px-4 py-20'>
      <div className="hidden xl:block">
        <Circles />
      </div>
      
      <div className='container mx-auto text-center'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col items-center'
        >
          {/* Icon */}
          <div className='mb-8 flex space-x-4'>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className='text-6xl xl:text-8xl text-accent'
            >
              <HiWrenchScrewdriver />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className='text-6xl xl:text-8xl text-accent'
            >
              <HiRocketLaunch />
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 mb-6 text-4xl xl:text-6xl font-bold'
          >
            {t('title')} <span className='text-accent'>{tCommon('underDevelopment')}</span>
          </motion.h1>

          {/* Message */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[600px] mb-8'
          >
            <p className='text-lg xl:text-xl text-white/80 leading-relaxed mb-6'>
              {t('message')}
            </p>
            <p className='text-base xl:text-lg text-white/60'>
              {t('status')}
            </p>
          </motion.div>

          {/* Status indicator */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3'
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='w-3 h-3 bg-accent rounded-full'
            />
            <span className='text-accent font-medium'>{tCommon('underDevelopment')}</span>
          </motion.div>

          {/* Back link */}
          <motion.div
            variants={fadeIn('up', 1.0)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mt-12'
          >
            <a 
              href='/' 
              className='text-accent hover:text-white transition-colors duration-300 underline text-lg'
            >
              ← {t('backToHome')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}

export default Work;
