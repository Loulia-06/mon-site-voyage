import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
          
         
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <Globe size={28} className="text-blue-500" />
              <span>VoyageX</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour des voyages inoubliables. 
              Nous rendons le monde accessible à tous.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

         
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Entreprise</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">À propos</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Carrières</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Blog Voyage</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Confidentialité</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contactez-nous</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>123 Avenue des Champs, Paris</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>contact@voyagex.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 VoyageX. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}