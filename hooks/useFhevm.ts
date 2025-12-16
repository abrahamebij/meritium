import { useEffect, useState } from 'react';
import {
  initSDK,
  createInstance,
  SepoliaConfig,
  FhevmInstance
} from '@zama-fhe/relayer-sdk/bundle';


export const useFhevm = () => {
  const [instance, setInstance] = useState<FhevmInstance | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;

    const setup = async () => {
      try {
        await initSDK(); // Load needed WASM
        // const newInstance = await createInstance(SepoliaConfig);
        const config = await createInstance({ ...SepoliaConfig, network: window.ethereum });

        setInstance(config);
        setIsInitialized(true);
      } catch (e) {
        console.error("Failed to init FHEVM instance:", e);
      }
    };

    setup();
  }, [isInitialized]);

  return { instance };
};