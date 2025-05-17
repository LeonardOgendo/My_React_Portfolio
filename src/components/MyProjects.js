const projects = [
    {
      title: "Campus Emergency Response System",
      stack: ["React", "Django", "DRF"],
      description: "A fullstack system enabling real-time emergency reporting and swift response on campus.",
      image: "cers.png",
      link: "https://github.com/YourUsername/emergency-response-system"
    },
    {
      title: "E-commerce Web App",
      stack: ["DTL", "Django"],
      description: "A complete e-commerce solution with cart, checkout, and admin controls using Django templates.",
      image: "/ecommerce-app.jpg",
      link: "https://github.com/YourUsername/ecommerce-web-app"
    },
    {
      title: "Tech Consultancy Website",
      stack: ["SCSS", "HTML", "CSS", "Bootstrap"],
      description: "A professional, responsive landing page designed for tech consultancy firms.",
      image: "consultancy.png",
      link: "https://github.com/YourUsername/tech-consultancy-site"
    },
    {
      title: "E-Learning Web App",
      stack: ["React", "Django"],
      description: "An e-learning platform for managing courses, enrollments, and progress tracking.",
      image: "elearning.png",
      link: "https://github.com/YourUsername/e-learning-app"
    },
    {
      title: "Betting Model App",
      stack: ['In design'],
      description: "A machine learning-powered platform for football prediction and analytics.",
      image: "bettin_model.jpeg",
      link: "#"
    },
    {
      title: "Portfolio Website",
      stack: ["React", "CSS"],
      description: "This personal portfolio showcasing my development skills, projects, and more.",
      image: "portfolio.png",
      link: "https://github.com/YourUsername/portfolio"
    }
  ];
  
  const MyProjects = () => {
    return (
      <div className="projects-section">
        <h2>
          <span className="white-text">My</span> <span className="highlight">Projects</span>
        </h2>
        <p className="projects-intro">
          Each line of code crafted with precision—these projects embody my skillset and creativity in web development.
        </p>
  
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
                <div className="card-image">
                    <img src={`/images/${project.image}`} alt={project.title} className="project-image" />
                </div>
                <div className="card-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-stack">{project.stack.map(techStack => (<span className="tech-s">{techStack}</span>))}</p>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                        View on GitHub →
                    </a>
                </div> 
            </div>
          ))}
        </div>
        <span id="more-projects"><a href="#">... more Projects</a></span>
      </div>
    );
  };
  
  export default MyProjects;