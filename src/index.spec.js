const { ESLint } = require('eslint');

async function validate(file) {
    return (await new ESLint().lintFiles([file]))[0];
}

function hasError(result, ruleId) {
    return !!result.messages.find(message => message.ruleId === ruleId);
}

describe('Validate ESLint configs', () => {
    let result;

    beforeAll(async () => {
        result = await validate('src/index.invalid.js');
    });

    it('should validate valid file without errors', async () => {
        const errorCount = (await validate('src/index.valid.js')).errorCount;

        expect(errorCount).toEqual(0);
    });

    describe('for rule', () => {
        test.each([
            'quotes',
            'semi',
            'no-magic-numbers',
            'no-shadow',
            'prefer-arrow/prefer-arrow-functions',
            'comma-dangle',
            'eqeqeq',
            'jsdoc/check-alignment',
            'jsdoc/newline-after-description',
            'newline-per-chained-call',
            'template-curly-spacing',
            'no-var',
            'no-void',
            'object-curly-spacing',
            'no-unneeded-ternary',
            'object-shorthand',
            'one-var',
            'padding-line-between-statements',
            'prefer-const',
            'prefer-object-spread',
            'quote-props',
            'radix',
            'space-before-function-paren',
            'space-in-parens',
            'use-isnan',
            'valid-typeof',
            'yoda',
            'prefer-template',
            'jsdoc/no-types',
        ])('should throw error for %s', ruleId => {
            expect(hasError(result, ruleId)).toBeTruthy();
        });
    })

});
