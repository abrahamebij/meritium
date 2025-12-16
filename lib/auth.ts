/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export interface AuthSession {
  address: string;
  signature: string;
  message: string;
  timestamp: number;
}

export const getAuthSession = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  const session = localStorage.getItem('meritium_address');
  if (!session) return null;
  
  try {
    return session;
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const session = getAuthSession();
  return !!session;
};

export const clearAuthSession = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('meritium_address');
  }
};

export const requireAuth = (router: any): boolean => {
  if (!isAuthenticated()) {
    router.push('/');
    return false;
  }
  return true;
};