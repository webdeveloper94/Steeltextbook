import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaAtom, FaChartLine, FaTools, FaBook, FaCog, FaFlask, FaChartBar, FaMicroscope, FaWrench, FaGraduationCap } from 'react-icons/fa';

const Lecture = () => {
  const lectures = [
    {
      id: 1,
      title: "Materiallar qarshiligi faniga kirish",
      description: "Fanning maqsadi, vazifalari va asosiy tushunchalari",
      icon: <FaBook className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Deformatsiya turlari",
      description: "Elastik va plastik deformatsiyalar, kuchlanish va deformatsiya orasidagi bog'lanish",
      icon: <FaAtom className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Cho'zilish va siqilish",
      description: "Cho'zilish va siqilishdagi kuchlanishlar, deformatsiyalar va Guk qonuni",
      icon: <FaChartLine className="w-8 h-8 text-accent" />,
    },
    {
      id: 4,
      title: "Materiallarning mexanik xossalari",
      description: "Materiallarning mustahkamligi, qattiqligi va plastikligi",
      icon: <FaTools className="w-8 h-8 text-accent" />,
    },
    {
      id: 5,
      title: "Po'latning tuzilishi va xossalari",
      description: "Po'latning kristall tuzilishi, fazaviy o'zgarishlar va termik ishlov",
      icon: <FaMicroscope className="w-8 h-8 text-accent" />,
    },
    {
      id: 6,
      title: "Mexanik sinovlar",
      description: "Materiallarni sinash usullari va standartlari",
      icon: <FaFlask className="w-8 h-8 text-accent" />,
    },
    {
      id: 7,
      title: "Qattiqlikni aniqlash",
      description: "Brinel, Rokvell va Vikkers usullarida qattiqlikni aniqlash",
      icon: <FaCog className="w-8 h-8 text-accent" />,
    },
    {
      id: 8,
      title: "Charchoq mustahkamligi",
      description: "Charchoq nazariyasi va materiallarning charchoq mustahkamligi",
      icon: <FaChartBar className="w-8 h-8 text-accent" />,
    },
    {
      id: 9,
      title: "Yuqori haroratdagi xossalar",
      description: "Materiallarning yuqori haroratdagi xulq-atvori va creep hodisasi",
      icon: <FaWrench className="w-8 h-8 text-accent" />,
    },
    {
      id: 10,
      title: "Kompozit materiallar",
      description: "Zamonaviy kompozit materiallar va ularning qo'llanilishi",
      icon: <FaGraduationCap className="w-8 h-8 text-accent" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ma'ruza <span className="text-accent">Mavzulari</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Materiallar qarshiligi fanining asosiy mavzulari va tushunchalari
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lectures.map((lecture, index) => (
            <Link key={index} to={`/lecture/${lecture.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg cursor-pointer hover:bg-secondary/70 transition-all h-full"
              >
                <div className="flex items-center justify-center mb-4">
                  {lecture.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {lecture.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {lecture.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lecture;
