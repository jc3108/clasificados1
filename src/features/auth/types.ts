export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  biometricEnabled?: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export type BiometricType = 'fingerprint' | 'faceid' | null;