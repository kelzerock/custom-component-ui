import { createDefaultPreset } from "ts-jest";
import { type Config } from "jest";

const tsJestTransformCfg = createDefaultPreset().transform;

export default () => {
  const config: Config = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
    transform: {
      ...tsJestTransformCfg,
    },
    moduleNameMapper: {
      "\\.(scss|sass|css)$": "<rootDir>/node_modules/identity-obj-proxy",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
  };
  return config;
};
