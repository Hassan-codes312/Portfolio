function About() {
  return (
    <section id="about" className="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-container">
        <div className="about-content">
          <p>
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating responsive, user-friendly applications and continuously learning 
            new technologies to enhance my skills.
          </p>
          <div className="about-info">
            <div className="info-item">
              <span>Name:</span>
              <p>Hassan Mohammed</p>
            </div>
            <div className="info-item">
              <span>Email:</span>
              <p>muhammadhassang700
                @gmail.com</p>
            </div>
            <div className="info-item">
              <span>Location:</span>
              <p>Rawalpindi, Pakistan</p>
            </div>
            <div className="info-item">
              <span>Education:</span>
              <p>ICS (Intermediate Computer Science) </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About