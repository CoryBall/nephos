import React, { PropsWithChildren } from 'react';
import { FieldError } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  name: string;
  register: any;
  type?: string;
  className?: string;
  error: FieldError | undefined;
};

const FormField: React.FunctionComponent<FormFieldProps> = (
  props: PropsWithChildren<FormFieldProps>
) => {
  const { label, name, register, type, className, error } = props;

  return (
    <div className={`mt-2 font-sans ${className ?? ''}`}>
      <label className="ml-2 text-gray-200" htmlFor={`${name}Id`}>
        {label}
      </label>
      <input
        id={`${name}Id`}
        type={!type ? 'text' : type}
        placeholder={label}
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-xs text-black placeholder-gray-500 border border-gray-200 rounded-md py-1 pl-3"
        name={name}
        ref={register}
      />
      {error && (
        <span className="text-red-500 text-sm ml-2">{error?.message}</span>
      )}
    </div>
  );
};

export default FormField;
