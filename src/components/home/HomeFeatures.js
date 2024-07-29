import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderStyles.css'; // Import your custom CSS for slider styles

// Use a default image or a placeholder while loading
const placeholder = "https://via.placeholder.com/700";

function HomeFeatures() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    "https://cdn.dribbble.com/users/3279825/screenshots/11138727/media/0d2db803bdb40c57b9742320478b8a8a.png?resize=400x300&vertical=center",
    "https://i.pinimg.com/736x/b6/5d/5e/b65d5ef0de965fbf0fd1013c9624e1aa.jpg",
    "https://i.pinimg.com/736x/f9/c9/c9/f9c9c9a44d55d91306fa5ff7a1d879b3.jpg"
  ];

  const features = [
    {
      icon: 'fas fa-tools',
      title: 'Logiciel métier',
      description:
        'Nous développons des outils de gestion sur-mesure qui s’adaptent à vos processus métiers et qui vous permettent de sécuriser votre activité.',
      color: 'bg-red-600',
    },
    {
      icon: 'fas fa-globe',
      title: 'Portail e-Services',
      description:
        'Nous développons des outils transactionnels sécurisés vous permettant de dématérialiser vos échanges avec vos clients, citoyens ou partenaires sur internet.',
      color: 'bg-green-600',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Application mobile',
      description:
        'Nous développons vos applications mobiles (iOS & Android) afin de vous permettre d’offrir un nouveau canal d’échange avec vos clients.',
      color: 'bg-blue-600',
    },
    {
      icon: 'fas fa-exchange-alt',
      title: 'Échanges de données',
      description:
        'Nous développons à vos côtés les interfaces nécessaires à l\'échange d\'information entre vos outils grâce à notre expertise sur les API.',
      color: 'bg-yellow-600',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Slightly slower for a smoother effect
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Use fade effect
    pauseOnHover: true,
  };

  return (
    <section className="mt-15 md:mt-40 pb-40 relative bg-blueGray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          {/* Slider Section */}
          <article className="w-10/12 md:w-6/12 lg:w-6/12 px-4 mr-auto ml-auto mb-8">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
              <Suspense fallback={<img src={placeholder} alt="Loading" className="w-full align-middle rounded-t-lg" />}>
                <Slider {...settings}>
                  {sliderImages.map((image, index) => (
                    <div key={index}>
                      <img
                        alt={`Slide ${index}`}
                        src={image}
                        className="w-full h-64 md:h-80 object-cover align-middle rounded-t-lg"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Slider>
              </Suspense>
              <blockquote className="relative p-4 mb-4">
                <h2 className="text-2xl font-bold text-neutral-900">
                  Pourquoi nous choisir ?
                </h2>
              </blockquote>
            </div>
          </article>

          {/* Features Section */}
          <article className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              {features.map((feature, index) => (
                <div key={index} className="w-full md:w-6/12 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative flex flex-col mt-4"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${feature.color}`}>
                        <i className={`${feature.icon} text-white text-xl`}></i>
                      </div>
                      <h3 className="text-xl mb-1 font-semibold text-neutral-900">
                        {feature.title}
                      </h3>
                      <p className="mb-4 text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;
