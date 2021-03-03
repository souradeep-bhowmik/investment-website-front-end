import { IS_ACTIVE_UPLOAD_TRANSACTION } from "./types/uploadTransactionType";

export const toggleUploadTransaction = () => async (dispatch) => {
  dispatch({
    type: IS_ACTIVE_UPLOAD_TRANSACTION,
  });
};
