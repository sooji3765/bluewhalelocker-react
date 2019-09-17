import { createAction } from 'redux-actions';
import MyInfo from '../info/MyInfo';
 
const ORDER_REGIST = 'order/REGIST';
const ORDER_UPDATE = 'order/UPDATE';

const handleOrderRegist = (state, action) => {
  return state;
};

const handleOrderUpdate = (state, action) => {
  return state;
};

export const action_handleOrderRegist = createAction(ORDER_REGIST, id => id);
export const action_handleOrderUpdate = createAction(ORDER_UPDATE, id => id);

export default {
  caseActions: {
    [ORDER_REGIST]: (state, action) => handleOrderRegist(state, action),
    [ORDER_UPDATE]: (state, action) => handleOrderUpdate(state, action),
  },
  funcActions: {
    action_handleOrderRegist,
    action_handleOrderUpdate,
  }
};
