import React from 'react';

const RAHeader = ({ setCurrentPage }) => {
  return (
    <header className="py-6 px-4 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0WWWXLWQZbqoejUKli0DLRPQwtB6T1AFxfmNu" 
            alt="RA Intertrading Logo" 
            className="h-16 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-black transition-colors">Inicio</button>
          <button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-black transition-colors">Nosotros</button>
          <button onClick={() => setCurrentPage('clients')} className="text-gray-600 hover:text-black transition-colors">Clientes</button>
          <button onClick={() => setCurrentPage('contact')} className="text-gray-600 hover:text-black transition-colors">Contacto</button>
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

export default RAHeader;