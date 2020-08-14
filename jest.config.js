module.exports = {
    verbose: true,
    rootDir: "src",
    coverageDirectory: "../coverage/",
    testPathIgnorePatterns: ["/node_modules/"],
    coveragePathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: ["jest-extended"]
}