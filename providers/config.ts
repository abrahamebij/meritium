
import {
  mainnet,
  base,
} from 'wagmi/chains';
import { createConfig, http, injected } from 'wagmi';
import { metaMask, safe, walletConnect } from 'wagmi/connectors';


const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})

// export const config = getDefaultConfig({
//   appName: "Meritium",
//   projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
//   chains: [mainnet],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

// export const config = createConfig(
//   getDefaultConfig({
//     // Your dApps chains
//     chains: [mainnet],
//     transports: {
//       // RPC URL for each chain
//       [mainnet.id]: http(
//         `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
//       ),
//     },

//     // Required API Keys
//     walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

//     // Required App Info
//     appName: "Meritium",

//     // Optional App Info
//     appDescription: "Meritium is a privacy-focused promotion voting system that uses encrypted, reputation-weighted ballots to ensure fair, bias-free corporate advancement decisions.",
//     appUrl: "https://meritium.vercel.app/", // your app's url
//     appIcon: "https://meritium.vercel.app/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//   }),
// );