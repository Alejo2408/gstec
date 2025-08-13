import React, { useState } from 'react';

const SeasonSelector = ({ currentSeason, onSeasonChange }) => {
  const seasons = [
    { id: 'summer', name: 'Verano' },
    { id: 'winter', name: 'Invierno' }
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {seasons.map((season) => (
          <button
            key={season.id}
            onClick={() => onSeasonChange(season.id)}
            className={`px-4 py-2 text-sm font-medium ${currentSeason === season.id 
              ? 'bg-black text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-50'} 
              ${season.id === 'summer' ? 'rounded-l-lg' : 'rounded-r-lg'} border border-gray-200`}
          >
            {season.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeasonSelector;