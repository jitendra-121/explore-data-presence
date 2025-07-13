
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Code className="h-6 w-6 text-primary" />
          <span>Jitendra's DataPortfolio</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => handleNavClick('home')} className="text-sm hover:text-primary transition-colors">Home</button>
          <button onClick={() => handleNavClick('about')} className="text-sm hover:text-primary transition-colors">About</button>
          <button onClick={() => handleNavClick('experience')} className="text-sm hover:text-primary transition-colors">Experience</button>
          <button onClick={() => handleNavClick('skills')} className="text-sm hover:text-primary transition-colors">Skills</button>
          <button onClick={() => handleNavClick('projects')} className="text-sm hover:text-primary transition-colors">Projects</button>
          <button onClick={() => handleNavClick('publications')} className="text-sm hover:text-primary transition-colors">Publications</button>
          <button onClick={() => handleNavClick('certifications')} className="text-sm hover:text-primary transition-colors">Certifications</button>
          <button onClick={() => handleNavClick('interests')} className="text-sm hover:text-primary transition-colors">Interests</button>
          <button onClick={() => handleNavClick('contact')} className="text-sm hover:text-primary transition-colors">Contact</button>
          <Link to="/resume" className="text-sm hover:text-primary transition-colors flex items-center">
            <FileText className="h-4 w-4 mr-1" /> CV
          </Link>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
          <div className="flex flex-col items-center gap-6 p-4">
            <button onClick={() => handleNavClick('home')} className="text-lg hover:text-primary">Home</button>
            <button onClick={() => handleNavClick('about')} className="text-lg hover:text-primary">About</button>
            <button onClick={() => handleNavClick('experience')} className="text-lg hover:text-primary">Experience</button>
            <button onClick={() => handleNavClick('skills')} className="text-lg hover:text-primary">Skills</button>
            <button onClick={() => handleNavClick('projects')} className="text-lg hover:text-primary">Projects</button>
            <button onClick={() => handleNavClick('publications')} className="text-lg hover:text-primary">Publications</button>
            <button onClick={() => handleNavClick('certifications')} className="text-lg hover:text-primary">Certifications</button>
            <button onClick={() => handleNavClick('interests')} className="text-lg hover:text-primary">Interests</button>
            <button onClick={() => handleNavClick('contact')} className="text-lg hover:text-primary">Contact</button>
            <Link to="/resume" className="text-lg hover:text-primary flex items-center" onClick={toggleMenu}>
              <FileText className="h-4 w-4 mr-1" /> CV
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
