import type React from "react";
import { useFormState, type Control } from "react-hook-form";

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  // eslint-disable-next-line
  control?: Control<any, any>;
};

const SubmitButton = (props: SubmitButtonProps) => {
  const { className, value, control = undefined, ...other } = props;
  const { isSubmitting } = control
    ? // eslint-disable-next-line
      useFormState({ control })
    : { isSubmitting: false };

  return (
    <>
      <button
        type="submit"
        className={`px-2 py-1 w-18 flex items-center justify-center text-center rounded-md border border-gray-400 ${className}`}
        disabled={isSubmitting == undefined ? false : isSubmitting}
        {...other}
      >
        {isSubmitting === undefined || isSubmitting === false ? (
          value
        ) : (
          <>
            <div className="w-6 h-6 border-4  border-white border-t-transparent rounded-full animate-spin"></div>
          </>
        )}
      </button>
    </>
  );
};

export { SubmitButton };
