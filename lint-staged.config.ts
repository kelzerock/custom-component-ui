const lintStagedConfig = {
  "**/*.json": (stagedFiles) => `prettier --write ${stagedFiles.join(" ")}`,

  // "**/*.{css,scss}": (stagedFiles) => `stylelint ${stagedFiles.join(" ")}`,

  "**/*.{ts,tsx}": (stagedFiles) => [
    `prettier --write ${stagedFiles.join(" ")}`,
    `eslint ${stagedFiles.join(" ")}`,
  ],
};

export default lintStagedConfig;
