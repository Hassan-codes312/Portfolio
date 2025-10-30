function Services() {
  const services = [
    { icon: 'bx-code-alt', title: 'Web Development' },
    { icon: 'bxs-paint', title: 'UI/UX Design' },
    { icon: 'bx-palette', title: 'Graphic Design' },
    { icon: 'bx-trending-up', title: 'SEO' },
    { icon: 'bx-slideshow', title: 'Video Editing' },
    { icon: 'bx-camera', title: 'Photoshop' }
  ]

  return (
    <section id="services" className="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="services-box">
            <div className="icon">
              <i className={`bx ${service.icon}`}></i>
              {/* Arrow removed as requested */}
            </div>
            <h3>{service.title}</h3>
            <p>
              Professional {service.title.toLowerCase()} services with modern 
              technologies and best practices for optimal results.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services