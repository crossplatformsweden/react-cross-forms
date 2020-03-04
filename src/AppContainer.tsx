import { connect } from 'react-redux';
import { App } from './App';
import { SetFormActionCreator } from './redux/Actions';

export default connect(
  (state) => state,
  (dispatch) => ({
    onSubmit: (data: any) => dispatch(SetFormActionCreator(data)),
  })
)(App);
