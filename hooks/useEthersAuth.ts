"use client";

import { useState, useCallback, useEffect } from 'react';
import { BrowserProvider } from 'ethers';
import { getAuthSession, clearAuthSession } from '@/lib/auth';

export interface EthersAuthResult {
  signature: string;
  address: string;
  message: string;
}

export const useEthersAuth = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    const session = getAuthSession();
    if (session?.address) {
      setAddress(session.address);
      setIsConnected(true);
    }
  }, []);

  const connectWallet = useCallback(async (): Promise<string | null> => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask!');
      return null;
    }

    setIsConnecting(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      const userAddress = accounts[0];
      
      setAddress(userAddress);
      setIsConnected(true);
      
      // Save address to localStorage immediately
      localStorage.setItem('meritium_address', userAddress);
      
      return userAddress;
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      return null;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const signMessage = useCallback(async (): Promise<EthersAuthResult | null> => {
    if (!isConnected || !address) {
      console.error('Wallet not connected');
      return null;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      const message = `Welcome to Meritium!\n\nSign this message to authenticate with CorpNova's platform.\n\nTimestamp: ${Date.now()}`;
      const signature = await signer.signMessage(message);

      return {
        signature,
        address,
        message,
      };
    } catch (error) {
      console.error('Failed to sign message:', error);
      return null;
    }
  }, [isConnected, address]);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    setAddress('');
    clearAuthSession();
    localStorage.removeItem('meritium_address');
  }, []);

  return {
    connectWallet,
    signMessage,
    disconnect,
    isConnecting,
    isConnected,
    address,
  };
};