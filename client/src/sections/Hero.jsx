import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import mukimPhoto from '../assets/images/IMG20250330081513.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0A192F] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm <span className="text-[#4EEEB1]">Mukim Uddin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              I'm a Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl">
              Passionate about creating beautiful and functional web applications.
              Specialized in modern web technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/mukimuddin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#4EEEB1] text-[#4EEEB1] hover:bg-[#4EEEB1]/10 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                <FaGithub className="text-xl" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/mukimuddin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#4EEEB1] text-[#4EEEB1] hover:bg-[#4EEEB1]/10 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://leetcode.com/mukimuddin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#4EEEB1] text-[#4EEEB1] hover:bg-[#4EEEB1]/10 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                <SiLeetcode className="text-xl" />
                LeetCode
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#4EEEB1] shadow-[0_0_20px_rgba(78,238,177,0.3)]">
              <img
                src={mukimPhoto}
                alt="Mukim Uddin"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 