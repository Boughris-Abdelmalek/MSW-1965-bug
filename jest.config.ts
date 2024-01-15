import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
	verbose: true,
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"^.+\\.(css|scss|sass|less)$": "jest-preview/transforms/css",
		"^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "jest-preview/transforms/file",
	},
	transformIgnorePatterns: ["^.+\\.module\\.(css|sass|scss)$"],
	testEnvironment: "jsdom",
	preset: "ts-jest",
	testEnvironmentOptions: {
		customExportConditions: [""],
		url: "https://localhost:3000",
	},
	setupFiles: ["<rootDir>/jest.polyfills.ts"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	collectCoverageFrom: [
		"src/**/*.{ts,tsx,js,jsx}",
		"!src/**/*.d.ts",
		"!**/node_modules/**",
		"!**/vendor/**",
		"!src/mocks/**/*.ts",
		"!src/types/*.ts",
		"!src/reportWebVitals.ts",
		"!src/index.tsx",
	],
	moduleDirectories: ["node_modules", "util", __dirname],
	testTimeout: 60000,
}

export default jestConfig
