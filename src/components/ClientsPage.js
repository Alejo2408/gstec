import React from 'react';
import ClientsSection from './ClientsSection';

const ClientsPage = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Candara', sans-serif", fontStyle: 'italic', fontWeight: 'bold' }}
        >
          Nuestros Clientes
        </h2>
        <ClientsSection />
      </div>
    </section>
  );
};

export default ClientsPage;