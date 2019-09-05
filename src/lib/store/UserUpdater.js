import { createAction } from 'redux-actions';
import BwlUtil from '../utils/BwlUtil';

const USER_SIGN_IN = 'user/SIGN_IN';

const handleSignIn = (state, action) => {

  const item = {
    ...action.payload.item
  };

  return {
    header: {
      count: "1",
      title: "haha",
    },
    userInfo: {
      user_id: item.id,
      user_name: item.name,
      auth: item.auth,
    },
    routerInfo: {
      selectComponent: "HomeComponent",
      selectChanger: "user",
    },
    lockerInfo: {
      lockerList: [],
      lockerItem: null,
    },
  }
};

const action_handleSignIn = createAction(USER_SIGN_IN, id => id);

export default {
  caseActions: {
    [USER_SIGN_IN]: (state, action) => handleSignIn(state, action),
  },
  funcActions: {
    action_handleSignIn,
  }
};
