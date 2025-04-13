import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis
} from 'react-icons/si';
import { BiCloud } from 'react-icons/bi';

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
    { name: 'PostgreSQL', icon: SiPostgresql, proficiency: 82 },
    { name: 'Redis', icon: SiRedis, proficiency: 80 },
    { name: 'Git', icon: FaGitAlt, proficiency: 88 },
    { name: 'Docker', icon: FaDocker, proficiency: 83 },
    { name: 'AWS', icon: FaAws, proficiency: 80 },
    { name: 'Cloud Services', icon: BiCloud, proficiency: 75 },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Implemented microservices architecture',
        'Led team of 5 developers for major project deliveries'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks and backend technologies.',
      achievements: [
        'Built real-time dashboard with WebSocket',
        'Integrated payment gateway solutions',
        'Improved test coverage to 85%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      period: '2018 - 2020',
      description: 'Specialized in creating responsive and interactive user interfaces using React and related technologies.',
      achievements: [
        'Developed 20+ client websites',
        'Implemented responsive design systems',
        'Reduced bug reports by 60%'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2016 - 2018',
      description: 'Specialized in Software Engineering and Web Technologies'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'State University',
      period: '2012 - 2016',
      description: 'Major in Computer Science with focus on Programming'
    }
  ];

  return (
    <section className="section-padding">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h1>
        <p className="text-lg text-text-secondary mb-6">
          With over 5 years of experience in full-stack development, I specialize in building scalable web applications
          using modern technologies. My passion lies in creating efficient, maintainable, and user-friendly solutions
          that solve real-world problems.
        </p>
        <p className="text-lg text-text-secondary">
          I'm constantly learning and adapting to new technologies while maintaining a strong foundation in software
          development principles. My approach combines technical expertise with creative problem-solving to deliver
          exceptional results.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg p-4"
            >
              <div className="flex items-center gap-4 mb-2">
                <skill.icon className="text-2xl text-accent" />
                <h3 className="text-lg font-medium text-text-primary">{skill.name}</h3>
              </div>
              <div className="w-full bg-primary/50 rounded-full h-2.5">
                <div
                  className="bg-accent h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-accent mb-2">{exp.title}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-text-primary font-medium">{exp.company}</span>
                <span className="text-text-secondary">{exp.period}</span>
              </div>
              <p className="text-text-secondary mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-text-secondary">{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-secondary/30 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-accent mb-2">{edu.degree}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-text-primary font-medium">{edu.institution}</span>
                <span className="text-text-secondary">{edu.period}</span>
              </div>
              <p className="text-text-secondary">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About; 