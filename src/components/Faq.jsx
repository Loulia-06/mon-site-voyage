import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
 
  const questions = [
    {
      question: "Quels documents dois-je fournir pour voyager ?",
      answer: "Pour la plupart des destinations hors UE, un passeport valide 6 mois après la date de retour est obligatoire. Certains pays nécessitent également un visa. Nous vous enverrons la liste précise après réservation."
    },
    {
      question: "L'annulation est-elle gratuite ?",
      answer: "Oui ! Vous pouvez annuler sans frais jusqu'à 14 jours avant le départ. En dessous de ce délai, une retenue de 30% sera appliquée. En cas de force majeure, nous remboursons intégralement."
    },
    {
      question: "Le vol est-il inclus dans le prix ?",
      answer: "Nos tarifs affichés incluent l'hébergement, les activités guidées et les transferts sur place. Les vols internationaux ne sont pas inclus pour vous laisser le choix de votre compagnie aérienne préférée."
    },
    {
      question: "Puis-je payer en plusieurs fois ?",
      answer: "Absolument. Vous pouvez régler un acompte de 30% à la réservation et le solde 30 jours avant le départ. Nous acceptons les cartes bancaires et les chèques vacances."
    }
  ];

  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <HelpCircle className="text-blue-600" /> Questions Fréquentes
          </h2>
          <p className="text-gray-500 mt-2">Tout ce que vous devez savoir avant de partir.</p>
        </div>

       
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              
              
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
              >
                <span className="font-semibold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-5 bg-white text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}