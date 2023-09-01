module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'prefer-arrow',
        'import',
        'jsdoc',
    ],
    rules: {
        'no-null/no-null': 'off',
        'import/order': 'off',
        'import/no-internal-modules': 'off',
        'no-underscore-dangle': 'off',
        'class-methods-use-this': 'off',
        'no-invalid-this': 'off',
        'no-use-before-define': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-extraneous-dependencies': 'off',
        'consistent-return': 'off',
        'no-redeclare': 'off',
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'no-delete-var': 'error',
        'no-magic-numbers': [
            'error',
            {
                ignoreDefaultValues: true,
                ignoreArrayIndexes: false,
                detectObjects: false,
                ignore: [-1, 1, 0],
            },
        ],
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                allowStandaloneDeclarations: true,
            },
        ],
        'no-extra-boolean-cast': 'error',
        'max-lines': [
            'error',
            {
                max: 400,
                skipComments: true,
                skipBlankLines: true,
            },
        ],
        'arrow-body-style': 'error',
        'arrow-parens': [
            'error',
            'as-needed',
        ],
        'brace-style': [
            'error',
            '1tbs',
            { allowSingleLine: true },
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        complexity: 'error',
        'constructor-super': 'error',
        curly: 'error',
        'default-case': 'error',
        'eol-last': 'error',
        eqeqeq: [
            2,
            'allow-null',
        ],
        'guard-for-in': 'error',
        'id-blacklist': 'error',
        'id-match': 'error',
        'import/no-default-export': 'error',
        'import/no-deprecated': 'error',
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'error',
        'jsdoc/tag-lines': [
            'error',
            'any',
            {
                startLines: 1,
            },
        ],
        'max-classes-per-file': ['error', { ignoreExpressions: true }],
        'max-len': [
            'error',
            {
                ignorePattern: '^import [^,]+ from |^export | implements ',
                code: 140,
            },
        ],
        'new-parens': 'error',
        'newline-per-chained-call': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': [
            'error',
            {
                allow: [
                    'warn',
                    'dir',
                    'timeLog',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupEnd',
                    'table',
                    'dirxml',
                    'error',
                    'groupCollapsed',
                    'Console',
                    'profile',
                    'profileEnd',
                    'timeStamp',
                    'context',
                ],
            },
        ],
        'no-debugger': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-irregular-whitespace': 'error',
        'no-multi-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
            },
        ],
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'template-curly-spacing': ['error', 'always'],
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'no-unneeded-ternary': 'error',
        'object-shorthand': [
            'error',
            'properties',
        ],
        'one-var': [
            'error',
            'never',
        ],
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive',
            },
            {
                blankLine: 'always',
                prev: 'import',
                next: '*',
            },
            {
                blankLine: 'any',
                prev: 'import',
                next: 'import',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'const',
                    'let',
                    'var',
                    'export',
                ],
            },
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var',
                    'export',
                ],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: [
                    'const',
                    'let',
                    'var',
                    'export',
                ],
                next: [
                    'const',
                    'let',
                    'var',
                    'export',
                ],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'if',
                    'class',
                    'for',
                    'do',
                    'while',
                    'switch',
                    'try',
                ],
            },
            {
                blankLine: 'always',
                prev: [
                    'if',
                    'class',
                    'for',
                    'do',
                    'while',
                    'switch',
                    'try',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
            },
        ],
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'quote-props': [
            'error',
            'as-needed',
        ],
        radix: 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': [
            'error',
            'never',
        ],
        'use-isnan': 'error',
        'valid-typeof': 'error',
        yoda: 'error',
        'prefer-template': 'error',
        'jsdoc/no-types': 'error',
    },
};
