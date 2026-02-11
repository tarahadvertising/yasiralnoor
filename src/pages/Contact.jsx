import { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Dubai, United Arab Emirates",
      link: null,
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+971 544 018604",
      link: "tel:+971544018604",
    },
    {
      icon: Mail,
      title: "Email",
      content: "sumon98w1@gmail.com",
      link: "mailto:sumon98w1@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Sun - Thu: 8:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1a2744] text-white py-24 pt-32">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with us for your next construction project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <AnimatedSection className="lg:col-span-1">
              <div className="bg-[#1a2744] rounded-xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-300 mb-8">
                  Ready to start your project? Contact us today and let's
                  discuss how we can help bring your vision to life.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <info.icon className="text-[#1a2744]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-[#c9a961] transition"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-[#1a2744] mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-green-600">
                      Thank you for contacting us. Our team will review your
                      inquiry and get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition"
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="residential">
                            Residential Project
                          </option>
                          <option value="commercial">Commercial Project</option>
                          <option value="industrial">Industrial Project</option>
                          <option value="renovation">Renovation</option>
                          <option value="quote">Request Quote</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office to discuss your project in person. We're
              conveniently located in Dubai.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96 flex items-center justify-center relative">
              {/* Map Placeholder */}
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-[#c9a961]" size={48} />
                <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                  Yasir Alnoor Contracting LLC
                </h3>
                <p className="text-gray-600 mb-4">
                  Dubai, United Arab Emirates
                </p>
                <a
                  href="https://maps.google.com/?q=Dubai,UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  Get Directions
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "How long does a typical construction project take?",
                a: "Project duration varies based on size and complexity. A residential villa typically takes 12-18 months, while commercial projects may take 24-36 months. We provide detailed timelines during the planning phase.",
              },
              {
                q: "Do you provide free consultations?",
                a: "Yes, we offer free initial consultations to discuss your project requirements, budget, and timeline. This helps us understand your vision and provide accurate quotes.",
              },
              {
                q: "Are you licensed and insured?",
                a: "Yes, we are fully licensed by Dubai Municipality and carry comprehensive insurance coverage including liability and workers compensation insurance.",
              },
              {
                q: "What areas do you serve?",
                a: "We primarily operate across all emirates of the UAE, with major projects in Dubai, Abu Dhabi, Sharjah, and Ajman.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="font-bold text-[#1a2744] mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
