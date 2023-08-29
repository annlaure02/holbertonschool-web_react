import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('function getFullYear', () => {
  test('Check if the function getFullYear return the actual year', () => {
    expected(getFullYear()).toEqual(new Date().getFullYear());
  })
})

describe('function getFooterCopy', () => {
  test('Check if the function getFooterCopy return Holberton School if true', () => {
    expected(getFooterCopy(true)).toEqual('Holberton School');
  })

  test('Check if the function getFooterCopy return Holberton School main dashboard if false', () => {
    expected(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  })
})

describe('function getLatestNotification', () => {
  test('check if the function getLatestNotification return the strinf', () => {
    expected(getLatestNotification().toEqual('<strong>Urgent requirement</strong> - complete by EOD'));
  })
})