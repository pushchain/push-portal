import appConfig from "../config";

export const rewardsBaseURL =
  "https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem";

const appEnv = appConfig.APP_ENV;

export const getRewardsBaseURL = () => {
  switch (appEnv) {
    case "prod":
      return `https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case "staging":
      return `https://us-east1-push-stage-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case "dev":
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
    default:
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
  }
};

export const getSeasonThreeBaseURL = () => {
  switch (appEnv) {
    case "prod":
      return `http://localhost:8080/api/v3`;
    case "staging":
      return `http://localhost:8080/api/v3`;
    case "dev":
      return `http://localhost:8080/api/v3`;
    default:
      return `http://localhost:8080/api/v3`;

  }
};
