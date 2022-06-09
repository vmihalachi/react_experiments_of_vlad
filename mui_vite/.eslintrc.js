// all ESLint rules can be found here https://eslint.org/docs/rules/
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'react-app',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:jsx-a11y/recommended'
    ],
    plugins: ['prettier', 'jsx-a11y'],
    rules: {
        // Typescript rules
        '@typescript-eslint/no-unused-vars': 'error',
        'array-callback-return': 'error',
        camelcase: 'error',
        'capitalized-comments': 'error',
        // Let's have this number as small as possible
        complexity: ['error', 25],
        'consistent-this': 'error',
        curly: 'error',
        // enable in the future
        'default-case': 'off',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': ['error', 'expression'],
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'id-denylist': 'error',
        'init-declarations': 'error',
        'max-classes-per-file': ['error', 1],
        // Let's have this number as small as possible
        'max-depth': ['error', 3],
        // Let's have this number as small as possible
        'max-lines': ['error', { max: 600, skipBlankLines: true, skipComments: true }],
        // Let's have this number as small as possible
        'max-lines-per-function': ['error', { max: 450, skipBlankLines: true, skipComments: true }],
        // Let's have this number as small as possible
        'max-nested-callbacks': ['error', 5],
        // Let's have this number as small as possible
        'max-params': ['error', 5],
        'max-statements': ['error', 28],
        'multiline-comment-style': 'off',
        'new-cap': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty': 'error',
        'no-implicit-coercion': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        // enable in the future
        'no-magic-numbers': 'off',
        'no-multi-assign': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-self-compare': 'error',
        'no-undef': 'off',
        'no-unmodified-loop-condition': 'error',
        'no-unreachable-loop': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': 'off',
        'no-use-before-define': 'error',
        'no-template-curly-in-string': 'error',
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-await': 'error',
        'prettier/prettier': [
            'warn',
            {
                trailingComma: 'none',
                tabWidth: 4,
                printWidth: 100,
                semi: false,
                singleQuote: true,
                jsxSingleQuote: true,
                endOfLine: 'auto',
                bracketSameLine: true,
                arrowParens: 'avoid'
            }
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'never', children: 'never', propElementValues: 'always' }
        ],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function'
            }
        ],
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        'react/prop-types': 'off',
        'react/jsx-boolean-value': 'error',
        'react/jsx-no-useless-fragment': 'error',
        // Let's have this number as small as possible
        'react/jsx-max-depth': ['error', { max: 8 }],
        'react/react-in-jsx-scope': 'off',
        'require-atomic-updates': 'error',
        semi: ['error', 'never'],
        strict: ['error', 'global'],
        'unicode-bom': 'off',
        yoda: 'error',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: false
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                }
            }
        ]
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {

            }
        },
        {
            files: ['*.ts'],
            rules: {

            }
        },
    ]
}
