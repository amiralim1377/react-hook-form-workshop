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

  const { handleSubmit } = methods;

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
      <FormProvider {...methods}>
        <FoodDeliveryMaster />
        <div className="mt-8">list of ordered food items</div>

        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>
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
