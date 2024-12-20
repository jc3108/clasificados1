import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { UserActions } from './UserActions';

export function Header() {
  const { translate } = useTranslation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {translate('welcome')}
          </h1>
          <UserActions />
        </div>
      </div>
    </header>
  );
}