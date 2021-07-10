module.exports = {
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/recommended'
    ],
    plugins: [
        "codebrick",
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'no-console': 0,
        "vue/html-indent": ["error", 4, {}],
        "vue/html-self-closing": 0,
        "vue/attributes-order": 0,
        "vue/singleline-html-element-content-newline": 0,
        "vue/require-prop-types": 0,
        "vue/require-default-prop": 0,
        "vue/no-v-html": 0, // Not sure if we should ignore this or not, but let's ignore for now.
        "codebrick/no-unmatched-translation-key": 0,
    }
}