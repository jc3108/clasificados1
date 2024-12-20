import { useState, useCallback } from 'react';
import { AuthState, LoginCredentials, RegisterCredentials, BiometricType } from '../types';
import { checkBiometricSupport } from '../utils/biometric';

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
  });

  const [biometricSupport, setBiometricSupport] = useState<BiometricType>(null);

  const checkBiometricAvailability = useCallback(async () => {
    const support = await checkBiometricSupport();
    setBiometricSupport(support);
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement actual login logic with Supabase
      setState(prev => ({ ...prev, isLoading: false }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error al iniciar sesión',
      }));
    }
  }, []);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement actual registration logic with Supabase
      setState(prev => ({ ...prev, isLoading: false }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error al registrarse',
      }));
    }
  }, []);

  const logout = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement actual logout logic with Supabase
      setState({ user: null, isLoading: false, error: null });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error al cerrar sesión',
      }));
    }
  }, []);

  return {
    ...state,
    login,
    register,
    logout,
    biometricSupport,
    checkBiometricAvailability,
  };
}