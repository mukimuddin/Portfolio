import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, shopping cart, and payment integration.',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com/mkings/ecommerce',
      live: 'https://mkings-shop.com',
      featured: true
    },
    {
      title: 'Real-time Chat Application',
      description: 'Modern chat application with real-time messaging, file sharing, and video calls. Built using WebSocket technology and WebRTC.',
      image: '/projects/chat.jpg',
      tags: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'Redis'],
      github: 'https://github.com/mkings/chat-app',
      live: 'https://mkings-chat.com',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'A comprehensive project management tool with task tracking, team collaboration, and analytics dashboard.',
      image: '/projects/tasks.jpg',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/mkings/task-manager',
      live: 'https://mkings-tasks.com',
      featured: true
    },
    {
      title: 'AI Image Generator',
      description: 'Web application that generates unique images using AI. Integrated with OpenAI API and features image manipulation tools.',
      image: '/projects/ai-image.jpg',
      tags: ['React', 'OpenAI API', 'Canvas API', 'Node.js'],
      github: 'https://github.com/mkings/ai-image-gen',
      live: 'https://mkings-ai-art.com'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile-responsive fitness tracking application with workout plans, progress tracking, and social features.',
      image: '/projects/fitness.jpg',
      tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      github: 'https://github.com/mkings/fitness-app',
      live: 'https://mkings-fitness.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.',
      image: '/projects/weather.jpg',
      tags: ['React', 'Weather API', 'Mapbox', 'Chart.js'],
      github: 'https://github.com/mkings/weather-app',
      live: 'https://mkings-weather.com'
    },
    {
      title: 'Blog Platform',
      description: 'Full-stack blog platform with markdown support, comments, and user authentication.',
      image: '/projects/blog.jpg',
      tags: ['Next.js', 'MongoDB', 'AWS S3', 'Tailwind CSS'],
      github: 'https://github.com/mkings/blog-platform',
      live: 'https://mkings-blog.com'
    },
    {
      title: 'Portfolio Generator',
      description: 'Web application that helps developers create beautiful portfolios with customizable templates.',
      image: '/projects/portfolio.jpg',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/mkings/portfolio-gen',
      live: 'https://mkings-portfolio.com'
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h1>
        <p className="text-lg text-text-secondary mb-12 max-w-3xl">
          Here are some of my recent projects that showcase my skills in web development,
          from frontend design to full-stack applications. Each project represents unique
          challenges and solutions.
        </p>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-accent">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card group"
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-accent">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card group"
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 