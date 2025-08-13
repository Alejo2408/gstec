import React from 'react';
import SeasonSelector from './SeasonSelector';
import CollectionCarousel from './CollectionCarousel';
import collections from '../mock/collections';

const HomePage = () => {
  const [currentSeason, setCurrentSeason] = React.useState('summer');

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" 
            style={{ fontFamily: "'Candara', sans-serif", fontStyle: 'italic', fontWeight: 'bold' }}>
          Nuestras Colecciones
        </h2>
        <SeasonSelector 
          currentSeason={currentSeason} 
          onSeasonChange={setCurrentSeason} 
        />
        <CollectionCarousel items={collections[currentSeason]} />
      </div>
    </div>
  );
};

export default HomePage;