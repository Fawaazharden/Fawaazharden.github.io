
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase, Users, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <div className="text-2xl font-playfair font-bold text-primary">
            TalentForce
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#services" className="hover:text-primary transition-colors flex items-center gap-1">
            <Users size={18} />
            <span>Services</span>
          </a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <Button asChild className="flex items-center gap-2 bg-primary hover:bg-primary/90">
            <a href="#contact">
              <Phone size={18} />
              Contact Us
            </a>
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
              <a href="#services" className="hover:text-primary transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Users size={18} />
                <span>Services</span>
              </a>
              <a href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <Button asChild className="flex items-center gap-2 w-full justify-center bg-primary hover:bg-primary/90">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <Phone size={18} />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
