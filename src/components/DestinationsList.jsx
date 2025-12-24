import DestinationCard from './DestinationCard';


import voyageImage from './image/voyage-sur-mesure.jpg';


const destinations = [
  {
    id: 1,
    title: "Santorin, Grèce",
    price: "850 €",
    rating: 4.9,
    image: voyageImage, 
    duration: "7 Jours",
    tags: ["Romantique", "Plage"],
    description: "Plongez dans la beauté époustouflante de Santorin.",
    itinerary: [
      { day: 1, title: "Arrivée à Fira", desc: "Transfert à l'hôtel." },
      { day: 2, title: "Exploration d'Oia", desc: "Visite guidée." },
      { day: 3, title: "Croisière", desc: "Visite du volcan." }
    ]
  },
  {
    id: 2,
    title: "Kyoto, Japon",
    price: "1 200 €",
    rating: 5.0,
    image: voyageImage,
    duration: "10 Jours",
    tags: ["Culture", "Nature"],
    description: "Découvrez l'âme du Japon traditionnel à Kyoto.",
    itinerary: [
      { day: 1, title: "Arrivée à Kyoto", desc: "Installation." },
      { day: 2, title: "Arashiyama", desc: "Forêt de Bambous." },
      { day: 3, title: "Kinkaku-ji", desc: "Le Pavillon d'Or." }
    ]
  },
  {
    id: 3,
    title: "Bali, Indonésie",
    price: "950 €",
    rating: 4.8,
    image: voyageImage,
    duration: "12 Jours",
    tags: ["Aventure", "Tropical"],
    description: "L'île des Dieux vous attend.",
    itinerary: [
      { day: 1, title: "Ubud", desc: "Détente dans la jungle." },
      { day: 2, title: "Forêt des Singes", desc: "Rencontre avec les macaques." },
      { day: 3, title: "Temple d'Uluwatu", desc: "Danse Kecak." }
    ]
  },
  {
    id: 4,
    title: "New York, USA",
    price: "1 350 €",
    rating: 4.8,
    image: voyageImage, 
    duration: "6 Jours",
    tags: ["Urbain", "Shopping"],
    description: "La ville qui ne dort jamais.",
    itinerary: [
      { day: 1, title: "Times Square", desc: "Arrivée." },
      { day: 2, title: "Liberté", desc: "Statue de la Liberté." },
      { day: 3, title: "Central Park", desc: "Pique-nique." }
    ]
  },
  {
    id: 5,
    title: "Machu Picchu, Pérou",
    price: "1 600 €",
    rating: 4.9,
    image: voyageImage, 
    duration: "9 Jours",
    tags: ["Histoire", "Montagne"],
    description: "Partez sur les traces des Incas. Une aventure inoubliable au cœur des Andes.",
    itinerary: [
      { day: 1, title: "Cusco", desc: "Arrivée et acclimatation." },
      { day: 2, title: "Vallée Sacrée", desc: "Visite des ruines et marchés." },
      { day: 3, title: "Machu Picchu", desc: "Le moment magique au lever du soleil." }
    ]
  },
  {
    id: 6,
    title: "Le Cap, Afrique du Sud",
    price: "1 150 €",
    rating: 4.7,
    image: voyageImage, 
    duration: "8 Jours",
    tags: ["Nature", "Safari"],
    description: "Entre océan et montagne. Découvrez la Table Mountain et les pingouins de Boulders Beach.",
    itinerary: [
      { day: 1, title: "Le Cap", desc: "Visite du centre et Table Mountain." },
      { day: 2, title: "Cap de Bonne Espérance", desc: "Route panoramique." },
      { day: 3, title: "Vignobles", desc: "Dégustation à Stellenbosch." }
    ]
  }
];

export default function DestinationsList({ onSelectDestination }) {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Destinations Populaires</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous avons sélectionné pour vous les plus beaux endroits du monde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(dest => (
            <DestinationCard 
              key={dest.id} 
              dest={dest} 
              onSelect={onSelectDestination} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}