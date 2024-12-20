import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useTranslation } from '../../hooks/useTranslation';

export function SearchInput() {
  const { translate } = useTranslation();

  return (
    <div className="relative flex-1">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder={translate('placeholder', 'search')}
        className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}