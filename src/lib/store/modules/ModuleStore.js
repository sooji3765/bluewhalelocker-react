import { handleActions } from 'redux-actions';
import DefaultUpdater from '../DefaultUpdater';
import UserUpdater from '../UserUpdater';
import LockerUpdater from '../LockerUpdater';
import ReviewUpdater from '../ReviewUpdater';

const initialState = {
  header: {
    count: "",
    title: "",
  },
  userInfo: {
    user_id: "",
    user_name: "",
  },
  routerInfo: {
    selectComponent: "LoginComponent",
    selectChanger: "user",
  },
  lockerInfo: {
    lockerList: [],
    lockerItem: null,
  },
};

export const {
  action_handleUpdateState,
} = DefaultUpdater.funcActions;

export const {
  action_handleSignIn,
} = UserUpdater.funcActions;

export const {
  action_handleInputLocker,
  action_handleLockerItem,
  action_handleRegisterLocker,
  action_handleUpdateLocker,
  action_handleDeleteLocker,
  action_handleReservationLocker,
  action_handlePayLocker,
} = LockerUpdater.funcActions;

export const {
  action_handleReviewWrite,
} = ReviewUpdater.funcActions;

export default handleActions(
  {
    ...DefaultUpdater.caseActions,
    ...UserUpdater.caseActions,
    ...LockerUpdater.caseActions,
    ...ReviewUpdater.caseActions,
  },
  initialState
);
