module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
}
