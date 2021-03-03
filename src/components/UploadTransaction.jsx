import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import { uploadDataURL } from "../api";

const UploadTransaction = () => {
  return (
    <>
      <hr />
      <Formik
        initialValues={{
          file: null,
        }}
        onSubmit={async (values, { resetForm }) => {
          if (values.file === null) alert("Please select a file!");
          else {
            var reader = new FileReader();
            reader.readAsText(values.file, "UTF-8");
            reader.onload = async function (evt) {
              await axios
                .post(uploadDataURL(), evt.target.result)
                .then((res) => {
                  alert("Successfully uploaded the transaction file!");
                  resetForm();
                })
                .catch((err) => {
                  console.log(err.response);
                });
            };
            reader.onerror = function (evt) {
              alert(`Error reading file ${evt.target}`);
            };
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="file">File upload</label>
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
