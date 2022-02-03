import { useTranslation } from "next-export-i18n";
import React, { ChangeEventHandler } from "react";

type FormInputProps = {
  handleChange: ChangeEventHandler;
  handleBlur: ChangeEventHandler;
  value: any;
  errors: any;
  touched: any;
  name: string;
  type?: string;
  min?: number;
  title?: string;
  sideTitle?: string;
};

export const FormInput = ({
  handleChange,
  handleBlur,
  value,
  errors,
  touched,
  name,
  min,
  title,
  sideTitle,
  type = "text",
}: FormInputProps) => {
  const formattedName = name.replace("_", " ");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full">
      <label className="text-left mb-1 text-md" htmlFor="start">
        {title
          ? title
          : t(formattedName).charAt(0).toUpperCase() +
            t(formattedName).slice(1)}
      </label>
      <input
        className="px-3 py-1 rounded-lg border bg-gray-300 text-gray-700 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        type={type}
        name={name}
        onChange={handleChange}
        step={0.001}
        onBlur={handleBlur}
        value={value}
        min={min ? min : 0}
      />
      <h1 className="text-red-500">{errors && touched && errors}</h1>
    </div>
  );
};
