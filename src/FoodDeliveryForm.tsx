import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { useRenderCount } from "./components/useRenderCount";
import { TextField } from "./controls/TextField";

type FoodDeliveryFormType = {
  orderNo: number;
  mobile: string;
  customerName: string;
  email: string;
};
// eslint-disable-next-line
const RenderCount = useRenderCount();

export default function FoodDeliveryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      customerName: "",
      mobile: "",
      email: "",
      orderNo: new Date().valueOf(),
    },
    mode: "onBlur",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
    delayError: 100,
  });

  const onSubmit: SubmitHandler<FoodDeliveryFormType> = (formData) => {
    console.log(formData);
  };

  // onerror-function
  const onError: SubmitErrorHandler<FoodDeliveryFormType> = (errors) => {
    console.log(errors);
  };

  return (
    <form
      autoComplete="false"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="border border-gray-400 rounded-md p-5"
      noValidate
    >
      <RenderCount />
      <br />
      <div className="grid grid-cols-2 grid-rows-2 gap-8 items-center">
        <TextField
          disabled
          type="text"
          className=""
          label="#OrderNo"
          {...register("orderNo", {
            required: "orderNo  is required",
          })}
          error={errors.orderNo}
        />
        <TextField
          type="text"
          className=""
          label="Mobile"
          {...register("mobile", {
            required: { value: true, message: "mobile is required" },
          })}
          error={errors.mobile}
        />
        <TextField
          type="text"
          className=""
          label="customer Name"
          {...register("customerName", {
            required: "customerName  is required",
          })}
          error={errors.customerName}
        />
        <TextField
          type="email"
          className=""
          label="Email"
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email}
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="px-2 py-1 rounded-md border border-gray-400"
        >
          submit
        </button>
      </div>
    </form>
  );
}
