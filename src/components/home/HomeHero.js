import { motion } from 'framer-motion';

export default function HomeHero() {
  return (
    <div className="flex flex-rowda bg-gradient-to-r overflow-hidden container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white bg-opacity-90 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline text-[#1e3363] p-">OPTIMISEZ VOTRE AVENIR</span>{' '}
              </motion.h1>
              <motion.h4
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl"
              >
                <span className="block text-[#58d403] xl:inline">AVEC NOTRE SAVOIR-FAIRE !</span>
              </motion.h4>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Nous sommes votre interlocuteur unique et
                portons l'entière responsabilité de la réussite
                de votre projet.
              </motion.p>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.2,
                    },
                  },
                }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <motion.div
                  variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  className="rounded-md shadow"
                >
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transform transition duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    Consulter Nos Services
                  </a>
                </motion.div>
                <motion.div
                  variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 hover:scale-105 transform transition duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    Demander Un Devis
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://wallpapers.com/images/hd/business-background-3wf3a25tsm5hzu05.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
