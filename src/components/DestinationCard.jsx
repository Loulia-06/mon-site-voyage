import { Star, Calendar, ArrowRight } from 'lucide-react';

export default function DestinationCard({ dest, onSelect }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group flex flex-col h-full">
      
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={dest.image} 
          alt={dest.title} 
          loading='lazy'
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-bold text-gray-800 flex items-center gap-1">
          <Star size={14} className="text-yellow-500 fill-current" />
          {dest.rating}
        </div>
      </div>
      
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{dest.title}</h3>
          <span className="text-blue-600 font-bold text-lg">{dest.price}</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-1">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{dest.duration}</span>
          </div>
          <div className="flex gap-2">
            {dest.tags.map(tag => (
              <span key={tag} className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button 
          onClick={() => onSelect(dest)}
          className="w-full py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:gap-3 cursor-pointer"
        >
          Voir les détails <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}