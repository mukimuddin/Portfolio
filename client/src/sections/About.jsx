import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';
import profileImg from '../assets/images/IMG20250330081513.jpg';

const About = () => {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, proficiency: 95 },
    { name: 'CSS3', icon: FaCss3Alt, proficiency: 90 },
    { name: 'JavaScript', icon: FaJs, proficiency: 85 },
    { name: 'React', icon: FaReact, proficiency: 90 },
    { name: 'TypeScript', icon: SiTypescript, proficiency: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 85 },
    { name: 'Node.js', icon: FaNodeJs, proficiency: 85 },
    { name: 'MongoDB', icon: SiMongodb, proficiency: 80 },
    { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 75 },
    { name: 'Redis', icon: SiRedis, proficiency: 70 },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#0A192F] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#4EEEB1] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4EEEB1]/20 to-transparent z-10"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(78,238,177,0.3)] rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300"
          >
            <p className="mb-6 text-lg leading-relaxed">
              Hi there! I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
              My journey in software development has equipped me with the skills to create robust and scalable applications 
              that deliver exceptional user experiences.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              I specialize in building full-stack web applications using React, Node.js, and various modern frameworks. 
              My experience includes working with both SQL and NoSQL databases, implementing RESTful APIs, and deploying 
              applications using cloud services.
            </p>
            <p className="text-lg leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest technologies to ensure I can provide 
              the best solutions for any project I work on.
            </p>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-[#112240] p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-[#4EEEB1] text-2xl mr-3" />
                  <h4 className="text-white text-lg font-medium">{skill.name}</h4>
                </div>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                    className="absolute h-full bg-[#4EEEB1] rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 block text-right">
                  {skill.proficiency}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 