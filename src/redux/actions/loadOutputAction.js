import axios from "axios";
import { fetchDataURL } from "../../api";
import {
  LOAD_COST_BASIS_OUTPUT,
  LOADING_COST_BASIS_OUTPUT,
  RESET_COST_BASIS_DATA,
} from "./types/loadOutputType";

export const loadOutput = () => async (dispatch) => {
  dispatch({
    type: LOADING_COST_BASIS_OUTPUT,
  });
  await axios
    .get(fetchDataURL())
    .then((res) => {
      const costBasisOutput = res.data;
      dispatch({
        type: LOAD_COST_BASIS_OUTPUT,
        payload: costBasisOutput,
      });
    })
    .catch((err) => {
      if (err.message === "Network Error") alert("No response form server!");
      else alert(err.message);
      dispatch({
        type: LOADING_COST_BASIS_OUTPUT,
      });
    });
};

export const resetData = () => async (dispatch) => {
  dispatch({
    type: RESET_COST_BASIS_DATA,
  });
};
