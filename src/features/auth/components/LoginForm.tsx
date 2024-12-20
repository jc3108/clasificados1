import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { FiMail, FiLock, FiKey } from 'react-icons/fi';

export function LoginForm() {
  const { login, isLoading, error, biometricSupport, checkBiometricAvailability } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkBiometricAvailability();
  }, [checkBiometricAvailability]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <div className="mt-1 relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <div className="mt-1 relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </button>

        {biometricSupport && (
          <button
            type="button"
            className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors"
            title={`Usar ${biometricSupport === 'faceid' ? 'Face ID' : 'huella digital'}`}
          >
            <FiKey className="w-6 h-6" />
          </button>
        )}
      </div>
    </form>
  );
}