const projects = [
    {
      title: "Campus Emergency Response System",
      stack: ["React", "Django", "DRF"],
      description: "A fullstack system enabling real-time emergency reporting and swift response on campus.",
      image: "cers.png",
      link: "https://github.com/LeonardOgendo/Campus-Emergency-Response-System/",
      hosted: false,
    },
    {
      title: "E-commerce Application",
      stack: ["DTL", "Django"],
      description: "A complete e-commerce solution with cart, checkout, and admin controls using Django templates.",
      image: "ecommerce.png",
      link: "https://github.com/LeonardOgendo/Ecommerce-Django-Web-Application/",
      hosted: false,
    },
    {
      title: "Tech Consultancy Website",
      stack: ["SCSS", "HTML", "CSS", "Bootstrap"],
      description: "A professional, responsive landing page designed for tech consultancy firms.",
      image: "consultancy.png",
      link: "https://amden.co.ke/",
      hosted: true,
    },
    {
      title: "E-Learning System",
      stack: ["React", "Django"],
      description: "An e-learning platform for managing courses, enrollments, and progress tracking.",
      image: "elearning.png",
      link: "https://github.com/LeonardOgendo/EH-Academy-App/",
      hosted: false,
    },
    {
      title: "Betting Model App",
      stack: ['In design'],
      description: "A machine learning-powered platform for football prediction and analytics.",
      image: "bettin_model.jpeg",
      link: "#",
      hosted: false,
    },
    {
      title: "Portfolio Website",
      stack: ["React", "CSS"],
      description: "This personal portfolio showcasing my development skills, projects, and more.",
      image: "portfolio.png",
      link: "https://github.com/LeonardOgendo/My_React_Portfolio/",
      hosted: true,
    }
  ];
  
  const MyProjects = () => {
    return (
      <div className="section-body" id="projects">
        <h2 className="section-title">
          <span className="white-text">My</span> <span className="highlight">Projects</span>
        </h2>
        <p className="section-intro">
          Each line of code crafted with precision—these projects embody my skillset and creativity in web development.
        </p>
  
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
                <div className="card-image">
                    <img src={`/images/${project.image}`} alt={project.title} className="project-image" />
                </div>
                <div className="card-content">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-stack">{project.stack.map(techStack => (<span className="tech-s">{techStack}</span>))}</p>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      {project.hosted ? "Visit Site →" : "View on GitHub →"}
                    </a>
                  </div>
                </div> 
            </div>
          ))}
        </div>
        <span id="more-projects"><a href="https://github.com/LeonardOgendo/">... more Projects</a></span>
      </div>
    );
  };
  
  export default MyProjects;