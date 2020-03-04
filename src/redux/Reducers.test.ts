import { FormReducer } from './Reducers';
import { SetFormAction } from './Actions';
import { IUserFields } from '../types';
describe('Reducers', () => {
  test('should have undefined state', () => {
    const formData: IUserFields = { email: 'a@b.com' };
    expect(
      FormReducer({ action: { type: SetFormAction, formData } }).state
    ).toBeUndefined();
  });
});
