import { createAction } from 'redux-actions';
 
const DEFAULT_UPDATE_STATE = 'default/UPDATE_STATE';

const handleUpdateState = (state, action) => {

  if (action.payload.profile) {
    return {
      ...state,
      ...action.payload.profile.state
    };
  }

  return {
    ...state,
    routerInfo: {
      ...state.routerInfo,
      selectComponent: action.payload.selectComponent,
      selectChanger: ((action.payload.selectChanger) ? action.payload.selectChanger : state.routerInfo.selectChanger)
    },
  };
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
