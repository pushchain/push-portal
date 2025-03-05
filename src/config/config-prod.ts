export const config = {
  /**
   * APP INFO
   */
  APP_NAME: "Push Website",
  NODE_ENV: "prod",
  APP_ENV: "prod",

  /**
   * CHAIN INFO
   */
  ALLOWED_NETWORKS: [
    1, // for ethereum mainnet
    137, // for polygon mainnet
    56, // for bnb mainnet
    10, // for optimism mainnet
    42161, // arbitrum mainnet
    1101, // polygon zkevm mainnet
    122, // fuse mainnet
    7560, // Cyber mainnet
  ],
  DEFAULT_CHAIN: 1,
  firebaseConfig: {
    apiKey: "AIzaSyB4aXx2pJ9T5sw0Q1bba3jI1EAGp0Z5kBI",
    authDomain: "push-dev-a6a63.firebaseapp.com",
    projectId: "push-dev-a6a63",
    storageBucket: "push-dev-a6a63.appspot.com",
    messagingSenderId: "974364469170",
    appId: "1:974364469170:web:47fd6304c6cf36b5bfe6ab",
    measurementId: "G-5YR8N35DY4",
  },
  discord_client_id: import.meta.env.REACT_APP_DISCORD_CLIENT_ID,
};
