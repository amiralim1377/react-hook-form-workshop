import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import type {
  FoodType,
  OrderFoodItemType,
  SelectOptionType,
} from "../../../types";
import { TextField } from "../../../controls/TextField";
import { useRenderCount } from "../../../components/useRenderCount";
import { useEffect, useState } from "react";
import { getFoodItems } from "../../../db";
import { Select } from "../../../controls/Select";

// eslint-disable-next-line
const RenderCount = useRenderCount();

const OrderFoodItems = () => {
  const [foodList, setFoodList] = useState<FoodType[]>([]);
  const [foodOptions, setFoodOptions] = useState<SelectOptionType[]>([]);

  const { register } = useFormContext<{ foodItems: OrderFoodItemType[] }>();
  const { errors } = useFormState<{ foodItems: OrderFoodItemType[] }>({
    name: "foodItems",
  });
  const { fields, append, remove } = useFieldArray<{
    foodItems: OrderFoodItemType[];
  }>({
    name: "foodItems",
    rules: {
      minLength: { value: 1, message: "At least 1 food Items required" },
    },
  });

  useEffect(() => {
    const load = async () => {
      const tempList = await getFoodItems();
      const items = tempList || [];

      setFoodList(items);

      const foodOptions = items.map((item) => ({
        value: item.foodId,
        text: item.name,
      }));

      setFoodOptions([{ value: 0, text: "Select your food" }, ...foodOptions]);
    };

    load();
  }, []);

  const onRowAdd = () => {
    append({ foodId: 0, price: 0, totalPrice: 0, quantity: 0 });
  };

  const onRowDelete = (index: number) => {
    remove(index);
  };

  return (
    <>
      <div className="mt-8">
        <h1 className="font-bold my-4 capitalize">Order Food Items</h1>
        {/* <RenderCount /> */}
        <div className="overflow-x-auto  rounded-xl border border-gray-700 bg-[#2b3130] shadow-lg">
          <table className="w-full   text-sm text-gray-200">
            <thead className="bg-[#303635] border-b border-gray-700 ">
              <tr className="">
                <th className="px-4 py-3  font-semibold tracking-wide">Food</th>
                <th className="px-4 py-3  font-semibold tracking-wide">
                  price
                </th>

                <th className="px-4 py-3  font-semibold tracking-wide">
                  Quantity
                </th>
                <th className="px-4 py-3  font-semibold tracking-wide">
                  total Price
                </th>

                <th className="px-4 py-3  font-semibold tracking-wide">
                  <button
                    className="border border-zinc-300 p-2 rounded-md "
                    type="button"
                    onClick={onRowAdd}
                  >
                    +Add
                  </button>
                </th>
              </tr>
            </thead>

            <tbody className="">
              {fields.map((field, index) => (
                <tr
                  key={field.id}
                  className="border-b   border-gray-700 hover:bg-[#343b39] transition"
                >
                  <td className="px-4 py-3">
                    <Select
                      {...register(`foodItems.${index}.foodId` as const)}
                      options={foodOptions}
                    />
                  </td>
                  <td className="px-4 py-3">price</td>

                  <td className="px-4 py-3">
                    <TextField
                      type="number"
                      min={0}
                      className="w-full"
                      {...register(`foodItems.${index}.quantity` as const)}
                    />
                  </td>
                  <td className="px-4 py-3">total price</td>

                  <td className=" px-4 py-3 ">
                    <button
                      className="border hover:bg-red-400 border-zinc-300 p-2 rounded-md bg-red-500 "
                      type="button"
                      onClick={() => onRowDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {errors.foodItems?.root && (
              <tfoot>
                <tr>
                  <td className="error">{errors.foodItems?.root?.message}</td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis excepturi eius, ratione eligendi ipsam saepe quis
                  libero cum minus quas dolor eveniet voluptates aliquid
                  deleniti officiis reprehenderit iste adipisci harum!
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export { OrderFoodItems };
