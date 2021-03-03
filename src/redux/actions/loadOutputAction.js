import axios from "axios";
import { fetchDataURL } from "../../api";
import { LOAD_COST_BASIS_OUTPUT } from "./types/loadOutputType";

export const loadOutput = () => async (dispatch) => {
  const costBasisOutput = await axios.get(fetchDataURL());

  dispatch({
    type: LOAD_COST_BASIS_OUTPUT,
    payload: costBasisOutput.data,
  });
};
