import { SetFormAction } from './Actions';

const initialState = { formState: [] };

// @ts-ignore
export const FormReducer = (state = initialState, action) => {
  if (action && action.type) {
    switch (action.type) {
      case SetFormAction:
        return Object.assign({}, state, { formState: action?.formState });
      default:
        return state;
    }
  }
  return state;
};

export const RootReducer = FormReducer;
