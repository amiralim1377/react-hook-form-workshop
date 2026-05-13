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

export type FoodDeliveryMasterType = {
  orderNo: number;
  mobile: string;
  customerName: string;
  email: string;
};

export type FoodDeliveryFormType = {
  address: DeliveryAddressFormType;
} & CheckoutFormType &
  FoodDeliveryMasterType;
