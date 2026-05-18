import {
  FormProvider,
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
  type UseFormReturn,
} from "react-hook-form";
import { useRenderCount } from "../../components/useRenderCount";
import { CheckoutForm } from "./components/CheckoutForm";
import type { FoodDeliveryFormType } from "../../types";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliveryMaster } from "./components/FoodDeliveryMaster";
import { SubmitButton } from "../../controls/SubmitButton";

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
    });

  const { handleSubmit, control, getValues, setValue, getFieldState } = methods;

  const onSubmit: SubmitHandler<FoodDeliveryFormType> = async (formData) => {
    await new Promise((resolve, rejects) => {
      setTimeout(rejects, 6000);
    });
    console.log(formData);
  };

  // onerror-function
  const onError: SubmitErrorHandler<FoodDeliveryFormType> = (errors) => {
    // console.log(errors);
    console.log("getValues:", getValues(["address", "mobile"]));
  };

  const onDemo = () => {
    console.log(setValue("paymentMethod", "cod", { shouldTouch: true }));
    console.log(getFieldState("paymentMethod"));
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
      <FormProvider {...methods}>
        <FoodDeliveryMaster />
        {/* <div className="mt-8">list of ordered food items</div> */}
        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>
      <div className="mt-8">
        <SubmitButton control={control} value={"submit"} />
      </div>
      <button type="button" className="bg-red-500 p-4 mt-4" onClick={onDemo}>
        demo
      </button>
    </form>
  );
}
