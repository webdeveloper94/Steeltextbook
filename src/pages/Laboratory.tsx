import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Laboratory = () => {
  const [weight, setWeight] = useState<number>(0);
  const [diameter, setDiameter] = useState<number>(10); // mm da
  const [length, setLength] = useState<number>(100); // mm da
  const [elongation, setElongation] = useState<number[]>([]);

  // Po'latning xususiyatlari
  const E = 210000; // Yung moduli (MPa)
  const sigma_y = 250; // Oqish chegarasi (MPa)

  useEffect(() => {
    if (weight > 0 && diameter > 0 && length > 0) {
      // Po'latning ko'ndalang kesim yuzi (mm²)
      const area = Math.PI * Math.pow(diameter / 2, 2);
      
      // Kuchlanish (MPa)
      const stress = (weight * 9.81) / area;
      
      // Nisbiy deformatsiya
      const strain = stress / E;
      
      // Elastik cho'zilish (nm)
      let elongationValue = 0;
      
      if (stress <= sigma_y) {
        // Elastik zona
        elongationValue = (length * strain) * 1000000; // mm dan nm ga o'tkazish
      } else {
        // Plastik zona
        const plastic_strain = (stress - sigma_y) / (E * 0.1); // Shartli plastik deformatsiya
        elongationValue = (length * (strain + plastic_strain)) * 1000000;
      }

      setElongation([...elongation, elongationValue]);
    } else {
      setElongation([]);
    }
  }, [weight, diameter, length]);

  const chartData = {
    datasets: [
      {
        label: 'Po\'latning cho\'zilish diagrammasi',
        data: [{x: 0, y: 0}, {x: elongation[elongation.length - 1] || 0, y: weight}],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        tension: 0.4,
        parsing: {
          xAxisKey: 'x',
          yAxisKey: 'y'
        },
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Po\'latning cho\'zilish diagrammasi',
        color: '#fff',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Qo\'yilgan og\'irlik (kg)',
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cho\'zilish (nanometr)',
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="pt-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          Laboratoriya: Po'latning cho'zilish tajribasi
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-accent">Boshqaruv paneli</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">
                  Po'lat diametri (mm):
                </label>
                <input
                  type="number"
                  value={diameter}
                  onChange={(e) => setDiameter(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-accent/50 focus:border-accent outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Po'lat uzunligi (mm):
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-accent/50 focus:border-accent outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Yukni kiriting (kg):
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded bg-primary text-white border border-accent/50 focus:border-accent outline-none"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setElongation([]);
                setWeight(0);
              }}
              className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Qayta boshlash
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6"
          >
            <div className="h-[400px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-secondary/50 backdrop-blur-sm rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-accent">Tajriba natijalari</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Cho'zilish:</h3>
              <p className="text-gray-300">
                {elongation.length > 0 ? elongation[elongation.length - 1].toFixed(2) : '0'} nm
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Qo'yilgan yuk:</h3>
              <p className="text-gray-300">
                {weight} kg
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Ko'ndalang kesim yuzi:</h3>
              <p className="text-gray-300">
                {(Math.PI * Math.pow(diameter / 2, 2)).toFixed(2)} mm²
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Kuchlanish:</h3>
              <p className="text-gray-300">
                {weight > 0 ? ((weight * 9.81) / (Math.PI * Math.pow(diameter / 2, 2))).toFixed(2) : '0'} MPa
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Laboratory;
