import { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Building2,
  HardHat,
  Wrench,
  Home,
  Users,
  Award,
  Clock,
  Shield,
  DollarSign,
  ArrowRight,
  Ruler,
  Paintbrush,
  Truck,
  ClipboardList,
  CheckCircle2,
  Phone,
} from "lucide-react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

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

const Services = () => {
  const services = [
    {
      icon: HardHat,
      title: "General Contracting",
      shortDesc: "Complete construction solutions from concept to completion.",
      fullDesc:
        "We manage entire construction projects from planning to handover, coordinating all trades and ensuring timely completion within budget.",
      features: [
        "Project Planning & Management",
        "Permit Acquisition",
        "Subcontractor Coordination",
        "Quality Control",
      ],
      image: "/alnoortower.webp",
    },
    {
      icon: Building2,
      title: "Residential Construction",
      shortDesc: "Building dream homes with precision and care.",
      fullDesc:
        "We create beautiful, functional homes from luxury villas to modern apartments, combining innovative design with superior craftsmanship.",
      features: [
        "Custom Home Building",
        "Villa Construction",
        "Apartment Complexes",
        "Renovations & Extensions",
      ],
      image: "/PalmViewVillas.webp",
    },
    {
      icon: Wrench,
      title: "Commercial Construction",
      shortDesc: "Modern commercial spaces for growing businesses.",
      fullDesc:
        "We build functional commercial spaces including offices, retail, hotels, and industrial facilities to support business growth.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Hotels & Hospitality",
        "Healthcare Facilities",
      ],
      image: "/BusinessBayPlaza.webp",
    },
    {
      icon: Ruler,
      title: "Renovation & Remodeling",
      shortDesc: "Transforming existing spaces into modern marvels.",
      fullDesc:
        "We breathe new life into existing structures through structural modifications and modern updates with minimal disruption.",
      features: [
        "Structural Modifications",
        "Space Planning",
        "Modernization",
        "Energy Efficiency Upgrades",
      ],
      image: "/home1.webp",
    },
    {
      icon: Paintbrush,
      title: "Interior Fit-Out",
      shortDesc: "Creating stunning interior spaces that inspire.",
      fullDesc:
        "We transform empty shells into functional, beautiful spaces with ceilings, flooring, partitions, and custom millwork.",
      features: [
        "Ceiling Systems",
        "Flooring Solutions",
        "Partition Walls",
        "Custom Millwork",
      ],
      image: "/home2.webp",
    },
    {
      icon: Truck,
      title: "Civil Works",
      shortDesc: "Foundation and infrastructure for lasting structures.",
      fullDesc:
        "We handle all site preparation and infrastructure needs from excavation to utility installations for successful projects.",
      features: [
        "Excavation & Earthworks",
        "Foundation Construction",
        "Road & Pavement",
        "Drainage Systems",
      ],
      image: "/IndustrialParkComplex.webp",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      desc: "We discuss your project requirements, timeline, and budget.",
    },
    {
      step: "02",
      title: "Planning",
      desc: "Our team creates detailed plans, designs, and project schedules.",
    },
    {
      step: "03",
      title: "Execution",
      desc: "We execute the construction with regular updates and quality checks.",
    },
    {
      step: "04",
      title: "Handover",
      desc: "Final inspection and handover of your completed project.",
    },
  ];

  return (
    <div>
      <SEO
        title="Our Services - Construction Solutions in Dubai UAE"
        description="Comprehensive construction services in Dubai UAE. General contracting, residential construction, commercial building, industrial construction, renovation & remodeling. Licensed contractor with 13+ years experience."
        keywords="construction services Dubai, general contracting, residential construction, commercial building, industrial construction, renovation, remodeling, UAE construction services"
        canonicalUrl="https://www.yasiralnoorbc.com/services"
        ogImage="/services-og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Construction Services",
          description:
            "Comprehensive construction services in Dubai UAE including general contracting, residential, commercial, and industrial construction.",
          provider: {
            "@type": "Organization",
            name: "Yasir Alnoor Contracting LLC",
            url: "https://www.yasiralnoorbc.com",
            telephone: "+971582365647",
          },
          areaServed: {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Construction Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "General Contracting",
                  description:
                    "Complete construction solutions from concept to completion",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Residential Construction",
                  description: "Building dream homes with precision and care",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Commercial Construction",
                  description:
                    "Modern commercial spaces for growing businesses",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Industrial Construction",
                  description: "State-of-the-art industrial facilities",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Renovation & Remodeling",
                  description:
                    "Transforming existing spaces into modern marvels",
                },
              },
            ],
          },
        }}
      />
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#005baa] via-[#1F4E79] to-[#2d3e5f]"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
          </div>
        </div>

        <div className="container-custom relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive construction solutions tailored to meet your unique
              <span className="text-white font-semibold">
                {" "}
                needs with excellence
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#005baa]/10 text-[#005baa] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#005baa] mt-4 mb-6">
              Construction Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer a full range of construction
              services to bring your vision to life with excellence and
              precision.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Service Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="text-[#005baa]" size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#005baa] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <CheckCircle2
                          className="text-[#00a2e5] mr-3 flex-shrink-0"
                          size={18}
                        />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button className="inline-flex items-center text-[#005baa] font-semibold hover:text-[#00a2e5] transition-colors duration-300 group">
                    Learn More
                    <ArrowRight
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      size={18}
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#005baa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00a2e5]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#005baa]/3 to-[#00a2e5]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#005baa]/20">
              How We Work
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-8 leading-tight">
              Our Project
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#005baa] to-[#00a2e5]">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A streamlined approach to ensure your project is completed
              <span className="text-[#005baa] font-semibold">
                {" "}
                efficiently{" "}
              </span>
              and to the
              <span className="text-[#005baa] font-semibold">
                {" "}
                highest standards
              </span>
            </p>
          </AnimatedSection>

          {/* Process Timeline */}
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#005baa]/20 to-transparent transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {process.map((item, index) => (
                <AnimatedSection key={index} className="relative">
                  <div className="group relative">
                    {/* Step Number Circle */}
                    <div className="relative mb-8 flex justify-center">
                      <div className="relative">
                        {/* Outer Glow Ring */}
                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>

                        {/* Main Circle */}
                        <div className="relative w-20 h-20 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-110">
                          <span className="text-2xl font-bold text-white">
                            {item.step}
                          </span>
                        </div>

                        {/* Pulse Animation */}
                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group-hover:border-[#005baa]/20 transform group-hover:-translate-y-2">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#005baa] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Connector for Mobile */}
                    {index < process.length - 1 && (
                      <div className="lg:hidden absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#005baa]/30 to-transparent">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#005baa] rounded-full"></div>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <AnimatedSection className="text-center mt-20">
            <div className="bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Let's work together to bring your vision to life with our
                  proven process.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-[#005baa] font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-[#005baa]/10 text-[#005baa] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#005baa] mt-4 mb-8">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Team",
                    desc: "Over 50 skilled professionals with decades of combined experience.",
                    icon: Users,
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Rigorous quality control processes at every stage of construction.",
                    icon: Award,
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Proven track record of completing projects on schedule.",
                    icon: Clock,
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "Clear, competitive pricing with no hidden costs.",
                    icon: DollarSign,
                  },
                  {
                    title: "Safety First",
                    desc: "Comprehensive safety protocols to protect workers and property.",
                    icon: Shield,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 bg-[#005baa] rounded-xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-[#00a2e5] transition-colors duration-300 shadow-lg">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#005baa] to-[#1F4E79] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-6">
                      Get a Free Quote
                    </h3>
                    <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                      Ready to start your project? Contact us today for a free
                      consultation and detailed quote tailored to your needs.
                    </p>
                    <div className="space-y-4">
                      <Link
                        to="/contact"
                        className="block bg-white hover:bg-gray-50 text-[#005baa] font-bold py-4 px-8 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Request Free Quote
                        <ArrowRight className="ml-2 inline-block" size={20} />
                      </Link>
                      <a
                        href="tel:+97141234567"
                        className="block bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-300"
                      >
                        <Phone className="mr-2 inline-block" size={20} />
                        Call Us Now
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 pt-8 border-t border-white/20">
                      <div className="flex items-center text-white/80 text-sm">
                        <Phone size={16} className="mr-2" />
                        <span>+971 4 123 4567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
