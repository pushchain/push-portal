// load the appropriate config as per the server state
import { config as generalConfig } from "./config-general";
import { Config } from "./config.types";
import { config as localConfig } from "./config-local";
import { config as devConfig } from "./config-dev";
import { config as stageConfig } from "./config-staging";
import { config as prodConfig } from "./config-prod";

const env = process.env.NEXT_PUBLIC_ENV;

export enum ENV {
  PROD = "prod",
  STAGING = "staging",
  DEV = "dev",
  /**
   * **This is for local development only**
   */
  LOCAL = "local",
}

// dynamic import
let dynamicConfig;
switch (env) {
  case ENV.LOCAL: {
    dynamicConfig = localConfig;
    break;
  }
  case ENV.DEV: {
    dynamicConfig = devConfig;
    break;
  }
  case ENV.STAGING: {
    dynamicConfig = stageConfig;
    break;
  }
  case ENV.PROD: {
    dynamicConfig = prodConfig;
    break;
  }
  default: {
    dynamicConfig = prodConfig;
  }
}

// combine config
const appConfig: Config = { ...dynamicConfig, ...generalConfig };

export default appConfig;
