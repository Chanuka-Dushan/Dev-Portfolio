import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section__header" data-aos="fade-up">
          <h2 className="section__title">Contact <span>Me</span></h2>
          <div className="section__subtitle-line"></div>
          <p className="section__description">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>
        
        <div className="contact__container">
          <div className="contact__content" data-aos="fade-up">
            <h3 className="contact__title">Talk to Me</h3>
            <p className="contact__description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="contact__info">
              <div className="contact__card">
                <i className="fas fa-envelope contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">contact@johndeveloper.com</span>
                <a href="mailto:contact@johndeveloper.com" className="contact__button">
                  Write me <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              
              <div className="contact__card">
                <i className="fab fa-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data">+1 (555) 123-4567</span>
                <a href="https://api.whatsapp.com/send?phone=15551234567&text=Hello!" className="contact__button" target="_blank" rel="noopener noreferrer">
                  Write me <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              
              <div className="contact__card">
                <i className="fab fa-linkedin contact__card-icon"></i>
                <h3 className="contact__card-title">LinkedIn</h3>
                <span className="contact__card-data">johndeveloper</span>
                <a href="#" className="contact__button" target="_blank" rel="noopener noreferrer">
                  Connect <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              
              <div className="contact__card">
                <i className="fab fa-github contact__card-icon"></i>
                <h3 className="contact__card-title">GitHub</h3>
                <span className="contact__card-data">johndeveloper</span>
                <a href="#" className="contact__button" target="_blank" rel="noopener noreferrer">
                  View Profile <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact__form" data-aos="fade-up">
            <h3 className="contact__form-title">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="contact__form-div">
                <label className="contact__form-label">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="contact__form-input" 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact__form-div">
                <label className="contact__form-label">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="contact__form-input" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact__form-div">
                <label className="contact__form-label">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  className="contact__form-input" 
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact__form-div">
                <label className="contact__form-label">Message</label>
                <textarea 
                  name="message" 
                  cols={30} 
                  rows={10} 
                  className="contact__form-input" 
                  placeholder="Tell me about your project or inquiry"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button contact__form-button"
                disabled={submitting}
              >
                {submitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                {!submitting && !submitted && <i className="fas fa-paper-plane"></i>}
                {submitting && <i className="fas fa-spinner fa-spin"></i>}
                {submitted && <i className="fas fa-check"></i>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;