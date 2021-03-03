import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import axios from "axios";
import { uploadDataURL } from "../api";
import { Spinner } from "reactstrap";
import { toggleUploadTransaction } from "../redux/actions/uploadTransactionAction";

const UploadTransaction = () => {
  const dispatch = useDispatch();

  const isUploadActive = useSelector((state) => {
    return state.uploadDataBoolean.isActive;
  });

  useEffect(() => {}, [isUploadActive]);

  return (
    <>
      {isUploadActive && <Spinner color="primary" />}
      <hr />
      <Formik
        initialValues={{
          file: null,
        }}
        onSubmit={async (values, { resetForm, props }) => {
          //  Restrict empty file upload
          if (values.file === null) alert("Please select a file!");
          else {
            dispatch(toggleUploadTransaction());
            //  File reader is used to read contents of uploaded file and send as response body
            var reader = new FileReader();
            reader.readAsText(values.file, "UTF-8");
            reader.onload = async function (evt) {
              //  On successfully reading the file data, trigger an axios post request to upload the contents
              await axios
                .post(uploadDataURL(), evt.target.result)
                .then((res) => {
                  alert(res.data);
                })
                .catch((err) => {
                  if (err.message === "Network Error")
                    alert("No response form server!");
                  else alert(err.message);
                });
            };
            reader.onerror = function (evt) {
              alert(`Error reading file ${evt.target}`);
            };
            dispatch(toggleUploadTransaction());
            resetForm();
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="file">Select transaction file to upload: </label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
                className="form-control"
                disabled={isSubmitting}
              />
            </div>
            <hr />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UploadTransaction;
