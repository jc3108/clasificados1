import React from 'react';
import { SearchBar } from '../SearchBar';
import { FeaturedCarousel } from '../FeaturedCarousel';

export function Hero() {
  return (
    <div className="relative">
      <FeaturedCarousel />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Encuentra lo que buscas
            </h1>
            <p className="mt-3 text-base text-gray-100 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
              Miles de anuncios clasificados en un solo lugar
            </p>
            <div className="mt-8">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}