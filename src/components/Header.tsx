
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold text-primary">
          StaffingPro
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <a href="#services" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <Button asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
