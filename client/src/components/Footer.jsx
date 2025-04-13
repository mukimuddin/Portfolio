import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-text-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mb-4 p-2 rounded-full bg-accent text-primary hover:bg-accent/90 transition-colors duration-300"
          >
            <FaArrowUp size={20} />
          </motion.button>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-accent transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors duration-300">
              About
            </Link>
            <Link to="/projects" className="hover:text-accent transition-colors duration-300">
              Projects
            </Link>
            <Link to="/services" className="hover:text-accent transition-colors duration-300">
              Services
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors duration-300">
              Contact
            </Link>
          </div>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} M Kings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 