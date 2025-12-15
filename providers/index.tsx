"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config";

const queryClient = new QueryClient({});

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    // <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <RainbowKitProvider> */}
          {children}
          {/* </RainbowKitProvider> */}
      </QueryClientProvider>
    // </WagmiProvider>
  );
};

export default Providers;
