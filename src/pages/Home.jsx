import { useEffect, useRef } from "react";
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#1e3052] to-[#243657]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a961] rounded-full blur-[120px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a961] rounded-full blur-[150px]" />
          </div>
        </div>

        <div className="container-custom relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#c9a961]/20 text-[#c9a961] rounded-full text-sm font-medium mb-6">
              Since 2010 • UAE's Trusted Builder
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building the Future with
              <br />
              <span className="text-[#c9a961]">Strength & Precision</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Trusted Construction & Contracting Experts in the UAE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/projects"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {[
              { number: "13+", label: "Years Experience" },
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Expert Team" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#c9a961] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-6">
                Leading Construction Excellence in the UAE
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Yasir Alnoor Contracting LLC is a premier construction company,
                leading and shaping the construction market with its
                state-of-the-art craft and cutting-edge practices. With over 13
                years of experience, we have built a reputation for delivering
                exceptional quality and timely project completion.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our commitment to innovation, safety, and client satisfaction
                has made us the preferred choice for residential, commercial,
                and industrial construction projects across the United Arab
                Emirates.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Licensed & Certified",
                  "Award Winning",
                  "24/7 Support",
                  "Competitive Pricing",
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="text-[#c9a961] mr-2" size={20} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Learn More About Us
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </AnimatedSection>
            <AnimatedSection className="relative">
              <div className="bg-gradient-to-br from-[#1a2744] to-[#2d3e5f] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <Building2
                      className="mx-auto mb-2 text-[#c9a961]"
                      size={32}
                    />
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <Users className="mx-auto mb-2 text-[#c9a961]" size={32} />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-gray-300">Experts</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <Award className="mx-auto mb-2 text-[#c9a961]" size={32} />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-gray-300">Awards</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <Clock className="mx-auto mb-2 text-[#c9a961]" size={32} />
                    <div className="text-2xl font-bold">13+</div>
                    <div className="text-sm text-gray-300">Years</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial planning to final handover, we provide end-to-end
              construction services tailored to your needs.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#1a2744] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c9a961] transition-colors duration-300">
                  <service.icon
                    className="text-[#c9a961] group-hover:text-white"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-[#c9a961] font-medium text-sm hover:text-[#1a2744] transition"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-[#1a2744] text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              The Yasir Alnoor Advantage
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              construction excellence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index}>
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
                  <div className="w-16 h-16 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-[#1a2744]" size={28} />
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
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
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
                <div className="bg-gradient-to-br from-[#1a2744] to-[#2d3e5f] h-72 flex items-center justify-center">
                  <Building2 className="text-[#c9a961]/30" size={80} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#c9a961] text-white text-xs rounded-full mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      {project.location}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded ${project.status === "Completed" ? "bg-green-500" : "bg-blue-500"} text-white`}
                    >
                      {project.status}
                    </span>
                  </div>
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working
              with us.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">
                  <Quote className="text-[#c9a961] mb-4" size={32} />
                  <p className="text-gray-600 mb-6 flex-grow italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#1a2744] rounded-full flex items-center justify-center text-[#c9a961] font-bold text-lg mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a2744]">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#c9a961] fill-[#c9a961]"
                        size={16}
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
      <section className="section-padding bg-gradient-to-r from-[#1a2744] to-[#2d3e5f] text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Get a Free Quote
              </Link>
              <a
                href="tel:+97141234567"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Call Us Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
