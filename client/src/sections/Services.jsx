import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaMobile, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-accent" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.js. Focus on responsive design and optimal performance.',
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'Responsive Web Design',
        'Cross-browser Compatibility'
      ]
    },
    {
      icon: <FaDesktop className="text-4xl text-accent" />,
      title: 'Frontend Development',
      description: 'Creating beautiful and intuitive user interfaces with modern design principles and smooth animations.',
      features: [
        'Modern UI/UX Design',
        'Interactive Animations',
        'Performance Optimization',
        'SEO Best Practices'
      ]
    },
    {
      icon: <FaServer className="text-4xl text-accent" />,
      title: 'Backend Development',
      description: 'Robust server-side solutions using Node.js, Express, and other modern backend technologies.',
      features: [
        'RESTful API Development',
        'Authentication & Authorization',
        'Server-side Rendering',
        'Microservices Architecture'
      ]
    },
    {
      icon: <FaMobile className="text-4xl text-accent" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and other modern mobile frameworks.',
      features: [
        'iOS & Android Apps',
        'Native Performance',
        'Offline Functionality',
        'Push Notifications'
      ]
    },
    {
      icon: <FaDatabase className="text-4xl text-accent" />,
      title: 'Database Design',
      description: 'Efficient database architecture and management for optimal data storage and retrieval.',
      features: [
        'SQL & NoSQL Databases',
        'Data Modeling',
        'Query Optimization',
        'Data Migration'
      ]
    },
    {
      icon: <FaCloud className="text-4xl text-accent" />,
      title: 'Cloud Services',
      description: 'Deployment and management of applications on cloud platforms like AWS, Google Cloud, and Azure.',
      features: [
        'Cloud Deployment',
        'Serverless Architecture',
        'CI/CD Implementation',
        'Cloud Security'
      ]
    }
  ];

  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Services</h1>
        <p className="text-lg text-text-secondary mb-12 max-w-3xl">
          I offer a comprehensive range of development services to help bring your digital ideas to life.
          Each service is tailored to meet your specific needs and requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-box group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-4">Ready to Start Your Project?</h2>
          <p className="text-text-secondary mb-8">
            Let's discuss how I can help bring your ideas to life with the perfect solution for your needs.
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services; 