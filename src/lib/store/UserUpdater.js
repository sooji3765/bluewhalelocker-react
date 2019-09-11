import { createAction } from 'redux-actions';
import MyInfo from '../info/MyInfo';

const USER_SIGN_IN = 'user/SIGN_IN';
const USER_SIGN_UP = 'user/SIGN_UP';
const USER_SIGN_OUT = 'user/SIGN_OUT';

const handleSignIn = (state, action) => {

  if (action.payload.profile) {
    return {
      ...action.payload.profile,
    }
  }

  const item = {
    ...action.payload.item
  };

  const newState = {
    isSignIn: true,
    header: {
      count: "1",
      title: "Locker",
    },
    userInfo: {
      user_id: item.userId,
      user_name: item.userName,
      auth: item.auth,
      ...item,
    },
    routerInfo: {
      selectComponent: "HomeComponent",
      selectChanger: "user",
    },
    lockerInfo: {
      lockerList: [],
      lockerItem: null,
    }
  };

  MyInfo.setSignIn(newState);

  return newState;
};

const handleSignUp = (state, action) => {

  MyInfo.setSignUp();

  return {
    ...MyInfo.initialState,
  }
}

const handleSignOut = (state, action) => {

  MyInfo.setSignOut();

  return {
    ...MyInfo.initialState,
  }
}


const action_handleSignIn = createAction(USER_SIGN_IN, id => id);
const action_handleSignUp = createAction(USER_SIGN_UP, id => id);
const action_handleSignOut = createAction(USER_SIGN_OUT, id => id);

export default {
  caseActions: {
    [USER_SIGN_IN]: (state, action) => handleSignIn(state, action),
    [USER_SIGN_UP]: (state, action) => handleSignUp(state, action),
    [USER_SIGN_OUT]: (state, action) => handleSignOut(state, action),
  },
  funcActions: {
    action_handleSignIn,
    action_handleSignUp,
    action_handleSignOut,
  }
};
