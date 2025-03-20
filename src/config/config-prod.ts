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

  /**
   * Core Network Related Data
   */
  coreContractChain: 1, //the chain id of the network which the core contract relies on

  firebaseConfig: {
    apiKey: "AIzaSyBrzkFPyNmVDFzGY7dKz2HocUO4m-ni-Fc",
    authDomain: "epns-ethereum-push-service.firebaseapp.com",
    databaseURL: "https://epns-ethereum-push-service.firebaseio.com",
    projectId: "epns-ethereum-push-service",
    storageBucket: "epns-ethereum-push-service.appspot.com",
    messagingSenderId: "915758146133",
    appId: "1:915758146133:web:2de388356233f5c22f2adc",
    measurementId: "G-X1L5P2E4EP",
  },
  discord_client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
};
