import React, { useId } from "react";
import type { FieldError } from "react-hook-form";
import type { SelectOptionType } from "../types";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  label: string;
  error?: FieldError | undefined;
  options: SelectOptionType[];
};

const Select = (props: SelectProps) => {
  const id = useId();
  const { className = "", label, error, options, ...otherProps } = props;

  return (
    <div className="flex mt-8 relative flex-col border px-2 py-1 pb-3 border-gray-400 rounded-md">
      <label htmlFor={id}>{label}</label>
      <select
        className={`w-full outline-0 px-3 py-2 rounded-md border border-gray-400
         bg-zinc-800 text-white
         cursor-pointer ${className}`}
        id={id}
        {...otherProps}
      >
        {options.map((opt, i) => {
          return (
            <option key={i} value={opt.value}>
              {opt.text}
            </option>
          );
        })}
      </select>
      {error && <div className="error">{error.message}</div>}
    </div>
  );
};

export { Select };
