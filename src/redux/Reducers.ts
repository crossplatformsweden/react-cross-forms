import { SetFormAction } from './Actions';
import { combineReducers } from 'redux';

const initialState = {};

type Props = {
  state?: any;
  action: any;
};

export const FormReducer = ({ state = initialState, action }: Props) => {
  switch (action.type) {
    case SetFormAction:
      return Object.assign({}, state, { formState: action.formState });
    default:
      return state;
  }
};

export const RootReducer = combineReducers(FormReducer);
