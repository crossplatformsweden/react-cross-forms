import { Store } from './Store';

jest.mock('./Reducers', () => ({ RootReducer: jest.fn() }));

describe('Stores', () => {
  test('should ', () => {
    expect(Store).toBeDefined();
  });
});
