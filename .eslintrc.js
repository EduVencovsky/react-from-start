module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "node": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": 'babel-eslint',
    "plugins": [
        "react",
        "react-hooks",
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "quotes": ["warn", "single"],
        "semi": ["warn", "never"],
        "block-spacing": "warn",
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "object-curly-spacing": ["warn", "always"],
        "eol-last": ["warn", "always"],
        "indent": ["warn", 4, { SwitchCase: 1 }],
        "no-console": "warn",
        "no-debugger": "warn",
        "no-eval": "error",
        "no-trailing-spaces": ["warn", { "ignoreComments": true }],
        "no-unused-vars": "warn",
        "no-multiple-empty-lines": ["warn", { "max": 1 }],
        "jsx-quotes": ["warn", "prefer-single"],
        "react/prop-types": "warn",
        "react/react-in-jsx-scope": "warn",
        "react/no-deprecated": "error",
        "react/jsx-props-no-multi-spaces": "warn",
        "react/jsx-key": "warn",
        "react/jsx-no-bind": ["warn", { "ignoreRefs": true, "allowArrowFunctions": true }],
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-react": "warn", // realted to no-unused-vars
        "react/jsx-uses-vars": "warn", // realted to no-unused-vars
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
