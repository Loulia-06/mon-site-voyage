import { useState, useEffect } from 'react';
import { Globe, Menu, Plane, X } from 'lucide-react';

export default function Navbar({ onHomeClick, isDetailView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const navClass = isDetailView || isScrolled 
    ? 'bg-white shadow-md py-2 text-gray-900' 
    : 'bg-transparent py-4 text-white';

  const textClass = isDetailView || isScrolled ? 'text-gray-900' : 'text-white';

  
  const handleLinkClick = () => {
    setIsOpen(false); 
    onHomeClick();    
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
      
        <div 
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer hover:text-blue-500 transition"
          onClick={onHomeClick}
        >
          <Plane size={28} className="text-blue-600" />
          <span>MonVoyage</span>
        </div>

     
        <div className={`hidden md:flex space-x-8 font-medium ${textClass}`}>
         
          <button onClick={onHomeClick} className="hover:text-blue-500 transition cursor-pointer">
            Accueil
          </button>
          
          
          <a 
            href="#destinations" 
            onClick={onHomeClick} 
            className="hover:text-blue-500 transition cursor-pointer"
          >
            Destinations
          </a>
          
         
          <a 
            href="#" 
            className="hover:text-blue-500 transition cursor-pointer"
          >
            Offres
          </a>
          
         
          <a 
            href="#contact" 
            className="hover:text-blue-500 transition cursor-pointer"
          >
            Contact
          </a>
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={textClass}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg border-t top-full left-0">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-800 font-medium">
            <button onClick={handleLinkClick} className="text-left hover:text-blue-600">
              Accueil
            </button>
            <a href="#destinations" onClick={handleLinkClick} className="hover:text-orange-600">
              Destinations
            </a>
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Offres
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}