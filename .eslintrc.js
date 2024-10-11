// import '@rushstack/eslint-patch/modern-module-resolution';
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
    // extends: ['@layerzerolabs/eslint-config-next/recommended'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    rules: {
        // @layerzerolabs/eslint-config-next defines rules for turborepo-based projects
        // that are not relevant for this particular project
        'turbo/no-undeclared-env-vars': 'off',
        'import/no-unresolved': 'warn',
        'import/order': 'off', // Disable the import order rule entirely
        '@typescript-eslint/no-unused-vars': 'warn',
    },
};
