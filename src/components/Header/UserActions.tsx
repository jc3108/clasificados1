import React from 'react';
import { FiUser, FiPlusCircle } from 'react-icons/fi';
import { useTranslation } from '../../hooks/useTranslation';

export function UserActions() {
  const { translate } = useTranslation();

  return (
    <div className="flex items-center space-x-6">
      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
        <FiUser className="h-5 w-5" />
        <span>{translate('login', 'auth')}</span>
      </button>
      <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        <FiPlusCircle className="h-5 w-5" />
        <span>Publicar Anuncio</span>
      </button>
    </div>
  );
}