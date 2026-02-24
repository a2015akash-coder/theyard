import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-700 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
              Y
            </div>

            <span
              className={`text-base lg:text-lg font-semibold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              The Yard
            </span>
          </a>

          {/* CTA */}
          <a
            href="tel:0450410800"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white px-4 lg:px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">0450 410 800</span>
            <span className="sm:hidden">Call</span>
          </a>

        </div>
      </div>
    </header>
  );
}