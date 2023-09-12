import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('function getFullYear', () => {
  test('Check if the function getFullYear return the actual year', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
})

describe('function getFooterCopy', () => {
  test('Check if the function getFooterCopy return Holberton School if true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  test('Check if the function getFooterCopy return Holberton School main dashboard if false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
})

describe('function getLatestNotification', () => {
  test("check if the function getLatestNotification return the string", () => {
		expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
	});
})

