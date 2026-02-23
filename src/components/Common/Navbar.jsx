import { useState, useEffect, useCallback } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll detection (performance safe)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center text-white font-bold">
              Y
            </div>
            <span className="text-lg font-semibold text-gray-900">
              The Yard
            </span>
          </a>

        

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0450410800"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
            >
              <Phone size={16} />
              0450 410 800
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
            <a onClick={closeMenu} href="#services">
              Services
            </a>
            <a onClick={closeMenu} href="#about">
              About
            </a>
            <a onClick={closeMenu} href="#reviews">
              Reviews
            </a>
            <a onClick={closeMenu} href="#contact">
              Contact
            </a>

            <a
              href="tel:0450410800"
              className="flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-full mt-4 font-semibold"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}