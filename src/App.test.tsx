import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './App';

describe('components', () => {
  describe('<App />', () => {
    test('renders correctly', () => {
      const instance = renderer.create(<App />).toJSON();
      expect(instance).toMatchSnapshot();
    });

    test('logo has correct class', () => {
      const instance = renderer.create(<App />);
      const child = instance?.root.findByProps({ title: 'logo' });
      expect(child.props.className).toBe('App-logo');
    });
  });
});
