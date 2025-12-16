import { useEffect } from 'react';
import { ArrowLeft, MapPin, Star, Clock, Users, Utensils, Camera, CheckCircle } from 'lucide-react';

export default function DestinationDetails({ destination, onBack }) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
     
      <div className="container mx-auto px-6 py-4">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-blue-600 transition font-medium cursor-pointer"
        >
          <ArrowLeft size={20} className="mr-2" /> Retour aux destinations
        </button>
      </div>

      
      <div className="relative h-[60vh] w-full">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
               <div className="flex gap-2 mb-2">
                {destination.tags.map(tag => (
                  <span key={tag} className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{destination.title}</h1>
              <div className="flex items-center gap-4 text-gray-200">
                <span className="flex items-center gap-1"><MapPin size={18} /> {destination.title}</span>
                <span className="flex items-center gap-1"><Star size={18} className="text-yellow-400 fill-current" /> {destination.rating} (124 avis)</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg opacity-90">Prix par personne</p>
              <p className="text-4xl md:text-5xl font-bold">{destination.price}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        
        <div className="lg:col-span-2 space-y-12">
          
        
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de ce voyage</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {destination.description} <br/><br/>
              Profitez d'un séjour clé en main où chaque détail a été pensé pour votre confort. 
              Nos guides locaux experts vous feront découvrir des lieux secrets loin des foules touristiques.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
                <Clock className="text-blue-600 mb-2" size={24} />
                <span className="font-bold text-gray-900">{destination.duration}</span>
                <span className="text-xs text-gray-500">Durée</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
                <Users className="text-blue-600 mb-2" size={24} />
                <span className="font-bold text-gray-900">Max 12</span>
                <span className="text-xs text-gray-500">Groupe</span>
              </div>
               <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
                <Utensils className="text-blue-600 mb-2" size={24} />
                <span className="font-bold text-gray-900">Inclus</span>
                <span className="text-xs text-gray-500">Repas</span>
              </div>
               <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg text-center">
                <Camera className="text-blue-600 mb-2" size={24} />
                <span className="font-bold text-gray-900">Visites</span>
                <span className="text-xs text-gray-500">Guidées</span>
              </div>
            </div>
          </section>

          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre Itinéraire</h2>
            <div className="space-y-6">
              {destination.itinerary && destination.itinerary.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {item.day}
                    </div>
                    {index !== destination.itinerary.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Réserver ce voyage</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date de départ</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white text-gray-700">
                  <option>15 Juillet 2025</option>
                  <option>22 Aout 2025</option>
                  <option>10 Septembre 2025</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Voyageurs</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white text-gray-700">
                  <option>1 Adulte</option>
                  <option>2 Adultes</option>
                  <option>2 Adultes, 1 Enfant</option>
                </select>
              </div>

              <div className="border-t border-gray-200 my-4 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Prix de base</span>
                  <span>{destination.price}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes et frais</span>
                  <span>150 €</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                  <span>Total</span>
                  <span>Calculé à la fin</span>
                </div>
              </div>

              <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg transform active:scale-95 cursor-pointer">
                Procéder au paiement
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                <CheckCircle size={14} className="text-green-500" /> Annulation gratuite jusqu'à 7 jours avant
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}