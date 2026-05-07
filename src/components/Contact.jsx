import { useState } from "react";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
});

const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Form Submitted:", formData);

  setSubmitted(true);

  // Reset form
  setFormData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Hide message after 3 seconds
  setTimeout(() => {
    setSubmitted(false);
  }, 3000);
};
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 90210 12345'],
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['care@medicare.com', 'support@medicare.com'],
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      details: ['Near District Hospital', 'Mantha Road, Jalna, Maharashtra 431203'],
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      details: ['Monday to Friday: 8:00 AM - 8:00 PM', 'Saturday: 9:00 AM - 5:00 PM'],
    },
  ];

  return (
    <div className="bg-white w-full">
      {/* Header section */}
      <div className="w-full bg-gradient-to-r from-primary-600 to-primary-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              We're here to help. Reach out to us with any questions or concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item) => (
              <div 
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                {item.details.map((detail, index) => (
                  <p key={index} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-white/90 text-lg">
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="p-8">
                {submitted && (
                  <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-4">
                    ✅ Your message has been sent successfully!
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-50 rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-gray-50 rounded-xl"
                    />
                  </div>
                  <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 bg-gray-50 rounded-xl"
                  />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="w-full px-6 py-4 bg-gray-50 rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      placeholder="Your Message"
                      className="w-full px-6 py-4 bg-gray-50 rounded-xl"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Map and Address */}
            <div>
              <p className="text-lg font-semibold text-primary uppercase tracking-wide">Visit Us</p>
              <h2 className="mt-3 text-4xl font-extrabold text-gray-900 mb-8">
                Our Location
              </h2>
              {/* Map placeholder - in a real app, you would use Google Maps or similar */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.9102670017655!2d75.91741907499805!3d19.84374938152541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda592bcdd6a753%3A0x7349605275ca65d0!2sJalna%20Critical%20Care%20-%20Best%20Cardiac%20Hospital%20In%20Jalna%20%7C%20Best%20Neurologist%20In%20Jalna%20%7C%20Best%20Diabetic%20Hospital%20In%20Jalna!5e0!3m2!1sen!2sin!4v1777954434614!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-3xl shadow-lg mb-8">
              </iframe>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center mr-4">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 90210 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center mr-4">
                    <EnvelopeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">care@medicare.com</p>
                    <p className="text-gray-600">support@medicare .com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-base font-semibold text-primary uppercase tracking-wide">Common Questions</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Find answers to common questions about our services and facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What are your visiting hours?</h3>
              <p className="text-gray-600">Our general visiting hours are from 10:00 AM to 8:00 PM daily. Specialized wards may have different visiting hours, please check with the specific department.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How do I schedule an appointment?</h3>
              <p className="text-gray-600">You can schedule appointments through our online portal, by calling our reception desk, or by visiting us in person. Emergency cases do not require prior appointments.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What insurance plans do you accept?</h3>
              <p className="text-gray-600">We accept a wide range of insurance plans. Please contact our insurance verification department for specific information about your coverage.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can I access my medical records online?</h3>
              <p className="text-gray-600">Yes, registered patients can access their medical records through our secure patient portal. You'll need to set up an account with valid identification.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
            Need Emergency Help?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Our emergency services are available 24/7. Don't hesitate to contact us immediately for urgent medical care.
          </p>
          <div className="inline-flex rounded-full bg-white px-8 py-4 shadow-lg">
            <a href="tel:+1555911" className="text-2xl font-bold text-primary">
              Emergency: +91 108
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
