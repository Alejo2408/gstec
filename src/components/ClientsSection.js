import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: 'Adidas', logo: '/adidas-logo.png' },
    { name: 'Nike', logo: '/nike-logo.png' },
    { name: 'Puma', logo: '/puma-logo.png' },
    { name: 'Under Armour', logo: '/ua-logo.png' },
    { name: 'Reebok', logo: '/reebok-logo.png' }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 
          className="text-3xl text-center mb-8"
          style={{ fontFamily: "'Candara', sans-serif", fontStyle: 'italic', fontWeight: 'bold' }}
        >
          Nuestros Clientes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-20 flex items-center">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

// DONE