import { SetFormActionCreator } from './Actions';

describe('actions', () => {
  describe('SetFormActionCreator', () => {
    test('should return provided formData', () => {
      const formData = { a: '1' };
      expect(SetFormActionCreator(formData).formData).toBe(formData);
    });
  });
});
