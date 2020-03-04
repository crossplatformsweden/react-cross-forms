import { Country } from './Country';

describe('types', () => {
  describe('Country', () => {
    it('to have area', async () => {
      const mock: Country = { area: 2 };
      expect(mock.area).toBe(2);
    });
    it('to have latlng', async () => {
      const mock: Country = { latlng: [1, 2] };
      expect(mock.latlng).toStrictEqual([1, 2]);
    });
    it('to have currency', async () => {
      const mock: Country = { currencies: [{ code: '1' }] };
      expect(mock.currencies).toBeDefined();
      if (mock.currencies) expect(mock.currencies[0].code).toBe('1');
    });
  });
});
