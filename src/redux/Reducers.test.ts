import { FormReducer } from './Reducers';
import { SetFormAction } from './Actions';
describe('Reducers', () => {
  test('should have undefined state', () => {
    const formData = { b: '3' };
    expect(
      FormReducer({ action: { type: SetFormAction, formData } }).state
    ).toBeUndefined();
  });
});
