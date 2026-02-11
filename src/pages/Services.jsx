import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HardHat,
  Building2,
  Wrench,
  Ruler,
  Paintbrush,
  Truck,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  Phone,
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

const Services = () => {
  const services = [
    {
      icon: HardHat,
      title: "General Contracting",
      shortDesc: "Complete construction solutions from concept to completion.",
      fullDesc:
        "Our general contracting services cover every aspect of your construction project. From initial planning and permits to final inspections and handover, we manage the entire process with precision and expertise. We coordinate all trades, manage subcontractors, and ensure your project is completed on time and within budget.",
      features: [
        "Project Planning & Management",
        "Permit Acquisition",
        "Subcontractor Coordination",
        "Quality Control",
        "Safety Management",
        "Final Inspections",
      ],
      image: "general-contracting",
    },
    {
      icon: Building2,
      title: "Residential Construction",
      shortDesc: "Building dream homes with precision and care.",
      fullDesc:
        "We specialize in creating beautiful, functional homes that reflect your lifestyle and preferences. From luxury villas to modern apartments, our residential construction services combine innovative design with superior craftsmanship to deliver living spaces that exceed expectations.",
      features: [
        "Custom Home Building",
        "Villa Construction",
        "Apartment Complexes",
        "Renovations & Extensions",
        "Smart Home Integration",
        "Sustainable Building",
      ],
      image: "residential",
    },
    {
      icon: Wrench,
      title: "Commercial Construction",
      shortDesc: "Modern commercial spaces for growing businesses.",
      fullDesc:
        "Our commercial construction expertise spans office buildings, retail spaces, hotels, and industrial facilities. We understand the unique requirements of commercial projects and deliver spaces that are functional, aesthetically pleasing, and built to support your business growth.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Hotels & Hospitality",
        "Healthcare Facilities",
        "Educational Institutions",
        "Industrial Buildings",
      ],
      image: "commercial",
    },
    {
      icon: Ruler,
      title: "Renovation & Remodeling",
      shortDesc: "Transforming existing spaces into modern marvels.",
      fullDesc:
        "Whether you want to update an outdated space or completely transform your property, our renovation and remodeling services breathe new life into existing structures. We handle everything from structural modifications to cosmetic updates with minimal disruption to your operations.",
      features: [
        "Structural Modifications",
        "Space Planning",
        "Modernization",
        "Energy Efficiency Upgrades",
        "Accessibility Improvements",
        "Historic Restoration",
      ],
      image: "renovation",
    },
    {
      icon: Paintbrush,
      title: "Interior Fit-Out",
      shortDesc: "Creating stunning interior spaces that inspire.",
      fullDesc:
        "Our interior fit-out services transform empty shells into functional, beautiful spaces. From ceiling installations and flooring to partition walls and custom millwork, we handle all aspects of interior construction to create environments that reflect your brand and meet your operational needs.",
      features: [
        "Ceiling Systems",
        "Flooring Solutions",
        "Partition Walls",
        "Custom Millwork",
        "Lighting Design",
        "AV Integration",
      ],
      image: "fitout",
    },
    {
      icon: Truck,
      title: "Civil Works",
      shortDesc: "Foundation and infrastructure for lasting structures.",
      fullDesc:
        "Our civil works division handles all site preparation and infrastructure needs. From excavation and foundation work to road construction and utility installations, we lay the groundwork for successful construction projects with expertise in earthworks, concrete, and structural elements.",
      features: [
        "Excavation & Earthworks",
        "Foundation Construction",
        "Road & Pavement",
        "Drainage Systems",
        "Utility Infrastructure",
        "Landscaping & Hardscaping",
      ],
      image: "civil",
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      shortDesc: "Expert oversight for seamless project execution.",
      fullDesc:
        "Our project management services ensure your construction project runs smoothly from start to finish. With experienced project managers overseeing every detail, we coordinate schedules, manage budgets, control quality, and mitigate risks to deliver successful outcomes.",
      features: [
        "Project Planning",
        "Budget Management",
        "Schedule Coordination",
        "Risk Assessment",
        "Quality Assurance",
        "Stakeholder Communication",
      ],
      image: "management",
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
      {/* Page Header */}
      <section className="bg-[#1a2744] text-white py-24 pt-32">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique
              needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              Construction Services We Provide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we offer a full range of construction
              services to bring your vision to life.
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
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-[#1a2744] to-[#2d3e5f] p-8">
                  <div className="w-16 h-16 bg-[#c9a961] rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-[#1a2744]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.shortDesc}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.fullDesc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle2
                          className="text-[#c9a961] mr-2"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              Our Project Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to ensure your project is completed
              efficiently and to the highest standards.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={index}>
                <div className="relative">
                  <div className="text-6xl font-bold text-[#c9a961]/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#c9a961] rounded-full" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-[#1a2744] text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Team",
                    desc: "Over 50 skilled professionals with decades of combined experience.",
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Rigorous quality control processes at every stage of construction.",
                  },
                  {
                    title: "Timely Delivery",
                    desc: "Proven track record of completing projects on schedule.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "Clear, competitive pricing with no hidden costs.",
                  },
                  {
                    title: "Safety First",
                    desc: "Comprehensive safety protocols to protect workers and property.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <CheckCircle2 className="text-[#1a2744]" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
                <p className="text-gray-300 mb-6">
                  Ready to start your project? Contact us today for a free
                  consultation and detailed quote.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="btn-primary w-full inline-flex items-center justify-center"
                  >
                    Request Quote
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <a
                    href="tel:+97141234567"
                    className="btn-secondary w-full inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Call Us Now
                  </a>
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
