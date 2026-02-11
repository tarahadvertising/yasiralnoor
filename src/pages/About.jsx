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

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      desc: "Yasir Alnoor Contracting LLC was established in Dubai.",
    },
    {
      year: "2013",
      title: "First Major Project",
      desc: "Completed our first high-rise residential building.",
    },
    {
      year: "2016",
      title: "Expansion",
      desc: "Expanded operations to include commercial construction.",
    },
    {
      year: "2019",
      title: "ISO Certification",
      desc: "Achieved ISO 9001:2015 quality management certification.",
    },
    {
      year: "2022",
      title: "100th Project",
      desc: "Celebrated completion of our 100th construction project.",
    },
    {
      year: "2024",
      title: "Industry Leader",
      desc: "Recognized as one of the top construction companies in UAE.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Building excellence through innovation and quality craftsmanship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-6">
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
              <div className="bg-gradient-to-br from-[#1a2744] to-[#2d3e5f] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-lg">
                    <Building2
                      className="mx-auto mb-3 text-[#c9a961]"
                      size={40}
                    />
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-lg">
                    <Users className="mx-auto mb-3 text-[#c9a961]" size={40} />
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-gray-300">Expert Team</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-lg">
                    <Award className="mx-auto mb-3 text-[#c9a961]" size={40} />
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-gray-300">Industry Awards</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-lg">
                    <CheckCircle
                      className="mx-auto mb-3 text-[#c9a961]"
                      size={40}
                    />
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
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
                <div className="w-16 h-16 bg-[#1a2744] rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-[#c9a961]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">
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
                <div className="w-16 h-16 bg-[#1a2744] rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-[#c9a961]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-4">
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
      <section className="section-padding bg-[#1a2744] text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
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
                  <div className="w-14 h-14 bg-[#c9a961] rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="text-[#1a2744]" size={28} />
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

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#c9a961] font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-4 mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A decade of growth, innovation, and excellence in the construction
              industry.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index}>
                <div className="flex flex-col md:flex-row gap-6 mb-8 last:mb-0">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-2xl font-bold text-[#c9a961]">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-8 md:pl-0 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#c9a961] rounded-full" />
                    <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
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
                <div className="w-24 h-24 bg-[#1a2744] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#c9a961]" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a2744] mb-4">
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
                    <div className="font-bold text-[#1a2744]">Yasir Alnoor</div>
                    <div className="text-[#c9a961]">Founder & CEO</div>
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
