function Home() {
  return (
    <>
      <div className="bars-animation">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bar" style={{ '--i': 6 - i }}></div>
        ))}
      </div>
      
      <section id="home" className="home">
        <div className="home-info">
          <h1>Hassan Mohammed</h1>
          <h2>
            I'm a&nbsp;
            <span style={{ '--i': 4 }} data-text="Full Stack Developer">Full Stack Developer</span>
            <span style={{ '--i': 3 }} data-text="AI & Python Enthusiast">AI & Python Enthusiast</span>
            <span style={{ '--i': 2 }} data-text="Student">Student</span>
            <span style={{ '--i': 1 }} data-text="Web Designer">Web Designer</span>
          </h2>
          <p>
            A young frontend developer proficient in HTML and CSS, actively learning JavaScript, 
            React, and Git. They are building foundational skills for creating dynamic, responsive 
            web interfaces and managing code effectively.
          </p>
          <div className="btn-sci">
            <a href="https://drive.google.com/uc?export=download&id=1_QLDKkWU5Xq0OIYAxL6uPd9Mk1fcyiuj" className="btn">Download CV</a>
            <div className="sci">
              <a href="https://github.com/Hassan-codes312" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-github'></i>
              </a>
              <a href="https://www.linkedin.com/in/hassan-mohammed" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin-square'></i>
              </a>
              <a href="https://www.instagram.com/hassan_muhammad26/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-instagram'></i>
              </a>
              <a href="https://youtube.com/@hassan-mohammed17?si=Z_EQBM90l_InxIX_" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-youtube'></i>
              </a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="/me.png" alt="hassan mohammed" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home