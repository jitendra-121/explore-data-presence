
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  const handleResumeClick = () => {
    // The URL should point to where your resume is stored
    // For now, we'll use a placeholder URL
    const resumeUrl = "/resume.pdf";
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Jitendra_Aluri_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <Code className="h-6 w-6 text-primary" />
          <span>DataPortfolio</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
          <a href="#publications" className="text-sm hover:text-primary transition-colors">Publications</a>
          <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          <Link to="/resume" className="text-sm hover:text-primary transition-colors flex items-center">
            <FileText className="h-4 w-4 mr-1" /> CV
          </Link>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={handleResumeClick}
          >
            <Download className="h-4 w-4 mr-1" /> Resume
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
          <div className="flex flex-col items-center gap-6 p-4">
            <a href="#home" className="text-lg hover:text-primary" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-lg hover:text-primary" onClick={toggleMenu}>About</a>
            <a href="#projects" className="text-lg hover:text-primary" onClick={toggleMenu}>Projects</a>
            <a href="#publications" className="text-lg hover:text-primary" onClick={toggleMenu}>Publications</a>
            <a href="#skills" className="text-lg hover:text-primary" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="text-lg hover:text-primary" onClick={toggleMenu}>Contact</a>
            <Link to="/resume" className="text-lg hover:text-primary flex items-center" onClick={toggleMenu}>
              <FileText className="h-4 w-4 mr-1" /> CV
            </Link>
            <Button 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full"
              onClick={handleResumeClick}
            >
              <Download className="h-4 w-4 mr-1" /> Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
