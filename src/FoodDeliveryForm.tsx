import { useForm, type ErrorOption } from "react-hook-form";

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

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  // onerror

  const onError = (errors: any) => {
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
          id="customerName"
          type="text"
          {...register("customerName", {
            required: "customer Name is required",
          })}
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
