function Certifications() {
  const certifications = [
    {
      name: 'UniAthena Python Short Course',
      file: 'uniathena-python.pdf'
    },
    {
      name: 'Responsive Web Design - freeCodeCamp',
      file: 'responsive-web-design.pdf'
    },
    {
      name: 'Introduction To Python',
      file: 'introduction-python.pdf'
    },
    {
      name: 'Introduction to Digital Business Skills',
      file: 'digital-business-skills.pdf'
    },
    {
      name: 'Introduction to Cyber Security Awareness',
      file: 'cyber-security.pdf'
    },
    {
      name: 'Hardware Basics - CISCO',
      file: 'cisco-hardware.pdf'
    },
    {
      name: 'Fundamentals of Digital Marketing',
      file: 'digital-marketing.pdf'
    },
    {
      name: 'Data Science & Analytics',
      file: 'data-science.pdf'
    },
    {
      name: 'Build Your Own Chatbot - IBM',
      file: 'ibm-chatbot.pdf'
    },
    {
      name: 'AI for Beginners',
      file: 'ai-beginners.pdf'
    },
    {
      name: 'GFG Python Intermediate Course',
      file: 'GFG-Python-inter.pdf'
    }
  ]

  const handleCertificationClick = (filename) => {
    // Open PDF in new tab
    window.open(`/certifications/${filename}`, '_blank')
  }

  return (
    <section id="certifications" className="certifications">
      <h2 className="heading">My <span>Certifications</span></h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="certification-card"
            onClick={() => handleCertificationClick(cert.file)}
          >
            <div className="cert-icon">
              <i className='bx bxs-certificate'></i>
            </div>
            <h3>{cert.name}</h3>
            <div className="view-cert">
              <span>View Certificate</span>
              <i className='bx bx-link-external'></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications