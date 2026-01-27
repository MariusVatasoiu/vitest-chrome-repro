/// <reference types="vitest/config" />

import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";
import externalizeSourceDependencies from "@blockquote/rollup-plugin-externalize-source-dependencies";
import { existsSync, readFileSync } from "node:fs";

const isDockerOnLinux = () => {
  if (process.platform !== "linux") {
    return false;
  }

  if (existsSync("/.dockerenv")) {
    return true;
  }

  try {
    const cgroup = readFileSync("/proc/1/cgroup", "utf8");
    return cgroup.includes("docker") || cgroup.includes("containerd");
  } catch {
    return false;
  }
};

const getLocalChromeExecutable = () => {
  const envPath = process.env.CHROME_BIN;
  if (envPath && existsSync(envPath)) {
    return envPath;
  }

  if (process.platform === "darwin") {
    const macPath =
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    return existsSync(macPath) ? macPath : undefined;
  }

  return undefined;
};

const getChromiumLaunchOptions = () => {
  if (isDockerOnLinux()) {
    return { executablePath: "/usr/bin/google-chrome" };
  }

  const chromePath = getLocalChromeExecutable();
  if (chromePath) {
    return { executablePath: chromePath };
  }

  return undefined;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    externalizeSourceDependencies([
      /* @web/test-runner-commands needs to establish a web-socket
       * connection. It expects a file to be served from the
       * @web/dev-server. So it should be ignored by Vite */
      "/__web-dev-server__web-socket.js",
    ]),
  ],
  build: { target: ["chrome77", "edge80", "firefox115", "safari16"] },
  test: {
    watch: false,
    globals: true,
    setupFiles: "./vitest.setup.js",
    include: ["src/**/*.{spec,test}.{js,ts}"],
    maxWorkers: 4,
    browser: {
      enabled: true,
      headless: true,
      screenshotFailures: false,
      fileParallelism: false,
      instances: [
        {
          browser: "chromium",
          provider: playwright({
            launchOptions: getChromiumLaunchOptions(),
          }),
        },
      ],
    },
  },
});
