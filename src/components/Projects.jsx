function Projects() {
  const projects = [
    {
      name: 'Javascript Calculator',
      description: 'A fully functional calculator built with vanilla JavaScript',
      link: 'https://javascriptc-alculator.netlify.app/', // Replace with your actual link
      status: 'completed'
    },
    {
      name: 'React Weather APP',
      description: 'Weather application using React and external API integration',
      link: 'https://weather-app-api-react-1.netlify.app/', // Replace with your actual link
      status: 'completed'
    },
    {
      name: 'Netflix Clone',
      description: 'Netflix UI clone with React Router and movie API',
      link: 'https://rajuflix.netlify.app/', // Replace with your actual link
      status: 'completed'
    },
    {
      name: 'PDF Converter (CONVERT CRAFT)',
      description: 'Web application for converting documents to PDF format',
      link: 'https://convertcraftcc.netlify.app/', // Replace with your actual link
      status: 'completed'
    },
    {
      name: 'Javascript To-do List',
      description: 'Task management application with local storage',
      link: 'https://to-do-li-st-1.netlify.app/', // Replace with your actual link
      status: 'completed'
    },
    {
      name: 'CLIPVIBE',
      description: 'Social media platform for content creators',
      link: '#',
      status: 'coming-soon'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-box ${project.status === 'coming-soon' ? 'coming-soon' : ''}`}
          >
            {project.status === 'coming-soon' && <div className="ribbon">Coming Soon</div>}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => project.status === 'coming-soon' && e.preventDefault()}
            >
              {project.status === 'coming-soon' ? 'Coming Soon' : 'View Project'}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects