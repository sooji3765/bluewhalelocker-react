import { createAction } from 'redux-actions';
import MyInfo from '../info/MyInfo';
 
const DEFAULT_UPDATE_STATE = 'default/UPDATE_STATE';

const handleUpdateState = (state, action) => {

  if (action.payload.profile) {
    const newState = {
      ...state,
      ...action.payload.profile.state
    }

    MyInfo.setSignIn(newState);
    return newState;
  }

  const newState = {
    ...state,
    routerInfo: {
      ...state.routerInfo,
      selectComponent: action.payload.selectComponent,
      selectChanger: ((action.payload.selectChanger) ? action.payload.selectChanger : state.routerInfo.selectChanger)
    },
  };

  MyInfo.setSignIn(newState);
  return newState;
};

export const action_handleUpdateState = createAction(DEFAULT_UPDATE_STATE, id => id);

export default {
  caseActions: {
    [DEFAULT_UPDATE_STATE]: (state, action) => handleUpdateState(state, action),
  },
  funcActions: {
    action_handleUpdateState,
  }
};
