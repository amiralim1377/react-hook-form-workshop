import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";

type FoodDeliveryFormType = {
  mobile: string;
  customerName: string;
};

export default function FoodDeliveryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>();

  console.log(useForm());

  console.log(register("customerName"));
  const customerControll = register("customerName");

  const onSubmit: SubmitHandler<FoodDeliveryFormType> = (formData) => {
    console.log(formData);
  };

  // onerror
  const onError: SubmitErrorHandler<FoodDeliveryFormType> = (errors) => {
    console.log(errors);
  };

  return (
    <form
      autoComplete="false"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="border border-gray-400 rounded-md p-5  "
    >
      <div className="flex flex-col">
        <label htmlFor="customerName">customerName</label>
        <input
          className="border px-2 py-1 border-gray-400 rounded-md"
          name={customerControll.name}
          ref={customerControll.ref}
          onChange={customerControll.onChange}
          onBlur={customerControll.onBlur}
          // {...register("customerName", {
          //   required: "customer Name is required",
          // })}
          id="customerName"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="mobile">mobile</label>
        <input
          id="mobile"
          className="border px-2 py-1 border-gray-400 rounded-md"
          {...register("mobile", {
            required: "mobile is required",
          })}
        />
      </div>
      <div className="mt-4">
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
