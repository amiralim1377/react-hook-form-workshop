import React, { useId } from "react";
import type { FieldError } from "react-hook-form";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  className: string;
  label?: string;
  error?: FieldError | undefined;
};

const TextField = (props: TextFieldProps) => {
  const id = useId();
  const { className = "", type = "text", label, error, ...otherProps } = props;

  return (
    <div className="flex relative flex-col border px-2 py-1 border-gray-400 rounded-md">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={`outline-0 ${className}`}
        type={type}
        id={id}
        {...otherProps}
      />
      {error && <div className="error">{error.message}</div>}
    </div>
  );
};

export { TextField };
