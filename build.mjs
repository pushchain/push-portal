import chalk from "chalk";
import { parse } from "envfile";
import fs from "fs";
import { getPreviewBasePath } from "./basePath.js";
import process from "node:process";

// Define environment presets
const envPresets = {
  prod: {
    VITE_APP_DEPLOY_ENV: "PROD",
    VITE_APP_PUBLIC_URL: "https://portal.push.org/",
  },
  preview: {
    VITE_APP_DEPLOY_ENV: "PREVIEW",
    VITE_APP_PUBLIC_URL: `https://push-protocol.github.io${getPreviewBasePath()}`,
  },
};

// Get environment from command line argument (default to "preview")
const appEnv = process.argv[2] || "preview";

if (!envPresets[appEnv]) {
  console.log(chalk.red(`❌ Invalid environment: "${appEnv}"`));
  process.exit(1);
}

const prepForDeployment = async () => {
  console.log(
    chalk.green(
      `Starting Custom Deployment Prebuild for ${appEnv.toUpperCase()}...`,
    ),
  );
  await changeENV(appEnv);
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
      chalk.green.bold(
        `✅ ENV file modified for ${appEnv.toUpperCase()} deployment.`,
      ),
    );
  } else {
    console.log(chalk.green.dim("  -- ENV file verified, no changes needed."));
  }
};

// Run the deployment prep
await prepForDeployment();
