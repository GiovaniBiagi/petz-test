import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  typescript: {
    reactDocgen: false,
  },
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.modules?.push(`${process.cwd()}`);
      config.resolve.alias = {
        "@": path.resolve(__dirname, ".."),
      };
      return config;
    }
    return config;
  },
};
export default config;
