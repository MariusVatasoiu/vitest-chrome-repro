/// <reference types="vitest/config" />

import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";
import externalizeSourceDependencies from "@blockquote/rollup-plugin-externalize-source-dependencies";

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
    // testTimeout: 10000,
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
            launchOptions: {
              channel: "chrome",
              // executablePath: "/usr/bin/google-chrome",
            },
          }),
        },
      ],
    },
  },
});
