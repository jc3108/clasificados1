import React from 'react';
import { FiMapPin } from 'react-icons/fi';

export function LocationInput() {
  return (
    <div className="relative md:w-48">
      <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Ubicación"
        className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}