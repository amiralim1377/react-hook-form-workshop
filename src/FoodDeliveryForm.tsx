import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { useRenderCount } from "./components/useRenderCount";
import { TextField } from "./controls/TextField";
import { Select } from "./controls/Select";
import type { SelectOptionType } from "./types";

type FoodDeliveryFormType = {
  orderNo: number;
  mobile: string;
  customerName: string;
  email: string;
  paymentMethod: string;
  deliveryIn: number;
};

const paymentOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid Online" },
  { value: "cod", text: "Cash on Delivery" },
];

const deliveryInOptions: SelectOptionType[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "Half an hour" },
  { value: 60, text: "1 hour" },
  { value: 120, text: "2 hours" },
  { value: 180, text: "3 hours" },
];

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
      deliveryIn: 0,
      paymentMethod: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
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
      <div>
        <div className="mt-8">list of ordered food items</div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 items-center">
          <Select
            {...register("paymentMethod", {
              required: "this field is required",
            })}
            label="payment Method"
            error={errors.paymentMethod}
            options={paymentOptions}
          />

          <Select
            {...register("deliveryIn")}
            label="Delivery within"
            error={errors.deliveryIn}
            options={deliveryInOptions}
          />
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
