import React from 'react';
import { motion } from 'framer-motion';

function HomeServices() {
  const services = [
    {
      icon: 'fas fa-medal',
      title: 'Site Web',
      description: 'Nous développons des sites internet qui associent créativité, technologie de pointe et facilité d’utilisation. Que vous souhaitiez informer, communiquer, vendre ou recruter, Eminence, votre agence de solutions digitales à Tunis, conçoit votre site sur-mesure.',
      color: 'bg-red-500',
    },
    {
      icon: 'fas fa-poll',
      title: 'Référencement Naturel(SEO)',
      description: 'Notre Equipe SEO/SEA, met en place une feuille de route de référencement qui s’harmonie avec les exigences de votre projet de visibilité Une étude des mots se fixe soigneusement pour rentabiliser la mission de référencement.',
      color: 'bg-green-500',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Application Web',
      description: 'Nous développons des Application web sur mesure, Progressive web apps, applications interactives ou Intégration API et outils tiers, nous vous proposons la technologie la plus adaptée à vos objectifs et à votre budget.',
      color: 'bg-blue-500',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Application Mobile',
      description: 'Nous développons des applications mobiles natives sur les plateformes les plus populaires (Android et iOS) conformément aux dernières tendances UX, ainsi que des applications hybrides multiplateformes utilisant React Native ou Flutter ainsi que des jeux mobiles utilisant Unity.',
      color: 'bg-yellow-500',
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Marketing Digital',
      description: 'Eminence, agence de solutions digitales à Tunis, exploite des tactiques digitales qui génèrent du trafic, optimisent vos chances d’être remarqué par votre audience cible et vous positionne dans un cycle vertueux d’augmentation votre chiffre d’affaires.',
      color: 'bg-purple-500',
    },
    {
      icon: 'fas fa-share-alt',
      title: 'Réseaux sociaux',
      description: 'Désormais incontournables, les réseaux sociaux vous offrent la possibilité de communiquer plus efficacement avec votre cible et d’acquérir de nouveaux clients. Eminence, votre agence digitale à Tunis, utilise des techniques pionnières pour bénéficier au mieux de ces canaux de communications.',
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Nos Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Nos Services
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
          >
            Notre expertise comprend un ensemble de solutions complémentaires pour permettre à votre entreprise un positionnement performant.
          </motion.p>
        </div>
      </div>
      <section className="pb-20 relative block bg-blueGray-800 rounded-lg">
        <div className="container mx-auto px-5 lg:pt-10 lg:pb-30">
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
                className="w-full md:w-6/12 lg:w-4/12 px-4 text-center mt-8"
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`p-6 w-20 h-20 shadow-xl rounded-full ${service.color} inline-flex items-center justify-center mx-auto hover:shadow-2xl transition-shadow duration-300`}>
                  <i className={`${service.icon} text-white text-3xl`}></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">{service.title}</h6>
                <p className="mt-2 mb-4 text-blueGray-400 hover:text-blueGray-600 transition-colors duration-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeServices;
