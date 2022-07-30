import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { apiLinkState, prefixState, userState } from "../../atoms";
import { FormInput } from "../Utils/FormInput";
import { ModalWrapper } from "../Utils/ModalWrapper";
import Select from "react-select";
import { customSelectStyles } from "../../constants";
import { delegate } from "../../utils";

interface IProps {
  handleClose: () => void;
  balance: number;
}

export const Delegate: React.FC<IProps> = ({ handleClose, balance }) => {
  const apiLink = useRecoilValue(apiLinkState);
  const prefix = useRecoilValue(prefixState);
  const user: any = useRecoilValue(userState);
  const [to, setTo] = useState("");
  const [delegateTo, setDelegateTo] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    axios.get(`${apiLink}markets`).then(({ data }) => {
      console.log(data.markets.node);
      setDelegateTo(
        Object.keys(data.markets.node).map((value) => ({
          label: value,
          value,
        }))
      );
    });
  }, []);

  return (
    <ModalWrapper handleClose={handleClose}>
      <h1 className="text-2xl mb-5">Delegate LARYNXG</h1>
      <Formik
        initialValues={{ amount: 0 }}
        validate={({ amount }) => {
          const errors: Record<string, string> = {};

          if (!amount || amount > balance) {
            errors.amount = "Not enough funds!";
          }

          return errors;
        }}
        onSubmit={({ amount }) => {
          delegate(user.name, to, amount, prefix).then((r) => {
            console.log(r);
          });
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
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-left mb-1 text-md" htmlFor="start">
              To
            </label>
            <Select
              styles={customSelectStyles}
              defaultValue={delegateTo[0]}
              options={delegateTo}
              onChange={(value) => value?.value && setTo(value.value)}
              className="mb-2"
            />
            <FormInput
              type="number"
              name="amount"
              title={`Amount (${balance} LARYNXG)`}
              errors={errors.amount}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched.amount}
              value={values.amount}
              min={0}
            />
            <button
              type="submit"
              className="rounded-lg mt-4 border border-white py-1 w-2/3 px-2 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700"
            >
              Delegate
            </button>
          </form>
        )}
      </Formik>
    </ModalWrapper>
  );
};
