import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import type { OrderFoodItemType } from "../../../types";
import { TextField } from "../../../controls/TextField";
import { useRenderCount } from "../../../components/useRenderCount";

// eslint-disable-next-line
const RenderCount = useRenderCount();

const OrderFoodItems = () => {
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
  const onRowAdd = () => {
    append({ name: "food", quantity: 1 });
  };

  const onRowDelete = (index: number) => {
    remove(index);
  };

  return (
    <>
      <div className="mt-8">
        <h1 className="font-bold my-4 capitalize">Food Items</h1>
        <RenderCount />
        <div className="overflow-x-auto  rounded-xl border border-gray-700 bg-[#2b3130] shadow-lg">
          <table className="w-full   text-sm text-gray-200">
            <thead className="bg-[#303635] border-b border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">
                  Food
                </th>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left font-semibold tracking-wide">
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
                  className="border-b border-gray-700 hover:bg-[#343b39] transition"
                >
                  <td className="px-4 py-3">
                    <TextField
                      type="text"
                      className="w-full"
                      {...register(`foodItems.${index}.name` as const, {
                        required: "this field is required.",
                      })}
                      error={errors.foodItems && errors.foodItems[index]?.name}
                    />
                  </td>

                  <td className="px-4 py-3">
                    <TextField
                      type="number"
                      min={0}
                      className="w-full"
                      {...register(`foodItems.${index}.quantity` as const)}
                    />
                  </td>
                  <td>
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
