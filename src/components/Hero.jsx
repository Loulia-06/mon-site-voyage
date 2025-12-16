import { Search, Calendar, Users, MapPin } from 'lucide-react';


import heroImage from './image/voyage-sur-mesure.jpg';

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Voyage Hero" 
          className="w-full h-full object-cover"
        />
       
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-fadeIn">
          Découvrez le monde <br /> avec <span className="text-blue-400">MonVoyage</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
          Des destinations inoubliables, des itinéraires sur mesure et des souvenirs pour la vie.
        </p>

       
        <div className="bg-white p-4 rounded-lg shadow-2xl w-full max-w-4xl flex flex-col md:flex-row gap-4 items-center">
          
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md w-full">
            <MapPin className="text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Où voulez-vous aller ?" 
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md w-full">
            <Calendar className="text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Quand ?" 
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>

          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md w-full">
            <Users className="text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Voyageurs" 
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors w-full md:w-auto flex items-center justify-center gap-2">
            <Search size={20} />
            Rechercher
          </button>
        </div>

      </div>
    </div>
  );
}