import { IUserFields } from '../types';
/**
 * The Redux action that sets form data
 */
export const SetFormAction = 'SetFormAction';
export type SetFormAction = typeof SetFormAction;

/**
 * The Redux action result of {@see SetFormActionCreator}
 */
export interface FormActionResult {
  type: SetFormAction;
  formData: IUserFields;
}

/**
 * The Redux action creator to generate a {@see FormActionResult}
 * @param formData form data object of {@see IUserFields}
 */
export const SetFormActionCreator = (formData: IUserFields) => {
  const newAction: FormActionResult = {
    type: 'SetFormAction',
    formData,
  };
  return newAction;
};
