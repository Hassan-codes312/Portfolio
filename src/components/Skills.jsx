function Skills() {
  const skills = [
    { name: 'React Vite', level: 85 },
    { name: 'TailwindCSS', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'JavaScript', level: 90 },
    { name: 'CSS', level: 95 },
    { name: 'HTML', level: 98 },
    { name: 'Python', level: 80 },
    { name: 'API Integration', level: 85 }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills