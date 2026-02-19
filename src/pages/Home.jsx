import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  HardHat,
  Building2,
  Wrench,
  Ruler,
  Clock,
  Shield,
  Award,
  Users,
  ArrowRight,
  Star,
  Quote,
  ChevronRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const services = [
    {
      icon: HardHat,
      title: "General Contracting",
      desc: "Complete construction solutions from concept to completion",
    },
    {
      icon: Building2,
      title: "Residential Construction",
      desc: "Building dream homes with precision and care",
    },
    {
      icon: Wrench,
      title: "Commercial Construction",
      desc: "Modern commercial spaces for growing businesses",
    },
    {
      icon: Ruler,
      title: "Renovation & Remodeling",
      desc: "Transforming existing spaces into modern marvels",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "13+ Years Experience",
      desc: "Decade of excellence in construction industry",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      desc: "Rigorous quality control at every project phase",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "Committed to meeting project deadlines",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Skilled professionals and certified engineers",
    },
  ];

  const projects = [
    {
      name: "Al Noor Tower",
      location: "Downtown Dubai",
      type: "Commercial",
      status: "Completed",
    },
    {
      name: "Yasir Residences",
      location: "Dubai Marina",
      type: "Residential",
      status: "Completed",
    },
    {
      name: "Industrial Park",
      location: "Jebel Ali",
      type: "Industrial",
      status: "Ongoing",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "CEO, Al Futtaim Group",
      text: "Yasir Alnoor delivered our commercial project on time with exceptional quality. Their professionalism is unmatched.",
    },
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "They built our dream home with incredible attention to detail. Highly recommended for residential projects.",
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Director, Emirates Logistics",
      text: "Outstanding work on our warehouse facility. The team exceeded all our expectations.",
    },
  ];

  return (
    <div>
      <SEO
        title="Home - Construction Excellence in Dubai UAE"
        description="Leading construction company in Dubai, UAE. Building excellence through innovation and quality craftsmanship since 2010. Trusted contractor for residential, commercial, and industrial projects."
        keywords="construction company Dubai, UAE contractor, residential construction, commercial building, industrial construction, renovation, remodeling, Dubai construction, building excellence"
        canonicalUrl="https://www.yasiralnoorbc.com/"
        ogImage="/home-og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Yasir Alnoor Contracting LLC - Home",
          description:
            "Leading construction company in Dubai, UAE. Building excellence through innovation and quality craftsmanship since 2010.",
          url: "https://www.yasiralnoorbc.com/",
          mainEntity: {
            "@type": "Organization",
            name: "Yasir Alnoor Contracting LLC",
            url: "https://www.yasiralnoorbc.com",
            telephone: "+971582365647",
            email: "info@yasiralnoorbc.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Office 1201, Al Saqr Tower, Sheikh Zayed Road",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] xs:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 xs:pt-20">
        {/* Video Background Slider */}
        <div className="absolute inset-0">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#005baa]/90 via-[#005baa]/80 to-[#005baa]/70">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 xs:top-20 left-5 xs:left-10 w-48 xs:w-72 h-48 xs:h-72 bg-[#ffffff] rounded-full blur-[80px] xs:blur-[120px]" />
              <div className="absolute bottom-10 xs:bottom-20 right-5 xs:right-10 w-64 xs:w-96 h-64 xs:h-96 bg-[#ffffff] rounded-full blur-[100px] xs:blur-[150px]" />
            </div>
          </div>
        </div>

        {/* Video Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="container-custom relative z-10 text-center pt-12 xs:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 xs:px-6"
          >
            <span className="inline-block px-4 xs:px-6 py-2 xs:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs xs:text-sm font-bold uppercase tracking-wider mb-6 xs:mb-8">
              Since 2010 • UAE's Trusted Builder
            </span>
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 xs:mb-6 leading-tight">
              Building the Future with
              <br />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Strength & Precision
              </span>
            </h1>
            <p className="text-base xs:text-lg md:text-xl text-gray-200 mb-6 xs:mb-8 max-w-3xl xs:max-w-4xl mx-auto leading-relaxed px-2 xs:px-4">
              Trusted Construction & Contracting Experts in the UAE delivering
              <span className="text-white font-semibold"> excellence</span>{" "}
              since 2010
            </p>
            <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 justify-center items-center px-4 xs:px-6">
              <Link
                to="/contact"
                className="group bg-white hover:bg-gray-50 text-[#005baa] font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm xs:text-base"
              >
                Get a Free Consultation
                <ArrowRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </Link>
              <Link
                to="/projects"
                className="group bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
              >
                View Our Projects
                <ArrowRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8 mt-12 xs:mt-16 max-w-4xl xs:max-w-5xl mx-auto px-4 xs:px-6"
          >
            {[
              { number: "13+", label: "Years Experience" },
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Expert Team" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center group px-2 xs:px-4">
                <div className="relative mb-2 xs:mb-3">
                  <div className="text-3xl xs:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 text-3xl xs:text-4xl md:text-5xl font-bold text-white/20 blur-xl"></div>
                </div>
                <div className="text-gray-300 text-xs xs:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#005baa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00a2e5]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#005baa]/20">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
                Leading Construction
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#005baa] to-[#00a2e5]">
                  Excellence in the UAE
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Yasir Alnoor Contracting LLC is a premier construction company,
                leading and shaping the construction market with its
                state-of-the-art craft and cutting-edge practices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                With over 13 years of experience, we have built a reputation for
                delivering exceptional quality and timely project completion
                across the United Arab Emirates.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Licensed & Certified",
                  "Award Winning",
                  "24/7 Support",
                  "Competitive Pricing",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="text-[#005baa] mr-3" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center bg-gradient-to-r from-[#005baa] to-[#00a2e5] hover:from-[#00a2e5] hover:to-[#005baa] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More About Us
                <ChevronRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/home1.webp"
                    alt="Construction Project 1"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/home2.webp"
                    alt="Construction Project 2"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/home3.webp"
                    alt="Construction Project 3"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/home4.webp"
                    alt="Construction Project 4"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-[#005baa]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#00a2e5]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#005baa]/20">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#005baa] to-[#00a2e5]">
                Construction Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial planning to final handover, we provide end-to-end
              construction services tailored to your needs with excellence and
              precision.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-[#005baa]/20 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005baa] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-[#005baa] font-semibold hover:text-[#00a2e5] transition-colors duration-300 group"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="group inline-flex items-center bg-gradient-to-r from-[#005baa] to-[#00a2e5] hover:from-[#00a2e5] hover:to-[#005baa] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
              <ArrowRight
                className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-[#005baa] to-[#1F4E79] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              The Yasir Alnoor
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Advantage
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We combine expertise, innovation, and dedication to deliver
              construction excellence that exceeds expectations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index}>
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
                  <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-[#005baa]" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ffffff] font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005baa] mt-4 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most prominent projects that showcase our expertise
              and commitment to excellence.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="bg-cover bg-center bg-no-repeat h-72 flex items-center justify-center">
                  <img
                    src={`/featured${index + 1}.webp`}
                    alt={`Featured Project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#005baa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00a2e5]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#005baa]/20">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
              What Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#005baa] to-[#00a2e5]">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their experience working
              with us and the exceptional results we deliver.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full flex flex-col border border-gray-100 hover:border-[#005baa]/20 transform hover:-translate-y-2">
                  <Quote className="text-[#005baa] mb-6" size={40} />
                  <p className="text-gray-700 mb-8 flex-grow italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#00a2e5] fill-[#00a2e5]"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#005baa]/5 to-[#00a2e5]/5"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#005baa]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00a2e5]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <div className="bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-3xl p-16 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Contact us today for a free consultation and let us bring your
                  vision to life with our expertise and commitment to
                  excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white hover:bg-gray-50 text-[#005baa] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Get a Free Quote
                    <ArrowRight
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </Link>
                  <a
                    href="tel:+97141234567"
                    className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
