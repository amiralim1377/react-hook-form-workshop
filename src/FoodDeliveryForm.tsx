import { useState, type ChangeEvent, type SubmitEvent } from "react";

type FoodDeliveryFormType = {
  mobile: string;
  customerName: string;
};

export default function FoodDeliveryForm() {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    mobile: "",
    customerName: "",
  });

  console.log(values);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form
      autoComplete="false"
      onSubmit={handleSubmit}
      className="border border-gray-400 rounded-md p-5  "
    >
      <div className="flex flex-col">
        <label htmlFor="customerName">customerName</label>
        <input
          value={values.customerName}
          className="border px-2 py-1 border-gray-400 rounded-md"
          id="customerName"
          type="text"
          name="customerName"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="mobile">mobile</label>
        <input
          id="mobile"
          value={values.mobile}
          name="mobile"
          className="border px-2 py-1 border-gray-400 rounded-md"
          onChange={handleChange}
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
