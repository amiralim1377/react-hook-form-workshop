import { useFormContext } from "react-hook-form";
import { TextField } from "../../../controls/TextField";
import type { FoodDeliveryMasterType } from "../../../types";

const FoodDeliveryMaster = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FoodDeliveryMasterType>();
  return (
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
  );
};

export { FoodDeliveryMaster };
