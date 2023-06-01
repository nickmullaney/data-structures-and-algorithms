const { BracketValidator } = require('./index');

describe('BracketValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new BracketValidator();
  });

  it('should return true for balanced brackets', () => {
    const string1 = '(){}[]';
    expect(validator.validateBrackets(string1)).toBe(true);

    const string2 = '{[()]()}';
    expect(validator.validateBrackets(string2)).toBe(true);

    const string3 = '[{()}]';
    expect(validator.validateBrackets(string3)).toBe(true);
  });

  it('should return false for unbalanced brackets', () => {
    const string1 = '{[()]}(';
    expect(validator.validateBrackets(string1)).toBe(false);

    const string2 = '{[()]}}';
    expect(validator.validateBrackets(string2)).toBe(false);

    const string3 = '[{)]';
    expect(validator.validateBrackets(string3)).toBe(false);
  });

  it('should return false for mismatched brackets', () => {
    const string1 = '{[()]})';
    expect(validator.validateBrackets(string1)).toBe(false);

    const string2 = '[({)]';
    expect(validator.validateBrackets(string2)).toBe(false);

    const string3 = '[[))';
    expect(validator.validateBrackets(string3)).toBe(false);
  });

  it('should return true for empty string', () => {
    const string = '';
    expect(validator.validateBrackets(string)).toBe(true);
  });

  it('should return true for strings without brackets', () => {
    const string1 = 'Hello, World!';
    expect(validator.validateBrackets(string1)).toBe(true);

    const string2 = '12345';
    expect(validator.validateBrackets(string2)).toBe(true);
  });
});
