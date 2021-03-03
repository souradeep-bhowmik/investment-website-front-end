import {
  LOAD_COST_BASIS_OUTPUT,
  RESET_COST_BASIS_DATA,
} from "../actions/types/loadOutputType";

const initState = { costBasisData: [] };

const loadOuputReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_COST_BASIS_OUTPUT: {
      return {
        ...state,
        costBasisData: action.payload,
      };
    }
    case RESET_COST_BASIS_DATA: {
      return { costBasisData: [] };
    }

    default: {
      return { ...state };
    }
  }
};

export default loadOuputReducer;
