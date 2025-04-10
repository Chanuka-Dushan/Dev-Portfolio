import { useState } from 'react';

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
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment processing.",
      image: "https://via.placeholder.com/500x300/1f2937/4f46e5?text=E-Commerce+Platform",
      category: ["web", "fullstack"],
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      demo: "#",
      code: "#"
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, progress, and nutrition with personalized recommendations.",
      image: "https://via.placeholder.com/500x300/1f2937/4f46e5?text=Fitness+Tracking+App",
      category: ["mobile"],
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      demo: "#",
      code: "#"
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A dashboard for managing tasks, projects, and team collaboration with real-time updates.",
      image: "https://via.placeholder.com/500x300/1f2937/4f46e5?text=Task+Management",
      category: ["web", "frontend"],
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      demo: "#",
      code: "#"
    },
    {
      id: 4,
      title: "Social Networking Platform",
      description: "A social media platform with features like user profiles, posts, comments, likes, and real-time chat.",
      image: "https://via.placeholder.com/500x300/1f2937/4f46e5?text=Social+Network",
      category: ["web", "fullstack"],
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      demo: "#",
      code: "#"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "A weather forecast application with location-based forecasts, hourly and weekly predictions, and weather alerts.",
      image: "https://via.placeholder.com/500x300/1f2937/4f46e5?text=Weather+App",
      category: ["mobile", "frontend"],
      tags: ["React Native", "OpenWeatherAPI", "Redux", "Google Maps API"],
      demo: "#",
      code: "#"
    },
    {
      id: 6,
      title: "Real Estate Listing Platform",
      description: "A platform for listing and searching real estate properties with maps, filters, and contact forms.",
      image: "https://via.placeholder.com/500x300/1f2937/4f46e5?text=Real+Estate+Platform",
      category: ["web", "fullstack"],
      tags: ["Angular", "Node.js", "PostgreSQL", "Google Maps API"],
      demo: "#",
      code: "#"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));
  
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section__header" data-aos="fade-up">
          <h2 className="section__title">My <span>Projects</span></h2>
          <div className="section__subtitle-line"></div>
          <p className="section__description">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="projects__filters" data-aos="fade-up">
          <span 
            className={`projects__item ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All
          </span>
          <span 
            className={`projects__item ${filter === 'web' ? 'active' : ''}`} 
            onClick={() => setFilter('web')}
          >
            Web
          </span>
          <span 
            className={`projects__item ${filter === 'mobile' ? 'active' : ''}`} 
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </span>
          <span 
            className={`projects__item ${filter === 'frontend' ? 'active' : ''}`} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </span>
          <span 
            className={`projects__item ${filter === 'fullstack' ? 'active' : ''}`} 
            onClick={() => setFilter('fullstack')}
          >
            Fullstack
          </span>
        </div>
        
        <div className="projects__container">
          <div className="projects__content">
            {filteredProjects.map((project) => (
              <div key={project.id} className="projects__card" data-aos="zoom-in">
                <div className="projects__img">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                
                <div className="projects__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="projects__tag">{tag}</span>
                  ))}
                </div>
                
                <div className="projects__buttons">
                  {project.demo && (
                    <a href={project.demo} className="button projects__button">
                      <span>Demo</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                  
                  {project.code && (
                    <a href={project.code} className="button button--ghost projects__button">
                      <span>Code</span>
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;