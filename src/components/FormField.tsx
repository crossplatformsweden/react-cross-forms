import React, { InputHTMLAttributes } from 'react';
import { Field, ErrorMessage } from 'formik';

/**
 * Extends input props with `label`
 * @property label - Label displayed for the user
 * @property as - element to render as instead of `<input />`
 */
interface IFormField
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  as?: string;
}

/**
 * Wraps a label with formik field and error message.
 *
 * Must be wrapped in a `<Formik></Formik>`
 *
 * https://jaredpalmer.com/formik/
 * @param props Input props
 */
export const FormField: React.FunctionComponent<IFormField> = ({
  label,
  ...props
}) => (
  <div>
    <label htmlFor={props.id || props.name}>{label || props.name}</label>
    <Field {...props}>{props.children}</Field>
    <ErrorMessage name={props.name || ''} component="span" />
  </div>
);
