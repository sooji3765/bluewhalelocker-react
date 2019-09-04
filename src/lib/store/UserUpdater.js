import { createAction } from 'redux-actions';

const USER_SIGN_IN = 'user/SIGN_IN';

const handleSignIn = (state, action) => {
  const profile = {
    state: {
      header: {
        count: "2",
        title: "locker - 제목",
      },
      userInfo: {
        user_id: "USER1",
        user_name: "김철순",
      },
      routerInfo: {
        selectComponent: "HomeComponent",
        selectChanger: "user",
      },
    }
  };

  return {
    ...state,
    ...profile.state
  };  
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
