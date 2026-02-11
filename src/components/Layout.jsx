import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#1a2744] text-white py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+971544018604"
              className="flex items-center hover:text-[#c9a961] transition"
            >
              <Phone size={14} className="mr-2" />
              +971 544 018604
            </a>
            <a
              href="mailto:sumon98w1@gmail.com"
              className="flex items-center hover:text-[#c9a961] transition"
            >
              <Mail size={14} className="mr-2" />
              sumon98w1@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-[#c9a961] transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-[#c9a961] transition">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-[#c9a961] transition">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hover:text-[#c9a961] transition">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "navbar-scrolled bg-[#1a2744]/95 backdrop-blur-md shadow-lg" : "bg-[#1a2744]"}`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.svg"
                alt="Yasir Alnoor Contracting LLC"
                className="h-8 w-8 object-contain"
              />
              <img
                src="/yasiralnoor.svg"
                alt="Yasir Alnoor Contracting LLC"
                className="h-6 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition hover:text-[#c9a961] ${
                    isActive(link.path) ? "text-[#c9a961]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary text-sm">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#1a2744] overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="container-custom py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition hover:text-[#c9a961] ${
                  isActive(link.path) ? "text-[#c9a961]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary block text-center mt-4"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2744] text-white">
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.svg"
                  alt="Yasir Alnoor Contracting LLC"
                  className="h-8 w-8 object-contain"
                />
                <img
                  src="/yasiralnoor.svg"
                  alt="Yasir Alnoor Contracting LLC"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Building excellence through innovation and quality craftsmanship
                since 2010. Your trusted construction partner in the UAE.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a961] transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a961] transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a961] transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a961] transition"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#c9a961]">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#c9a961] transition flex items-center text-sm"
                    >
                      <ChevronRight size={14} className="mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#c9a961]">
                Our Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    General Contracting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    Renovation & Remodeling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    Interior Fit-Out
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#c9a961]">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin
                    size={18}
                    className="mr-3 mt-1 text-[#c9a961] flex-shrink-0"
                  />
                  <span className="text-gray-300 text-sm">
                    Dubai, United Arab Emirates
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone
                    size={18}
                    className="mr-3 text-[#c9a961] flex-shrink-0"
                  />
                  <a
                    href="tel:+971544018604"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    +971 544 018604
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail
                    size={18}
                    className="mr-3 text-[#c9a961] flex-shrink-0"
                  />
                  <a
                    href="mailto:sumon98w1@gmail.com"
                    className="text-gray-300 hover:text-[#c9a961] transition text-sm"
                  >
                    sumon98w1@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Yasir Alnoor Contracting LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a961] transition text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a961] transition text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
