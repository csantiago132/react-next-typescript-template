const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve("./", ".prettierrc"), "utf8"));

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json"
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    plugins: ["prettier", "@typescript-eslint", "react", "jsx-a11y", "react-hooks"],
    env: {
        browser: true,
        jest: true,
        es6: true
    },
    rules: {
        "prettier/prettier": ["error", prettierOptions],
        "class-methods-use-this": 0,
        "newline-per-chained-call": 0,
        "prefer-template": 2,
        "require-yield": 0,
        "no-confusing-arrow": 0,

        "no-return-assign": 0,
        "no-param-reassign": 0,
        "no-console": [
            "error",
            {
                allow: ["warn", "error"]
            }
        ],
        "no-use-before-define": 0,
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 2,
        "import/no-webpack-loader-syntax": 0,
        "import/prefer-default-export": 0,

        "jsx-a11y/aria-props": 2,
        "jsx-a11y/heading-has-content": 0,
        "jsx-a11y/mouse-events-have-key-events": 2,
        "jsx-a11y/role-has-required-aria-props": 2,
        "jsx-a11y/role-supports-aria-props": 2,
        "jsx-a11y/label-has-for": [
            2,
            {
                components: [],
                required: {
                    every: ["nesting", "id"]
                },
                allowChildren: true
            }
        ],

        "react/jsx-closing-tag-location": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-no-target-blank": 0,
        "react/require-default-props": 0,
        "react/require-extension": 0,
        "react/self-closing-comp": 0,
        "react/sort-comp": 0,
        "react/prop-types": 0,
        "react/jsx-filename-extension": [
            "error",
            {
                extensions:  [".tsx"]
            }
        ],

        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "warn",

        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};
