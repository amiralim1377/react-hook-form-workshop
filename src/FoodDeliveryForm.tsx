import {
  FormProvider,
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
  type UseFormReturn,
} from "react-hook-form";
import { useRenderCount } from "./components/useRenderCount";
import { TextField } from "./controls/TextField";
import { CheckoutForm } from "./CheckoutForm";
import type { FoodDeliveryFormType } from "./types";

// eslint-disable-next-line
const RenderCount = useRenderCount();

export default function FoodDeliveryForm() {
  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      defaultValues: {
        customerName: "",
        mobile: "",
        email: "",
        orderNo: new Date().valueOf(),
        deliveryIn: 0,
        paymentMethod: "",
        address: {
          streetAddress: "",
          landmark: "",
          city: "",
          state: "",
        },
      },
      mode: "onChange",
      reValidateMode: "onChange",
      criteriaMode: "firstError",
      shouldFocusError: true,
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FoodDeliveryFormType> = (formData) => {
    console.log(formData);
  };

  // onerror-function
  const onError: SubmitErrorHandler<FoodDeliveryFormType> = (errors) => {
    console.log(errors);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="border border-gray-400 rounded-md p-5"
      noValidate
    >
      <RenderCount />
      <br />
      <div className="grid grid-cols-2 grid-rows-2  gap-8 items-center">
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
      <div className="mt-8">list of ordered food items</div>
      <h1 className="font-bold mt-4 capitalize">checkout Details</h1>
      <FormProvider {...methods}>
        <CheckoutForm />
      </FormProvider>

      <h1 className="font-bold mt-8  capitalize">delivery address</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 items-center">
        <TextField
          type="text"
          className=""
          label="Street Address"
          {...register("address.streetAddress", {
            required: "streetAddress is required",
          })}
          error={errors.address?.streetAddress}
        />

        <TextField
          type="text"
          className=""
          label="city"
          {...register("address.city", {
            required: { value: true, message: "city is required" },
          })}
          error={errors.address?.city}
        />
        <TextField
          type="text"
          className=""
          label="Landmark"
          {...register("address.landmark")}
        />
        <TextField
          type="text"
          className=""
          label="State"
          {...register("address.state")}
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
