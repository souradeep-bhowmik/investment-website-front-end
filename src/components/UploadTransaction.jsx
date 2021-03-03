import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { uploadDataURL } from "../api";

const UploadTransaction = () => {
  return (
    <>
      <h1>Upload transaction data</h1>
      <Formik
        initialValues={{
          payload: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          console.log(values.payload);
          await axios.post(uploadDataURL, values.payload);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="payload" placeholder="Jane" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UploadTransaction;
