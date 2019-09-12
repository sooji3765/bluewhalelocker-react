import { createAction } from 'redux-actions';
import BwlUtil from '../utils/BwlUtil';

const KEEPER_INFO = 'keeper/INFO';

const handleRouterKeeperInfo = (state, action) => {
  return {
    ...state,
    routerInfo: {
      ...state.routerInfo,
      selectComponent: action.payload.selectComponent,
    },
  }
};

const action_handleRouterKeeperInfo = createAction(KEEPER_INFO, id => id);

export default {
  caseActions: {
    [KEEPER_INFO]: (state, action) => handleRouterKeeperInfo(state, action),
  },
  funcActions: {
    action_handleRouterKeeperInfo,
  }
};
