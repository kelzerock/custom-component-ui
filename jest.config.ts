import { createDefaultPreset } from "ts-jest";
import { type Config } from "jest";

const tsJestTransformCfg = createDefaultPreset().transform;

export default () => {
  const config: Config = {
    testEnvironment: "jsdom",
    transform: {
      ...tsJestTransformCfg,
    },
    moduleNameMapper: {
      "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
  };
  return config;
};
