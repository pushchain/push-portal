export const rewardsBaseURL =
  'https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem';

const appEnv = 'dev';

export const getRewardsBaseURL = () => {
  switch (appEnv) {
    case 'prod':
      return `https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case 'staging':
      return `https://us-east1-push-stage-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case 'dev':
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
    default:
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
  }
};
