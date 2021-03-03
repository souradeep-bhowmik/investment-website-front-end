import { LOAD_COST_BASIS_OUTPUT } from "../actions/types/loadOutputType";

const initState = { costBasisData: [] };

const loadOuputReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_COST_BASIS_OUTPUT: {
      return {
        ...state,
        costBasisData: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default loadOuputReducer;
