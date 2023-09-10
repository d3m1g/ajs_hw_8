import ErrorRepository from '../map';


describe('ErrorRepository', () => {
 test('ErrorRepository', () => {
  const request = new ErrorRepository();

  expect(request.translate(101)).toEqual("Error 101");
  expect(request.translate(102)).toEqual("Error 102");
  expect(request.translate(103)).toEqual("Error 103");
  expect(request.translate(104)).toEqual("Error 104");
  expect(request.translate(53)).toEqual('Unknown error');
 });
});