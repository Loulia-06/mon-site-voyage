import { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSent(true);  
    
   
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="contact-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-xl">
        
       
        <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Formulaire de contact :
        </h2>

       
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          
          {isSent ? (
       
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Message envoyé !</h3>
              <p className="text-gray-500 mt-2">Nous vous répondrons sous 24h.</p>
            </div>
          ) : (
          
            <form onSubmit={handleSubmit} className="space-y-6">
              
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Mail size={16} /> Email
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="votre@email.com" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50"
                />
              </div>

             
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare size={16} /> Message
                </label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Bonjour, je souhaiterais avoir des informations sur..." 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 resize-none"
                ></textarea>
              </div>

            
              <button 
                type="submit" 
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-md uppercase tracking-wide"
              >
                <span>Envoyer</span>
                <Send size={18} />
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}