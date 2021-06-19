import { validateEmail, validateRequired } from './validate';

describe('validateEmail working correct', () => {
  // email validate cases
  const emptyStr = validateEmail('');
  const validEmail = validateEmail('example@example.com');
  const invalidEmail = validateEmail('asd@asd');
  const undefinedArg = validateEmail(undefined);
  const nullArg = validateEmail(null);
  const arrArg = validateEmail([1, 2]);
  const objectArg = validateEmail({a: 'b'});

  test('Try empty string', () => {
    expect(emptyStr.valid).toEqual(false);
    expect(emptyStr.message).toEqual('This field is required');
  });

  test('Try valid email', () => {
    expect(validEmail.valid).toEqual(true);
    expect(validEmail.message).toEqual('');
  });

  test('Try invalid email', () => {
    expect(invalidEmail.valid).toEqual(false);
    expect(invalidEmail.message).toEqual('Please enter a valid e-mail');
  });

  test('Try undefined', () => {
    expect(undefinedArg.valid).toEqual(false);
    expect(undefinedArg.message).toEqual('Invalid value');
  });

  test('Try null', () => {
    expect(nullArg.valid).toEqual(false);
    expect(nullArg.message).toEqual('Invalid value');
  });

  test('Try array', () => {
    expect(arrArg.valid).toEqual(false);
    expect(arrArg.message).toEqual('Invalid value');
  });

  test('Try object', () => {
    expect(objectArg.valid).toEqual(false);
    expect(objectArg.message).toEqual('Invalid value');
  });
});

describe('validateRequired working correct', () => {
  // requiredValue validate cases
  const emptyStr = validateRequired('');
  const notEmptyString = validateRequired('test');
  const emptyArray = validateRequired([]);
  const notEmptyArray = validateRequired([1, 2, 3, 4]);
  const emptyObject = validateRequired({});
  const notEmptyObject = validateRequired({key: 'value', key2: 'value2'});
  const undefinedArg = validateRequired(undefined);
  const nullArg = validateRequired(null);

  test('Try empty string', () => {
    expect(emptyStr.valid).toEqual(false);
    expect(emptyStr.message).toEqual('This field is required');
  });

  test('Try not empty string', () => {
    expect(notEmptyString.valid).toEqual(true);
    expect(notEmptyString.message).toEqual('');
  });

  test('Try empty array', () => {
    expect(emptyArray.valid).toEqual(false);
    expect(emptyArray.message).toEqual('This field is required');
  });

  test('Try not empty array', () => {
    expect(notEmptyArray.valid).toEqual(true);
    expect(notEmptyArray.message).toEqual('');
  });

  test('Try empty object', () => {
    expect(emptyObject.valid).toEqual(false);
    expect(emptyObject.message).toEqual('This field is required');
  });

  test('Try not empty object', () => {
    expect(notEmptyObject.valid).toEqual(true);
    expect(notEmptyObject.message).toEqual('');
  });

  test('Try undefined', () => {
    expect(undefinedArg.valid).toEqual(false);
    expect(undefinedArg.message).toEqual('This field is required');
  });

  test('Try null', () => {
    expect(nullArg.valid).toEqual(false);
    expect(nullArg.message).toEqual('This field is required');
  });
});
