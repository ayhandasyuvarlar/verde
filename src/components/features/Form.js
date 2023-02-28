import { Formik } from "formik";
import React from "react";
import validationSchema from "../../validation/createPostValidation";
import validationAlert from "../../assets/validationAlert.svg";
import message from "../../assets/message.svg";

const Form = () => {
  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
       
      }}
    >
      {(formik) => (
        <form
          className="flex flex-col gap-2 mt-10 w-4/4"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-xl font-medium text-gray-900 light:text-white"
            >
              Title
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={message} alt="" width={"20px"} />
              </div>
              <input
                type="text"
                id="title"
                className="bg-gray-50 w-3/4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                placeholder="sunt aut facere repellat provident occaecati"
                {...formik.getFieldProps("title")}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="body"
              className="block mb-2 text-xl font-medium text-gray-900 light:text-white"
            >
              Your message
            </label>
            <textarea
              id="body"
              rows="4"
              className="block p-2.5 w-3/4 h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              placeholder="Leave a comment..."
              {...formik.getFieldProps("body")}
            ></textarea>
          </div>
          {formik.touched.title && formik.errors.title ? (
            <div
              className="flex w-2/4 p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 light:bg-gray-800 light:text-red-400 light:border-red-800"
              role="alert"
            >
              <img src={validationAlert} alt="" width={"20px"} />
              <span className="sr-only">Info</span>
              <div>{formik.errors.title}</div>
            </div>
          ) : null}
          {formik.touched.body && formik.errors.body ? (
            <div
              className="flex p-4 mb-4 w-2/4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 light:bg-gray-800 light:text-red-400 light:border-red-800"
              role="alert"
            >
              <img src={validationAlert} alt="" width={"20px"} />
              <span className="sr-only">Info</span>
              <div>{formik.errors.body}</div>
            </div>
          ) : null}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
