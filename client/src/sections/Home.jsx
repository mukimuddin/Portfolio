import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "I'm a Full Stack Developer";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hello, I'm <span className="gradient-text">Mukim Uddin</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-text-secondary mb-8">
              {text}<span className="animate-blink">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="btn-primary"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="btn-secondary"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Passionate about creating beautiful and functional web applications.
              Specialized in modern web technologies and best practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 