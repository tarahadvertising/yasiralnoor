import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  Award,
  Shield,
  Heart,
  Users,
  CheckCircle,
} from "lucide-react";
import SEO from "../components/SEO";

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

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: "Quality",
      desc: "Uncompromising commitment to excellence in every project we undertake.",
    },
    {
      icon: Shield,
      title: "Safety",
      desc: "Prioritizing the safety of our workers, clients, and communities.",
    },
    {
      icon: Heart,
      title: "Integrity",
      desc: "Operating with transparency, honesty, and ethical business practices.",
    },
    {
      icon: Target,
      title: "Commitment",
      desc: "Dedicated to delivering on our promises and exceeding expectations.",
    },
  ];

  return (
    <div>
      <SEO
        title="About Us - Leading Construction Company in Dubai UAE"
        description="Learn about Yasir Alnoor Contracting LLC - Dubai's trusted construction partner since 2010. 13+ years of excellence in residential, commercial, and industrial construction projects."
        keywords="about Yasir Alnoor, construction company Dubai, UAE contractor, company history, construction expertise, Dubai construction projects, licensed contractor"
        canonicalUrl="https://www.yasiralnoorbc.com/about"
        ogImage="/about-og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Yasir Alnoor Contracting LLC",
          description:
            "Learn about Yasir Alnoor Contracting LLC - Dubai's trusted construction partner since 2010. 13+ years of excellence in construction.",
          url: "https://www.yasiralnoorbc.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "Yasir Alnoor Contracting LLC",
            foundingDate: "2010",
            description:
              "Leading construction company in Dubai, UAE with 13+ years of excellence",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Office 1201, Al Saqr Tower, Sheikh Zayed Road",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971582365647",
              contactType: "customer service",
            },
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Yasir Al Noor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading construction excellence in the UAE with
              <span className="text-white font-semibold">
                {" "}
                over 13 years of experience
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-[#ffffff] font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005baa] mt-4 mb-6">
                Your Trusted Construction Partner in the UAE
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Yasir Alnoor Contracting LLC has been at the forefront of the
                  construction industry in the United Arab Emirates since 2010.
                  What started as a small contracting firm has grown into one of
                  the region's most respected construction companies, known for
                  delivering exceptional quality and innovative solutions.
                </p>
                <p>
                  Our journey has been marked by a relentless pursuit of
                  excellence, a commitment to adopting cutting-edge
                  technologies, and a deep understanding of our clients' needs.
                  We have successfully completed over 100 projects ranging from
                  luxurious residential villas to complex commercial
                  developments and industrial facilities.
                </p>
                <p>
                  Today, we stand as a symbol of trust, quality, and reliability
                  in the UAE construction market. Our team of over 50 skilled
                  professionals, including engineers, architects, and project
                  managers, work tirelessly to bring our clients' visions to
                  life.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/about1.webp"
                    alt="Construction Project 1"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/about2.webp"
                    alt="Construction Project 2"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/about3.webp"
                    alt="Construction Project 3"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/about4.webp"
                    alt="Construction Project 4"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="w-16 h-16 bg-[#005baa] rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-[#ffffff]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#005baa] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and innovative construction company in
                  the UAE, setting new standards of excellence in the industry.
                  We envision a future where every structure we build
                  contributes positively to communities and stands as a
                  testament to quality craftsmanship and sustainable practices.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="w-16 h-16 bg-[#005baa] rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-[#ffffff]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#005baa] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional construction services that exceed
                  client expectations through innovation, quality, and
                  integrity. We are committed to building lasting relationships
                  with our clients, partners, and communities while maintaining
                  the highest standards of safety and environmental
                  responsibility.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#005baa] text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ffffff] font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Core Values That Guide Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our values form the foundation of everything we do, shaping our
              culture and defining our approach to business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition duration-300 h-full">
                  <div className="w-14 h-14 bg-[#ffffff] rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="text-[#005baa]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 bg-[#005baa] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#ffffff]" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#005baa] mb-4">
                    Message from Leadership
                  </h3>
                  <blockquote className="text-gray-600 italic leading-relaxed mb-6">
                    "At Yasir Alnoor Contracting LLC, we believe that every
                    building we construct is more than just concrete and steel –
                    it's a promise to our clients, a contribution to our
                    communities, and a legacy for future generations. Our
                    commitment to excellence, innovation, and integrity has been
                    the driving force behind our success, and it will continue
                    to guide us as we build the future of the UAE."
                  </blockquote>
                  <div>
                    <div className="font-bold text-[#005baa]">Yasir Alnoor</div>
                    <div className="text-[#ffffff]">Founder & CEO</div>
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

export default About;
