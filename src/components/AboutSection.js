import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 
          className="text-3xl text-center mb-8"
          style={{ fontFamily: "'Candara', sans-serif", fontStyle: 'italic', fontWeight: 'bold' }}
        >
          Sobre RA Intertrading
        </h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-gray-700 mb-4">
            RA Intertrading es una empresa líder en confección textil con más de 15 años de experiencia en el mercado.
            Nos especializamos en la producción de prendas de alta calidad para las marcas más exigentes del mundo.
          </p>
          <p className="text-gray-700 mb-4">
            Nuestro compromiso con la excelencia, los plazos de entrega y la innovación textil nos ha posicionado como
            proveedores confiables para las principales empresas del sector.
          </p>
          <p className="text-gray-700">
            Contamos con tecnología de punta y un equipo altamente calificado que garantiza los más altos estándares
            de calidad en cada prenda que producimos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;