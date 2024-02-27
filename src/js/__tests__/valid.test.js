import Validator from '../valid';

test('test_1', () => {
  const result = new Validator('Helen_04-95kk');

  expect(result.validateUsername()).toEqual(true);
});

test('test_2', () => {
  const result = new Validator('_Helen_04-95kk');

  expect(result.validateUsername()).toEqual(false);
});

test('test_3', () => {
  const result = new Validator('Helen_04-95kk-');

  expect(result.validateUsername()).toEqual(false);
});

test('test_4', () => {
  const result = new Validator('Helen_04-95');

  expect(result.validateUsername()).toEqual(false);
});

test('test_5', () => {
  const result = new Validator('Helen_04-1995');

  expect(result.validateUsername()).toEqual(false);
});

test('test_6', () => {
  const result = new Validator('Елена_04-1995');

  expect(result.validateUsername()).toEqual(false);
});
