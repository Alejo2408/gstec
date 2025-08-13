import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Candara', sans-serif", fontStyle: 'italic', fontWeight: 'bold' }}
        >
          Sobre Nosotros
        </h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-700 mb-4">
            RA Intertrading es una empresa líder en confección textil con más de 15 años de experiencia en el mercado.
          </p>
          <p className="text-gray-700">
            Nos especializamos en la producción de prendas de alta calidad para las marcas más reconocidas del mundo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;