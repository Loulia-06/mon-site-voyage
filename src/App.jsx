import { useState } from 'react';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsList from './components/DestinationsList';
import DestinationDetails from './components/DestinationDetails';
import ContactForm from './components/ContactForm';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {

  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
     
      <Navbar 
        onHomeClick={() => setSelectedDestination(null)} 
        isDetailView={!!selectedDestination} 
      />
      
      
      <main className="flex-grow">
        {selectedDestination ? (
      
          <DestinationDetails 
            destination={selectedDestination} 
            onBack={() => setSelectedDestination(null)} 
          />
        ) : (
      
          <>
            <Hero />
            <DestinationsList onSelectDestination={setSelectedDestination} />
            <ContactForm />
            <Faq />
          </>
        )}
      </main>
      
      
      <Footer />
    </div>
  );
}