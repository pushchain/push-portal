type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string; // Optional because some Firebase projects may not use Analytics
};

export interface Config {
  // App-specific Configuration
  APP_NAME: string;
  NODE_ENV: string;
  APP_ENV: string;

  // Chain Information
  ALLOWED_NETWORKS: number[];
  DEFAULT_CHAIN: number;
  discord_client_id: number;
  firebaseConfig: FirebaseConfig;
}
