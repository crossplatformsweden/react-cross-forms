import { FormReducer } from './Reducers';
import { SetFormAction } from './Actions';
describe('Reducers', () => {
  test('should have undefined state', () => {
    expect(FormReducer(undefined, SetFormAction).formState).toStrictEqual([]);
  });
});
