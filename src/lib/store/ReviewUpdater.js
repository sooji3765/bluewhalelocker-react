import { createAction } from 'redux-actions';
import BwlUtil from '../utils/BwlUtil';

const REVIEW_WRITE = 'review/WRITE';

const handleReviewWrite = (state, action) => {
  return {
    ...state,
    routerInfo: {
      ...state.routerInfo,
      selectComponent: action.payload.selectComponent,
    },
  }
};

const action_handleReviewWrite = createAction(REVIEW_WRITE, id => id);

export default {
  caseActions: {
    [REVIEW_WRITE]: (state, action) => handleReviewWrite(state, action),
  },
  funcActions: {
    action_handleReviewWrite,
  }
};
