import { IS_ACTIVE_UPLOAD_TRANSACTION } from "../actions/types/uploadTransactionType";

const initState = { isActive: false };

const uploadTransactionReducer = (state = initState, action) => {
  //   console.log(state);
  switch (action.type) {
    case IS_ACTIVE_UPLOAD_TRANSACTION: {
      return {
        ...state,
        isActive: !state.isActive,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default uploadTransactionReducer;
