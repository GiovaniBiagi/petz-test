const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/.jest/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(config);
