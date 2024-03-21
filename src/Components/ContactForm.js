import React, { useState } from 'react';
import { Envelope, GeoAlt, Telephone, Globe } from 'react-bootstrap-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch('https://formspree.io/f/mayrdjdd', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      } else {
        alert('There was a problem sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem sending your message. Please try again later.');
    }
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: "50px", paddingBottom: "150px" }}>
      {showSuccessMessage && (
        <div className="alert alert-success mt-3" role="alert">
          Your message has been sent successfully!
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="title-container text-white p-3 mb-3 bg-primary text-center">
                <h2 className="contact-us-title mb-0">CONTACT US</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Company or Organization:</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label font-weight-bold">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control border border-primary font-weight-bold"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="contact-sidebar mt-4">
                <h3>Lets get in touch</h3>
                <p>We are open for any suggestions or just to have a chat</p>
                <div className="contact-info">
                  <Envelope /> senditkenya@gmail.com
                </div>
                <div className="contact-info">
                  <GeoAlt /> Nairobi 198 west 21 street
                </div>
                <div className="contact-info">
                  <Telephone /> +123456789
                </div>
                <div className="contact-info">
                  <Globe /> sendit.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
