import React, { useState } from 'react';
import clientModels from '../mock/clientModels';

const ClientModelsSection = () => {
  const [activeBrand, setActiveBrand] = useState('Adidas');

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" 
            style={{ fontFamily: "'Candara', sans-serif", fontStyle: 'italic', fontWeight: 'bold' }}>
          Modelos Realizados
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {Object.keys(clientModels).map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-6 py-3 text-sm font-medium ${activeBrand === brand 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'} 
                  border border-gray-200`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientModels[activeBrand].map((model) => (
            <div key={model.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{model.name}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{model.season}</span>
                </div>
                <p className="text-gray-600">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientModelsSection;