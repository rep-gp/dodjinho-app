module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'indent': ['error', 4],
        'no-console': 'off',
    }
};
