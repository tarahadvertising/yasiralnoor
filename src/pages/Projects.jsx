import { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Industrial"];

  const projects = [
    {
      id: 1,
      name: "Al Noor Tower",
      location: "Downtown Dubai",
      type: "Commercial",
      status: "Completed",
      year: "2023",
      description:
        "A 45-story mixed-use tower featuring premium office spaces and retail outlets.",
      features: [
        "45 Floors",
        "150,000 sqm",
        "LEED Gold Certified",
        "Smart Building Technology",
      ],
      client: "Al Noor Holdings",
    },
    {
      id: 2,
      name: "Yasir Residences",
      location: "Dubai Marina",
      type: "Residential",
      status: "Completed",
      year: "2022",
      description:
        "Luxury residential complex with 120 apartments and world-class amenities.",
      features: [
        "120 Apartments",
        "Swimming Pool",
        "Gym & Spa",
        "Underground Parking",
      ],
      client: "Private Developer",
    },
    {
      id: 3,
      name: "Industrial Park Complex",
      location: "Jebel Ali",
      type: "Industrial",
      status: "Completed",
      year: "2021",
      description:
        "State-of-the-art logistics and warehousing facility for regional operations.",
      features: [
        "50,000 sqm",
        "Cold Storage",
        "Loading Docks",
        "24/7 Security",
      ],
      client: "Emirates Logistics",
    },
    {
      id: 4,
      name: "Palm View Villas",
      location: "Palm Jumeirah",
      type: "Residential",
      status: "Completed",
      year: "2023",
      description:
        "Exclusive waterfront villas with private beach access and panoramic views.",
      features: [
        "15 Luxury Villas",
        "Private Beach",
        "Smart Home Systems",
        "Landscaped Gardens",
      ],
      client: "Palm Developers",
    },
    {
      id: 5,
      name: "Business Bay Plaza",
      location: "Business Bay",
      type: "Commercial",
      status: "Completed",
      year: "2022",
      description:
        "Modern commercial plaza with flexible office spaces and conference facilities.",
      features: [
        "25 Floors",
        "Flexible Offices",
        "Conference Center",
        "Food Court",
      ],
      client: "Bay Properties",
    },
    {
      id: 6,
      name: "Manufacturing Hub",
      location: "Dubai Industrial City",
      type: "Industrial",
      status: "Ongoing",
      year: "2024",
      description:
        "Advanced manufacturing facility with sustainable design and automation systems.",
      features: [
        "75,000 sqm",
        "Solar Power",
        "Automation Ready",
        "Eco-Friendly Design",
      ],
      client: "Tech Manufacturing LLC",
    },
    {
      id: 7,
      name: "Marina Heights",
      location: "Dubai Marina",
      type: "Residential",
      status: "Completed",
      year: "2021",
      description:
        "High-rise residential tower with stunning marina views and premium finishes.",
      features: [
        "35 Floors",
        "280 Apartments",
        "Infinity Pool",
        "Marina Views",
      ],
      client: "Marina Developments",
    },
    {
      id: 8,
      name: "Healthcare Center",
      location: "Al Barsha",
      type: "Commercial",
      status: "Completed",
      year: "2023",
      description:
        "Modern medical facility with specialized clinics and diagnostic centers.",
      features: [
        "6 Floors",
        "Specialized Clinics",
        "Diagnostic Center",
        "Pharmacy",
      ],
      client: "MedCare Group",
    },
    {
      id: 9,
      name: "Logistics Warehouse",
      location: "Dubai South",
      type: "Industrial",
      status: "Completed",
      year: "2022",
      description:
        "Strategically located warehouse facility near Al Maktoum International Airport.",
      features: [
        "100,000 sqm",
        "Bonded Storage",
        "Cross-Dock Facility",
        "Customs Office",
      ],
      client: "Global Logistics FZE",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "5M+", label: "Sqm Built" },
    { number: "50+", label: "Happy Clients" },
    { number: "100%", label: "On-Time Delivery" },
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
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing our portfolio of exceptional construction projects
              across the UAE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#c9a961]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#1a2744]/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse portfolio of residential, commercial, and
              industrial projects.
            </p>
          </AnimatedSection>

          {/* Filter Buttons */}
          <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#1a2744] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-[#1a2744] to-[#2d3e5f] flex items-center justify-center overflow-hidden">
                  <Building2 className="text-[#c9a961]/30" size={80} />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#c9a961] text-[#1a2744] rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin size={14} className="mr-1" />
                    {project.location}
                    <span className="mx-2">•</span>
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      Client:{" "}
                      <span className="font-medium text-gray-700">
                        {project.client}
                      </span>
                    </span>
                    <button className="text-[#c9a961] hover:text-[#1a2744] transition flex items-center text-sm font-medium">
                      View Details
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="bg-[#1a2744] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life. Our team is
              ready to handle projects of any scale and complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="tel:+97141234567"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Schedule a Call
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;
