/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export interface AuthSession {
  address: string;
  signature: string;
  message: string;
  timestamp: number;
}

export const getAuthSession = (): AuthSession | null => {
  if (typeof window === 'undefined') return null;
  
  const session = localStorage.getItem('meritium_user');
  if (!session) return null;
  
  try {
    return JSON.parse(session);
  } catch {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const session = getAuthSession();
  return !!session?.address;
};

export const clearAuthSession = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('meritium_user');
  }
};

export const requireAuth = (router: any): boolean => {
  if (!isAuthenticated()) {
    router.push('/');
    return false;
  }
  return true;
};