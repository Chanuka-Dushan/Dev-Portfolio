import { useState } from 'react';

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  tags: string[];
  demo?: string;
  code?: string;
}

const Projects = () => {
  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and payment processing.",
      image: "project1.svg",
      category: ["web", "fullstack"],
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      demo: "#",
      code: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A mobile application for managing tasks, projects, and team collaboration with real-time updates.",
      image: "project2.svg",
      category: ["mobile", "frontend"],
      tags: ["Flutter", "Firebase", "Dart", "Material Design"],
      demo: "#",
      code: "#"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for tracking social media performance across multiple platforms.",
      image: "project3.svg",
      category: ["web", "frontend"],
      tags: ["React", "D3.js", "Tailwind CSS", "Chart.js"],
      demo: "#",
      code: "#"
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description: "A real-time messaging platform with private chats, group conversations, and media sharing.",
      image: "project4.svg",
      category: ["web", "fullstack"],
      tags: ["Next.js", "Socket.io", "PostgreSQL", "TypeScript"],
      demo: "#",
      code: "#"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A cross-platform mobile app for tracking workouts, setting goals, and monitoring health metrics.",
      image: "project5.svg",
      category: ["mobile", "fullstack"],
      tags: ["React Native", "Node.js", "Express", "MongoDB"],
      demo: "#",
      code: "#"
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "A weather application providing real-time forecasts, historical data, and location-based services.",
      image: "project6.svg",
      category: ["web", "frontend"],
      tags: ["React", "OpenWeather API", "Leaflet Maps", "Redux"],
      demo: "#",
      code: "#"
    }
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter the projects based on the active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section__header" data-aos="fade-up">
          <h2 className="section__title">My <span>Projects</span></h2>
          <div className="section__subtitle-line"></div>
          <p className="section__description">
            Here are some of my recent projects showcasing my skills and experience in web and mobile development.
          </p>
        </div>
        
        <div className="projects__filters" data-aos="fade-up">
          <button 
            className={`projects__filter ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`projects__filter ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web
          </button>
          <button 
            className={`projects__filter ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`projects__filter ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`projects__filter ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fullstack')}
          >
            Fullstack
          </button>
        </div>
        
        <div className="projects__container">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="projects__card" 
              data-category={project.category.join(' ')}
              data-aos="fade-up"
              data-aos-delay={`${(project.id % 3) * 100}`}
            >
              <div className="projects__img-container">
                <svg className="projects__img" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="400" fill="#1f2937" />
                  <rect x="50" y="50" width="500" height="300" rx="10" fill="#111827" />
                  
                  {/* Project thumbnail SVG - Different for each project */}
                  {project.id % 3 === 0 && (
                    <>
                      <circle cx="300" cy="200" r="100" fill="#6366f1" opacity="0.2" />
                      <rect x="150" y="150" width="300" height="30" rx="5" fill="#374151" />
                      <rect x="150" y="200" width="300" height="30" rx="5" fill="#374151" />
                      <rect x="150" y="250" width="200" height="30" rx="5" fill="#374151" />
                    </>
                  )}
                  
                  {project.id % 3 === 1 && (
                    <>
                      <rect x="150" y="100" width="300" height="40" rx="5" fill="#374151" />
                      <circle cx="200" cy="200" r="50" fill="#a855f7" opacity="0.3" />
                      <circle cx="300" cy="200" r="50" fill="#6366f1" opacity="0.3" />
                      <circle cx="400" cy="200" r="50" fill="#4ade80" opacity="0.3" />
                      <rect x="200" y="280" width="200" height="30" rx="5" fill="#374151" />
                    </>
                  )}
                  
                  {project.id % 3 === 2 && (
                    <>
                      <rect x="120" y="120" width="360" height="160" rx="5" fill="#374151" />
                      <rect x="150" y="150" width="100" height="100" rx="5" fill="#6366f1" opacity="0.3" />
                      <rect x="270" y="150" width="100" height="100" rx="5" fill="#a855f7" opacity="0.3" />
                      <rect x="150" y="270" width="300" height="20" rx="5" fill="#4ade80" opacity="0.3" />
                    </>
                  )}
                </svg>
                <div className="projects__img-overlay"></div>
              </div>
              
              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                
                <div className="projects__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="projects__tag">{tag}</span>
                  ))}
                </div>
                
                <div className="projects__links">
                  {project.demo && (
                    <a href={project.demo} className="projects__link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  
                  {project.code && (
                    <a href={project.code} className="projects__link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;