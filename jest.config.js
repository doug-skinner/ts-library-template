module.exports = async () => {
    return {
        collectCoverage: true,
        collectCoverageFrom: ['src/**/*.ts'],
        moduleDirectories: ['node_modules', '<rootDir>/'],
        moduleNameMapper: {
            '~/(.*)$': '<rootDir>/src/$1',
        },
        testEnvironment: 'node',
        testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    }
}
