import { ReactNode } from "react";

// product
export type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

type CartQuantity = {
  quantity: number;
};

// product state
export type productState = {
  products: Product[];
};

// action types
export type productAction = {
  type: string;
  payload: any;
};

// cart item inside state
export type cartItem = Product & CartQuantity;

// state type
export type cartState = {
  cart: cartItem[];
};

// type for props in a component
export type cartProviderProps = {
  children: ReactNode;
};

// usereducer actions
export type cartAction = {
  type: string;
  payload: any;
};
