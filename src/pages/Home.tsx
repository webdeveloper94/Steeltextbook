import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFlask, FaBook, FaUserGraduate, FaRocket, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { HiAcademicCap, HiLightBulb, HiChartBar, HiCube } from 'react-icons/hi';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      title: "Interaktiv Laboratoriya",
      description: "Po'latning mexanik xususiyatlarini real vaqtda o'rganing",
      icon: <FaFlask className="w-8 h-8 text-accent" />,
      link: "/laboratory"
    },
    {
      title: "Nazariy Ma'lumotlar",
      description: "Materiallar qarshiligi fanining asosiy tushunchalari",
      icon: <FaBook className="w-8 h-8 text-accent" />,
      link: "/lecture"
    },
    {
      title: "O'quv Dasturi",
      description: "Zamonaviy pedagogik texnologiyalar asosida ishlab chiqilgan",
      icon: <HiAcademicCap className="w-8 h-8 text-accent" />,
      link: "/lecture"
    }
  ];

  const highlights = [
    {
      title: "Zamonaviy Yondashuv",
      description: "Interaktiv grafiklar va 3D modellar orqali o'rganish",
      icon: <FaRocket className="w-12 h-12 text-accent" />
    },
    {
      title: "Real Tajribalar",
      description: "Virtual laboratoriyada amaliy tajribalar o'tkazish",
      icon: <FaChartLine className="w-12 h-12 text-accent" />
    },
    {
      title: "Chuqur Bilim",
      description: "Materiallar qarshiligining barcha jihatlari bo'yicha to'liq ma'lumot",
      icon: <FaLightbulb className="w-12 h-12 text-accent" />
    }
  ];

  

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <HiCube className="w-24 h-24 text-accent" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Po'latning <span className="text-accent">xususiyatlari</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zamonaviy interaktiv ta'lim platformasi orqali materiallarning mexanik xususiyatlarini o'rganing
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link
                to={feature.link}
                className="block p-6 bg-secondary/50 backdrop-blur-sm rounded-lg hover:bg-secondary/70 transition-all h-full"
              >
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary/40 backdrop-blur-sm p-8 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-300">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Hoziroq <span className="text-accent">o'rganishni</span> boshlang
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/lecture">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/80 transition-colors"
              >
                Ma'ruzalarni ko'rish
              </motion.button>
            </Link>
            <Link to="/laboratory">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Laboratoriyaga o'tish
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Author Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button
            onClick={() => setShowModal(true)}
            className="bg-accent/20 text-white px-6 py-3 rounded-lg hover:bg-accent/30 transition-colors inline-flex items-center"
          >
            <FaUserGraduate className="mr-2" />
            Muallif haqida
          </button>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-secondary p-8 rounded-lg max-w-md mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-center mb-4">
                <HiLightBulb className="w-16 h-16 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Muallif haqida</h2>
              <p className="text-gray-300 mb-4">
                Ushbu dastur Buxoro Muhandislik Texnologiya Instituti talabasi Salimov Og'abek tomonidan ishlab chiqilgan.
              </p>
              <div className="text-gray-300">
                <p><strong>Kursi:</strong> 5-kurs</p>
                <p><strong>Guruh</strong> K724-20 ATT</p>
                <p><strong>Email:</strong> ogabeksalimov@gmail.com</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 w-full bg-accent text-white px-4 py-2 rounded hover:bg-accent/80 transition-colors"
              >
                Yopish
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
