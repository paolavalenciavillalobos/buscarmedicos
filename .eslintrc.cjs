module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        'plugin:react-hooks/recommended',
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        'react-refresh',
        "@typescript-eslint"
    ],
    rules: {
        'react-refresh/only-export-components': 'warn',
    }
}
