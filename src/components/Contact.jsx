import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_f6vujwj', // Replace with your EmailJS service ID
      'template_5h4k7t7', // Replace with your EmailJS template ID
      formRef.current,
      'omAO0ts2h5s9jWgkl' // Replace with your EmailJS public key
    )
    .then((result) => {
      setSubmitStatus('success');
      formRef.current.reset();
    })
    .catch((error) => {
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    });
  };

  const openWhatsApp = () => {
    const message = "Hello Hassan! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/923189176292?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openMap = () => {
    const mapUrl = `https://www.google.com/maps/place/Rawalpindi,+Punjab,+Pakistan`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-container">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="user_subject" 
                placeholder="Subject" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="status-message success">
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="status-message error">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item" onClick={openWhatsApp} style={{cursor: 'pointer'}}>
            <i className='bx bxl-whatsapp'></i>
            <div>
              <h3>WhatsApp</h3>
              <p>+92 318 9176292</p>
              <span className="click-hint">Click to chat</span>
            </div>
          </div>
          
          <div className="contact-item">
            <i className='bx bx-envelope'></i>
            <div>
              <h3>Email</h3>
              <p>muhammadhassang700@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item" onClick={openMap} style={{cursor: 'pointer'}}>
            <i className='bx bx-map'></i>
            <div>
              <h3>Location</h3>
              <p>Rawalpindi, Pakistan</p>
              <span className="click-hint">Click to view map</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  );
}

// Footer Component with Privacy Policy and Terms
function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <p>&copy; 2025 Hassan Mohammed. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); openModal('privacy'); }}>
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); openModal('terms'); }}>
              Terms of Service
            </a>
            <a href="#">Cookie Policy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
        <div className="footer-social">
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

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Privacy Policy</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className='bx bx-x'></i>
              </button>
            </div>
            <div className="modal-body">
              <h4>Information We Collect</h4>
              <p>We collect information you provide directly to us, such as when you fill out our contact form.</p>
              
              <h4>How We Use Your Information</h4>
              <p>We use the information we collect to respond to your inquiries and provide services.</p>
              
              <h4>Data Security</h4>
              <p>We implement appropriate security measures to protect your personal information.</p>
              
              <h4>Contact Us</h4>
              <p>If you have any questions about this Privacy Policy, please contact us at muhammadhassang700@gmail.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {activeModal === 'terms' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Terms of Service</h3>
              <button className="modal-close" onClick={closeModal}>
                <i className='bx bx-x'></i>
              </button>
            </div>
            <div className="modal-body">
              <h4>Acceptance of Terms</h4>
              <p>By accessing and using this portfolio website, you accept and agree to be bound by these terms.</p>
              
              <h4>Use License</h4>
              <p>Permission is granted to temporarily view the materials on this website for personal, non-commercial use.</p>
              
              <h4>Disclaimer</h4>
              <p>The materials on this website are provided on an 'as is' basis.</p>
              
              <h4>Governing Law</h4>
              <p>These terms and conditions are governed by and construed in accordance with the laws of Pakistan.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Contact;