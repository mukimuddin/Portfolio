import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss,
  SiMongodb,
  SiRedis
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import mukimPhoto from '../assets/images/IMG20250330081513.jpg';

const About = () => {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, proficiency: 95 },
    { name: 'CSS3', icon: FaCss3Alt, proficiency: 90 },
    { name: 'JavaScript', icon: FaJs, proficiency: 92 },
    { name: 'React', icon: FaReact, proficiency: 88 },
    { name: 'TypeScript', icon: SiTypescript, proficiency: 85 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 90 },
    { name: 'Node.js', icon: FaNodeJs, proficiency: 87 },
    { name: 'MongoDB', icon: SiMongodb, proficiency: 85 },
    { name: 'PostgreSQL', icon: BiLogoPostgresql, proficiency: 82 },
    { name: 'Redis', icon: SiRedis, proficiency: 80 }
  ];

  return (
    <section id="about" className="py-20 bg-[#0A192F] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-white">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-12 mb-12">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/3 flex justify-center"
            >
              <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(78,238,177,0.3)] border-2 border-[#4EEEB1]">
                <img
                  src={mukimPhoto}
                  alt="Mukim Uddin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="md:w-2/3 space-y-6 text-gray-400">
              <p>
                With over 5 years of experience in full-stack development, I specialize in building scalable web
                applications using modern technologies. My passion lies in creating efficient, maintainable, and user-
                friendly solutions that solve real-world problems.
              </p>
              <p>
                I'm constantly learning and adapting to new technologies while maintaining a strong foundation in
                software development principles. My approach combines technical expertise with creative problem-
                solving to deliver exceptional results.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#4EEEB1]">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <skill.icon className="text-2xl text-[#4EEEB1]" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#4EEEB1]">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-[#4EEEB1] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 