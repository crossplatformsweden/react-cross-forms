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
  formData: any;
}

/**
 * The Redux action creator to generate a {@see FormActionResult}
 * @param formData form data object
 */
export const SetFormActionCreator = (formData: any) => {
  const newAction: FormActionResult = {
    type: 'SetFormAction',
    formData,
  };
  return newAction;
};
