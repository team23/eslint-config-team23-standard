const { ESLint } = require('eslint');
const config = require('../.eslintrc.js');

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
            ['no-unused-vars'],
            ['no-magic-numbers'],
        ])('should throw error for %s', ruleId => {
            expect(hasError(result, ruleId)).toBeTruthy();
        });
    })

});
