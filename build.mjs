import chalk from "chalk";
import { parse } from "envfile";
import fs from "fs";
import { getPreviewBasePath } from "./basePath.js";

// Only one environment preset for preview
const envPresets = {
  preview: {
    VITE_APP_DEPLOY_ENV: "PREVIEW",
    VITE_APP_PUBLIC_URL: `https://push-protocol.github.io${getPreviewBasePath()}`,
  },
};

// Prep for deployment
const prepForDeployment = async () => {
  console.log(chalk.green("Starting Custom Deployment Prebuild..."));

  const appEnv = "preview"; // Only preview environment
  await changeIndexHTML(appEnv);
  await changeENV(appEnv);
};

const changeIndexHTML = async (appEnv) => {
  const indexPath = "./index.html";
  const indexReplacePath = `./public/index-${appEnv}.html`;

  fs.copyFileSync(indexReplacePath, indexPath);

  const robotsPath = "./public/robots.txt";
  const robotsReplacePath = `./public/robots-${appEnv}.txt`;

  fs.copyFileSync(robotsReplacePath, robotsPath);

  const sitemapPath = "./public/sitemap.txt";
  const sitemapReplacePath = `./public/sitemap-${appEnv}.txt`;

  fs.copyFileSync(sitemapReplacePath, sitemapPath);
};

const changeENV = async (appEnv) => {
  console.log(chalk.green.dim("  -- Generating custom .env file..."));

  const envPath = "./.env";
  const envSamplePath = "./.env.sample";

  if (!fs.existsSync(envPath)) {
    console.log(chalk.red("  -- ENV file not found, creating..."));
    fs.copyFileSync(envSamplePath, envPath);
  } else {
    console.log(chalk.green.dim("  -- ENV file found."));
  }

  const envData = fs.readFileSync(envPath, "utf8");
  const envObject = parse(envData);
  const envSampleData = fs.readFileSync(envSamplePath, "utf8");
  const envSampleObject = parse(envSampleData);

  let modifiedEnvContents = "";
  let fileModified = false;

  for (const [envVar, defaultValue] of Object.entries(envSampleObject)) {
    const newValue =
      envPresets[appEnv][envVar] ?? envObject[envVar] ?? defaultValue;

    if (envObject[envVar] !== newValue) {
      fileModified = true;
      console.log(chalk.dim(`   -- ENV MODIFIED: ${envVar}=${newValue}`));
    }

    modifiedEnvContents += `${envVar}=${newValue}\n`;
  }

  if (fileModified) {
    fs.writeFileSync(envPath, modifiedEnvContents);
    console.log(
      chalk.green.bold("✅ ENV file modified for preview deployment."),
    );
  } else {
    console.log(chalk.green.dim("  -- ENV file verified, no changes needed."));
  }
};

// Run the deployment prep
await prepForDeployment();
