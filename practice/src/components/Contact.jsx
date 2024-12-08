import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '', // Added position field
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ugmnvn9', // Your EmailJS Service ID
        'template_hhkv33h', // Your EmailJS Template ID
        {
          from_name: formData.name,        // {{from_name}} in template
          from_email: formData.email,      // {{from_email}} in template
          position: formData.position,     // {{position}} in template
          message: formData.message,       // {{message}} in template
          to_name: "Your Name",            // Your name for "To" field (static)
          subject: `Job Inquiry from ${formData.name} - ${formData.position}`, // Dynamic subject line
        },
        'KxdT6dmWPOgf_iu7q' // Your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setIsSent(true);
          setFormData({ name: '', email: '', position: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-lg text-center mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded shadow"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="position">
              Job Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {isSent && (
            <p className="text-center text-green-600 mt-4">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
