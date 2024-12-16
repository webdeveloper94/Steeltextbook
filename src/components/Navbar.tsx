import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-secondary/80 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-xl font-bold text-accent">
              Po'lat Xossalari
            </Link>
          </motion.div>
          <div className="flex space-x-4">
            <NavLink to="/">Asosiy</NavLink>
            <NavLink to="/lecture">Ma'ruza</NavLink>
            <NavLink to="/laboratory">Laboratoriya</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-accent/20 transition-colors"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;
