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
import { SubmitButton } from "../../controls/SubmitButton";
import { OrderFoodItems } from "./components/OrderFoodItems";
import { MasterFoodDeliveryForm } from "./components/MasterFoodDeliveryForm";

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
        foodItems: [{ foodId: 0, price: 0, totalPrice: 0, quantity: 0 }],
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

  const { handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<FoodDeliveryFormType> = async (formData) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
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
        <MasterFoodDeliveryForm />
        <OrderFoodItems />
        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>
      <div className="mt-8">
        <SubmitButton control={control} value={"submit"} />
      </div>
    </form>
  );
}
