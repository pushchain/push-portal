export const config = {
  /**
   * APP INFO
   */
  APP_NAME: "Push Website",
  NODE_ENV: "staging",
  APP_ENV: "staging",

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
  coreContractChain: 11155111, //the chain id of the network which the core contract relies on

  firebaseConfig: {
    apiKey: "AIzaSyClOk4qP0ttFW-BPnXy7WT920xfdXSbFu8",
    authDomain: "epns-internal.firebaseapp.com",
    databaseURL: "https://epns-internal.firebaseio.com",
    projectId: "epns-internal",
    storageBucket: "epns-internal.appspot.com",
    messagingSenderId: "755180533582",
    appId: "1:755180533582:web:752ff8db31905506b7d01f",
    measurementId: "G-ZJH2T7R9S1",
  },
  discord_client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
};
