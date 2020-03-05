import React from 'react';
import renderer from 'react-test-renderer';
import { FormField } from './FormField';
import { Formik } from 'formik';

describe('components', () => {
  describe('<FormField />', () => {
    const formikProps = {
      initialValues: {},
      onSubmit: jest.fn(),
    };
    test('renders correctly', () => {
      const instance = renderer
        .create(
          <Formik {...formikProps}>
            <FormField />
          </Formik>
        )
        .toJSON();
      expect(instance).toMatchSnapshot();
    });
    test('When no props', async () => {
      renderer.create(
        <Formik {...formikProps}>
          <FormField />
        </Formik>
      );
    });
    test('When has props', async () => {
      renderer.create(
        <Formik {...formikProps}>
          <FormField type="email" name="email" />
        </Formik>
      );
    });
    test('When two <FormField/>', async () => {
      renderer.create(
        <Formik {...formikProps}>
          <FormField />
          <FormField />
        </Formik>
      );
    });
  });
});
