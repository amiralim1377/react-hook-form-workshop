import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { useRenderCount } from "./components/useRenderCount";

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
    mode: "onChange",
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
        <div className="flex flex-col bg-zinc-700/70 border px-2 py-1 border-gray-400 rounded-md">
          <label htmlFor="orderNo">orderNo</label>
          <input
            className="outline-0 "
            {...register("orderNo", {
              required: "orderNo  is required",
            })}
            type="string"
            id="orderNo"
            disabled
          />
        </div>
        <div className="flex relative flex-col  border px-2 py-1 border-gray-400 rounded-md">
          <label htmlFor="Mobile">Mobile</label>
          <input
            className="outline-0"
            {...register("mobile", {
              required: { value: true, message: "mobile is required" },
              minLength: { value: 11, message: "Must be 11 digits" },
              maxLength: { value: 11, message: "Must be 11 digits gav" },
            })}
            type="text"
            placeholder="Mobile"
          />
          {errors?.mobile && (
            <div className="error">{errors.mobile.message}</div>
          )}
        </div>
        <div className="flex relative flex-col border px-2 py-1 border-gray-400 rounded-md">
          <label htmlFor="customerName">Customer Name</label>
          <input
            className="outline-0"
            {...register("customerName", {
              required: {
                value: true,
                message: "customer Name is required",
              },
            })}
            type="text"
            id="customerName"
          />
          {errors?.customerName && (
            <div className="error">{errors.customerName.message}</div>
          )}
        </div>

        <div className="flex relative flex-col border px-2 py-1 border-gray-400 rounded-md">
          <label htmlFor="Email">Email</label>
          <input
            className="outline-0"
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
            type="text"
            id="Email"
          />
          {errors?.email && <div className="error">{errors.email.message}</div>}
        </div>
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
