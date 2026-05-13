import { useFormContext } from "react-hook-form";
import { Select } from "../../../controls/Select";
import type { CheckoutFormType, SelectOptionType } from "../../../types";

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

const CheckoutForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormType>();
  return (
    <>
      <h1 className="font-bold mt-4 capitalize">checkout Details</h1>
      <div className="grid grid-cols-2  gap-y-2 gap-x-4 items-center">
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
    </>
  );
};

export { CheckoutForm };
