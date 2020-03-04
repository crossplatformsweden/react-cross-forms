import { SetFormActionCreator } from './Actions';
import { IUserFields } from '../types';

describe('actions', () => {
  describe('SetFormActionCreator', () => {
    test('should return provided formData', () => {
      const formData: IUserFields = { email: 'a@b.com' };
      expect(SetFormActionCreator(formData).formData).toBe(formData);
    });
  });
});
