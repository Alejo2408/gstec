import React from 'react';

const TextilHeader = () => {
  return (
    <header className="py-6 px-4 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">TextilElegante</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Inicio</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Colecciones</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Sobre Nosotros</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Contacto</a>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default TextilHeader;