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
      image: "/alnoortower.webp",
      description:
        "45-story mixed-use tower with premium office spaces and retail outlets.",
      features: ["45 Floors", "150,000 sqm", "LEED Gold Certified"],
      client: "Al Noor Holdings",
    },
    {
      id: 2,
      name: "Yasir Residences",
      location: "Dubai Marina",
      type: "Residential",
      status: "Completed",
      year: "2022",
      image: "/yasirresidence.webp",
      description:
        "Luxury residential complex with 120 apartments and world-class amenities.",
      features: ["120 Apartments", "Swimming Pool", "Gym & Spa"],
      client: "Private Developer",
    },
    {
      id: 3,
      name: "Industrial Park Complex",
      location: "Jebel Ali",
      type: "Industrial",
      status: "Completed",
      year: "2021",
      image: "/IndustrialParkComplex.webp",
      description:
        "State-of-the-art logistics and warehousing facility for regional operations.",
      features: ["50,000 sqm", "Cold Storage", "Loading Docks"],
      client: "Emirates Logistics",
    },
    {
      id: 4,
      name: "Palm View Villas",
      location: "Palm Jumeirah",
      type: "Residential",
      status: "Completed",
      year: "2023",
      image: "/PalmViewVillas.webp",
      description:
        "Exclusive waterfront villas with private beach access and panoramic views.",
      features: ["15 Luxury Villas", "Private Beach", "Smart Home Systems"],
      client: "Palm Developers",
    },
    {
      id: 5,
      name: "Business Bay Plaza",
      location: "Business Bay",
      type: "Commercial",
      status: "Completed",
      year: "2022",
      image: "/BusinessBayPlaza.webp",
      description:
        "Modern commercial plaza with flexible office spaces and conference facilities.",
      features: ["25 Floors", "Flexible Offices", "Conference Center"],
      client: "Bay Properties",
    },
    {
      id: 6,
      name: "Manufacturing Hub",
      location: "Dubai Industrial City",
      type: "Industrial",
      status: "Ongoing",
      year: "2024",
      image: "/ManufacturingHub.webp",
      description:
        "Advanced manufacturing facility with sustainable design and automation systems.",
      features: ["75,000 sqm", "Solar Power", "Automation Ready"],
      client: "Tech Manufacturing LLC",
    },
    {
      id: 7,
      name: "Marina Heights",
      location: "Dubai Marina",
      type: "Residential",
      status: "Completed",
      year: "2021",
      image: "/MarinaHeights.webp",
      description:
        "High-rise residential tower with stunning marina views and premium finishes.",
      features: ["35 Floors", "280 Apartments", "Infinity Pool"],
      client: "Marina Developments",
    },
    {
      id: 8,
      name: "Healthcare Center",
      location: "Al Barsha",
      type: "Commercial",
      status: "Completed",
      year: "2023",
      image: "/HealthcareCenter.webp",
      description:
        "Modern medical facility with specialized clinics and diagnostic centers.",
      features: ["6 Floors", "Specialized Clinics", "Diagnostic Center"],
      client: "MedCare Group",
    },
    {
      id: 9,
      name: "Logistics Warehouse",
      location: "Dubai South",
      type: "Industrial",
      status: "Completed",
      year: "2022",
      image: "/LogisticsWarehouse.webp",
      description:
        "Strategically located warehouse facility near Al Maktoum International Airport.",
      features: ["100,000 sqm", "Bonded Storage", "24/7 Security"],
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
    { number: "99%", label: "On-Time Delivery" },
  ];

  return (
    <div>
      <SEO
        title="Our Projects - Construction Portfolio Dubai UAE"
        description="Explore our portfolio of completed construction projects in Dubai UAE. Residential, commercial, and industrial projects showcasing our expertise and quality craftsmanship since 2010."
        keywords="construction projects Dubai, UAE projects, construction portfolio, residential projects, commercial projects, industrial projects, Al Noor Tower, Yasir Residences"
        canonicalUrl="https://www.yasiralnoorbc.com/projects"
        ogImage="/projects-og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Construction Projects Portfolio",
          description:
            "Explore our portfolio of completed construction projects in Dubai UAE showcasing our expertise and quality craftsmanship.",
          url: "https://www.yasiralnoorbc.com/projects",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "CreativeWork",
                  name: "Al Noor Tower",
                  description:
                    "45-story mixed-use tower with premium office spaces and retail outlets in Downtown Dubai",
                  image: "https://www.yasiralnoorbc.com/alnoortower.webp",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "CreativeWork",
                  name: "Yasir Residences",
                  description:
                    "Luxury residential complex with 120 apartments and world-class amenities in Dubai Marina",
                  image: "https://www.yasiralnoorbc.com/yasirresidence.webp",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "CreativeWork",
                  name: "Industrial Park Complex",
                  description:
                    "State-of-the-art logistics and warehousing facility for regional operations in Jebel Ali",
                  image:
                    "https://www.yasiralnoorbc.com/IndustrialParkComplex.webp",
                },
              },
            ],
          },
          provider: {
            "@type": "Organization",
            name: "Yasir Alnoor Contracting LLC",
            url: "https://www.yasiralnoorbc.com",
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
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Showcasing our portfolio of exceptional construction projects
              <span className="text-white font-semibold"> across the UAE</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-[#005baa]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#00a2e5]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#005baa]/20">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
              Featured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#005baa] to-[#00a2e5]">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of residential, commercial, and
              industrial projects that showcase our expertise and commitment to
              excellence.
            </p>
          </AnimatedSection>

          {/* Filter Buttons */}
          <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#005baa] to-[#00a2e5] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#005baa] to-[#00a2e5] opacity-20 blur-md"></div>
                )}
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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Status and Type Badges */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm ${
                        project.status === "Completed"
                          ? "bg-green-500/90 text-white border border-green-400/50"
                          : "bg-blue-500/90 text-white border border-blue-400/50"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#005baa] rounded-full text-xs font-bold border border-white/50">
                      {project.type}
                    </span>
                  </div>

                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-[#005baa] px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition duration-300 shadow-lg">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#005baa] transition-colors duration-300">
                    {project.name}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin size={16} className="mr-2 text-[#005baa]" />
                    <span className="font-medium">{project.location}</span>
                    <span className="mx-3 text-gray-300">•</span>
                    <Calendar size={16} className="mr-2 text-[#005baa]" />
                    <span className="font-medium">{project.year}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] text-xs font-medium rounded-full border border-[#005baa]/20"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-full flex items-center justify-center mr-3">
                        <Building2 size={16} className="text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block">
                          Client
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {project.client}
                        </span>
                      </div>
                    </div>
                    <button className="group/btn flex items-center text-[#005baa] font-semibold hover:text-[#00a2e5] transition-colors duration-300">
                      View Details
                      <ArrowRight
                        size={18}
                        className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 size={40} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No Projects Found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                There are currently no projects in this category. Try selecting
                a different filter or check back later.
              </p>
            </div>
          )}
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
          <AnimatedSection className="relative">
            <div className="bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 size={40} className="text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Have a Project in Mind?
                  </h2>
                  <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Let's discuss how we can bring your vision to life. Our team
                    is ready to handle projects of any scale and complexity with
                    expertise and precision.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/contact"
                    className="group bg-white hover:bg-gray-50 text-[#005baa] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    Start Your Project
                    <ArrowRight
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </a>
                  <a
                    href="tel:+97141234567"
                    className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Schedule a Call
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 text-sm">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>Dubai, UAE</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;
