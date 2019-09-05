import { createAction } from 'redux-actions';
 
const LOCKER_LOCKER_ITEM = 'locker/LOCKER_ITEM';
const LOCKER_REGISTER_LOCKER = 'locker/REGISTER_LOCKER';
const LOCKER_UPDATE_LOCKER = 'locker/UPDATE_LOCKER';
const LOCKER_DELETE_LOCKER = 'locker/DELETE_LOCKER';
const LOCKER_RESERVATION_LOCKER = 'locker/RESERVATION_LOCKER';
const LOCKER_PAY_LOCKER = 'locker/PAY_LOCKER';

const handleLockerItem = (state, action) => {
  return {
    ...state,
    routerInfo : {
      ...state.routerInfo,
      selectComponent: action.payload.selectComponent,
      lockerItem: action.payload.item,
    },
  };
};

const handleRegisterLocker = (state, action) => {

  return {
    ...state,
    routerInfo : {
      ...state.routerInfo,
      selectComponent: 'AddLockerComponent',
    },
    lockerInfo : {
      ...state.lockerInfo,
      lockerList: state.lockerInfo.lockerList.concat(action.payload.item),
    },
  };
};

const handleUpdateLocker = (state, action) => {
  return {
    ...state,
    ...action.payload
  };
};

const handleDeleteLocker = (state, action) => {
  return {
    ...state,
    ...action.payload
  };
};

const handleReservationLocker = (state, action) => {
  return {
    ...state,
    ...action.payload
  };
};

const handlePayLocker = (state, action) => {
  return {
    ...state,
    ...action.payload
  };
};

export const action_handleLockerItem = createAction(LOCKER_LOCKER_ITEM, id => id);
export const action_handleRegisterLocker = createAction(LOCKER_REGISTER_LOCKER, id => id);
export const action_handleUpdateLocker = createAction(LOCKER_UPDATE_LOCKER, id => id);
export const action_handleDeleteLocker = createAction(LOCKER_DELETE_LOCKER, id => id);
export const action_handleReservationLocker = createAction(LOCKER_RESERVATION_LOCKER, id => id);
export const action_handlePayLocker = createAction(LOCKER_PAY_LOCKER, id => id);

export default {
  caseActions: {
    [LOCKER_LOCKER_ITEM]: (state, action) => handleLockerItem(state, action),
    [LOCKER_REGISTER_LOCKER]: (state, action) => handleRegisterLocker(state, action),
    [LOCKER_UPDATE_LOCKER]: (state, action) => handleUpdateLocker(state, action),
    [LOCKER_DELETE_LOCKER]: (state, action) => handleDeleteLocker(state, action),
    [LOCKER_RESERVATION_LOCKER]: (state, action) => handleReservationLocker(state, action),
    [LOCKER_PAY_LOCKER]: (state, action) => handlePayLocker(state, action),
  },
  funcActions: {
    action_handleLockerItem,
    action_handleRegisterLocker,
    action_handleUpdateLocker,
    action_handleDeleteLocker,
    action_handleReservationLocker,
    action_handlePayLocker,
  }
};
