import React from 'react';

const RAFooter = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RA Intertrading</h3>
            <p className="text-gray-600">Especialistas en confección textil de alta calidad para marcas globales.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-600">info@raintertrading.com</p>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black">Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} RA Intertrading. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default RAFooter;

// DONE