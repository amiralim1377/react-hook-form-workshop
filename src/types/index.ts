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

export type FoodDeliveryFormType = {
  orderNo: number;
  mobile: string;
  customerName: string;
  email: string;

  address: {
    streetAddress: string;
    landmark: string;
    city: string;
    state: string;
  };
} & CheckoutFormType;
