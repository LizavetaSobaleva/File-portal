import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineWorkspace } from "vitest/config";
import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  {
    extends: "./vitest.config.ts",
    test: {
      name: "unit-tests",
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  },
  {
    extends: "vite.config.ts",
    plugins: [
      storybookTest({
        configDir: path.join(dirname, ".storybook"),
      }),
    ],
    test: {
      name: "storybook-tests",
      browser: {
        enabled: true,
        headless: true,
        provider: "playwright",
        instances: [
          {
            browser: "chromium",
          },
        ],
      },
      setupFiles: [".storybook/vitest.setup.ts"],
    },
  },
]);
