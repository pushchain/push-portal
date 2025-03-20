// environmental configurations for the dapp for different environments
const infuraAPIKey =
  window.location.hostname != "localhost"
    ? process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
    : "be75cf427a5c41f9badb591994019d22";

export const config = {
  /**
   * APP INFO
   */
  APP_NAME: "Push Website",
  NODE_ENV: "dev",
  APP_ENV: "dev",
  /**
   * CHAIN INFO
   */
  ALLOWED_NETWORKS: [
    11155111, // for eth sepolia
    80002, // for amoy polygon
    97, // bnb testnet
    11155420, // optimism sepolia testnet
    2442, // polygon zkevm cardona testnet
    421614, // arbitrum testnet
    123, // fuse testnet
    111557560, // Cyber testnet
  ],

  DEFAULT_CHAIN: 11155111,
  /**
   * Core Network Related Data
   */
  infuraAPIKey: infuraAPIKey,
  coreContractChain: 11155111, //the chain id of the network which the core contract relies on
  coreRPC: `https://sepolia.infura.io/v3/${infuraAPIKey}`,

  firebaseConfig: {
    apiKey: "AIzaSyB4aXx2pJ9T5sw0Q1bba3jI1EAGp0Z5kBI",
    authDomain: "push-dev-a6a63.firebaseapp.com",
    projectId: "push-dev-a6a63",
    storageBucket: "push-dev-a6a63.appspot.com",
    messagingSenderId: "974364469170",
    appId: "1:974364469170:web:47fd6304c6cf36b5bfe6ab",
    measurementId: "G-5YR8N35DY4",
  },
  discord_client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
};
