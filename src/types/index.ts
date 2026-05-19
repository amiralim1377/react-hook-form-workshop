export type SelectOptionType =
  | {
      value: string;
      text: string;
    }
  | {
      value: number;
      text: string;
    };

export type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};

export type DeliveryAddressFormType = {
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
};

export type MasterFoodDeliveryFormType = {
  orderNo: number;
  mobile: string;
  customerName: string;
  email: string;
};

export type FoodType = {
  foodId: number;
  name: string;
  price: number;
};

export type OrderFoodItemType = {
  foodId: number;
  quantity: number;
  price: number;
  totalPrice: number;
};

export type FoodDeliveryFormType = {
  address: DeliveryAddressFormType;
  foodItems: OrderFoodItemType[];
} & CheckoutFormType &
  MasterFoodDeliveryFormType;
