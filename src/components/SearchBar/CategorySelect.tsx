import React from 'react';

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function CategorySelect({ value, onChange }: CategorySelectProps) {
  return (
    <div className="md:w-48">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="all">Todas las categorías</option>
        <option value="real-estate">Bienes Raíces</option>
        <option value="vehicles">Vehículos</option>
        <option value="technology">Tecnología</option>
      </select>
    </div>
  );
}