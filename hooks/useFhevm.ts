import { useEffect, useState } from 'react';
import { createInstance, FhevmInstance, initSDK, SepoliaConfig } from '@zama-fhe/relayer-sdk/bundle';


export const useFhevm = () => {
  const [instance, setInstance] = useState<FhevmInstance | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    const setup = async () => {
      try {
        await initSDK(); // Load WASM
        const config = { ...SepoliaConfig, network: window.ethereum };
        // Connect to Zama Gateway (Devnet/Sepolia)
        const newInstance = await createInstance(SepoliaConfig);
        setInstance(newInstance);



        setIsInitialized(true);
      } catch (e) {
        console.error("Failed to init FHEVM instance:", e);
      }
    };

    setup();
  }, [isInitialized]);

  return instance;
};