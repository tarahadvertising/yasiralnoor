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
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Top Bar */}
      <div className="bg-white text-gray-900 py-1 px-2 xs:px-4 hidden md:block border-b border-gray-200">
        <div className="container-custom flex justify-between items-center text-xs xs:text-sm">
          <div className="flex items-center space-x-2 xs:space-x-4 md:space-x-6">
            <a
              href="tel:+971582365647"
              className="flex items-center hover:text-[#005baa] transition text-xs xs:text-sm"
            >
              <Phone size={12} className="mr-1 xs:mr-2" />
              <span className="hidden xs:inline">+971 58 236 5647</span>
              <span className="xs:hidden">+971 58...</span>
            </a>
            <a
              href="mailto:info@yasiralnoorbc.com"
              className="flex items-center hover:text-[#005baa] transition text-xs xs:text-sm hidden sm:flex"
            >
              <Mail size={12} className="mr-1 xs:mr-2" />
              <span className="hidden md:inline">info@yasiralnoorbc.com</span>
              <span className="md:hidden xs:hidden">info@...</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 xs:space-x-4">
            <a href="#" className="hover:text-[#00a2e5] transition">
              <Facebook size={14} className="xs:size-16" />
            </a>
            <a href="#" className="hover:text-[#00a2e5] transition">
              <Twitter size={14} className="xs:size-16" />
            </a>
            <a href="#" className="hover:text-[#00a2e5] transition">
              <Linkedin size={14} className="xs:size-16" />
            </a>
            <a href="#" className="hover:text-[#00a2e5] transition">
              <Instagram size={14} className="xs:size-16" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 xs:h-18 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 xs:space-x-2">
              <img
                src="/logo.svg"
                alt="Yasir Alnoor Contracting LLC"
                className="h-6 w-6 xs:h-8 xs:w-8 md:h-8 md:w-8 object-contain"
              />
              <img
                src="/yasiralnoor.svg"
                alt="Yasir Alnoor Contracting LLC"
                className="h-4 w-auto xs:h-5 xs:w-auto md:h-6 md:w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm xl:text-base font-medium transition hover:text-[#005baa] ${
                    isActive(link.path) ? "text-[#005baa]" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-1 xs:p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="xs:size-24" />
              ) : (
                <Menu size={20} className="xs:size-24" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="container-custom py-3 xs:py-4 space-y-2 xs:space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base xs:text-lg font-medium transition hover:text-[#005baa] py-1 ${
                  isActive(link.path) ? "text-[#005baa]" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+971582365647"
                className="flex items-center text-gray-700 hover:text-[#005baa] transition text-sm"
              >
                <Phone size={16} className="mr-2" />
                +971 58 236 5647
              </a>
              <a
                href="mailto:info@yasiralnoorbc.com"
                className="flex items-center text-gray-700 hover:text-[#005baa] transition text-sm"
              >
                <Mail size={16} className="mr-2" />
                info@yasiralnoorbc.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-900 border-t border-gray-200 pt-12 xs:pt-16 md:pt-20">
        <div className="container-custom pb-8 xs:pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-1 xs:space-x-2 mb-3 xs:mb-4">
                <img
                  src="/logo.svg"
                  alt="Yasir Alnoor Contracting LLC"
                  className="h-6 w-6 xs:h-8 xs:w-8 object-contain"
                />
                <img
                  src="/yasiralnoor.svg"
                  alt="Yasir Alnoor Contracting LLC"
                  className="h-4 w-auto xs:h-5 xs:w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 xs:mb-6 text-sm leading-relaxed">
                Building excellence through innovation and quality craftsmanship
                since 2010. Your trusted construction partner in the UAE.
              </p>
              <div className="flex space-x-3 xs:space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#00a2e5] transition"
                >
                  <Facebook size={14} className="xs:size-18" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#00a2e5] transition"
                >
                  <Twitter size={14} className="xs:size-18" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#00a2e5] transition"
                >
                  <Linkedin size={14} className="xs:size-18" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#00a2e5] transition"
                >
                  <Instagram size={14} className="xs:size-18" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-[#005baa] transition flex items-center text-sm"
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
              <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-900">
                Our Services
              </h4>
              <ul className="space-y-2 xs:space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    General Contracting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Commercial Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Renovation & Remodeling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Interior Fit-Out
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-900">
                Contact Info
              </h4>
              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start">
                  <MapPin
                    size={16}
                    className="xs:size-18 mr-2 xs:mr-3 text-[#005baa] flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Office 1201, Al Saqr Tower,
                      <br className="hidden xs:block" />
                      Sheikh Zayed Road, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone
                    size={16}
                    className="xs:size-18 mr-2 xs:mr-3 text-[#005baa] flex-shrink-0"
                  />
                  <a
                    href="tel:+971582365647"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    +971 58 236 5647
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail
                    size={16}
                    className="xs:size-18 mr-2 xs:mr-3 text-[#005baa] flex-shrink-0"
                  />
                  <a
                    href="mailto:info@yasiralnoorbc.com"
                    className="text-gray-600 hover:text-[#005baa] transition text-sm"
                  >
                    info@yasiralnoorbc.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              2024 YASIR ALNOOR Building Contracting L.L.C. All rights © 2024
              YASIR ALNOOR Building Contracting L.L.C. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 hover:text-[#005baa] transition text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#005baa] transition text-sm"
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
