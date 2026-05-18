import { useFormContext, useFormState } from "react-hook-form";
import { TextField } from "../../../controls/TextField";
import type { DeliveryAddressFormType } from "../../../types";
import { useRenderCount } from "../../../components/useRenderCount";

// eslint-disable-next-line
const RenderCount = useRenderCount();

const DeliveryAddressForm = () => {
  const { register } = useFormContext<{
    address: DeliveryAddressFormType;
  }>();

  const { errors } = useFormState<{
    address: DeliveryAddressFormType;
  }>({
    name: [
      "address.city",
      "address.landmark",
      "address.state",
      "address.streetAddress",
    ],
    exact: true,
  });

  return (
    <>
      <h1 className="font-bold my-8  capitalize">delivery address</h1>
      {/* <RenderCount /> */}
      <br />
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
    </>
  );
};

export { DeliveryAddressForm };
