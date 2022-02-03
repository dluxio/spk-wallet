import { Formik } from "formik";
import React from "react";
import { ISettings } from "../../utils";
import { FormInput } from "../Utils/FormInput";

export const WitnessSettings = ({
  handleSubmit,
}: {
  handleSubmit: (data: ISettings) => any;
}) => {
  return (
    <div className="w-full mx-2 my-4">
      <h1 className="text-2xl">Witness settings</h1>
      <Formik
        initialValues={{
          dexFee: 20,
          domain: "",
          pubKey: "",
          prevKey: "",
        }}
        validate={({ domain, pubKey, prevKey }) => {
          const errors: any = {};

          if (!domain) {
            errors.domain = "Required!";
          }
          if (!pubKey) {
            errors.pubKey = "Required!";
          }
          if (!prevKey) {
            errors.prevKey = "Required!";
          }

          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
          handleSubmit({
            ...data,
            pubKey: data.pubKey.trim(),
            prevKey: data.prevKey.trim(),
          });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="w-full sm:w-1/2 bg-gray-400 px-7 py-3 text-base rounded-xl border-2 border-gray-200">
            <form onSubmit={handleSubmit}>
              <FormInput
                name="domain"
                sideTitle="https://"
                errors={errors.domain}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched.domain}
                value={values.domain}
              />
              <div className="relative mt-2">
                <h1 className="absolute top-8 right-8">%</h1>
                <FormInput
                  name="dexFee"
                  title="DEX fee percent"
                  type="number"
                  min={1}
                  errors={errors.dexFee}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched.dexFee}
                  value={values.dexFee}
                />
              </div>
              <div className="flex gap-2 mt-3">
                <FormInput
                  name="pubKey"
                  title="DLUX MS Witness Pub Key"
                  errors={errors.pubKey}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched.pubKey}
                  value={values.pubKey}
                />
                <FormInput
                  name="prevKey"
                  title="DLUX MS Witness Private Key"
                  errors={errors.prevKey}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched.prevKey}
                  value={values.prevKey}
                />
              </div>
              <button
                type="submit"
                className={`px-2 py-1 mx-auto mt-5 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-pink-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600`}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};
