import React, { useState } from 'react';
import { SearchInput } from './SearchInput';
import { CategorySelect } from './CategorySelect';
import { LocationInput } from './LocationInput';

export function SearchBar() {
  const [category, setCategory] = useState('all');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
        <SearchInput />
        <CategorySelect value={category} onChange={setCategory} />
        <LocationInput />
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Buscar
        </button>
      </div>
    </div>
  );
}