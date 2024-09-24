import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { cartProviderProps, productAction, productState } from "../ts/types";

// create context
export const cartContext = createContext<{
  state: cartState;
  dispatch: React.Dispatch<cartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// context provider component
export function CartProvider({ children }: cartProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

// create context
export const productContext = createContext<{
  state: productState;
  dispatch: React.Dispatch<productAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// context provider component
export function ProductProvider({ children }: cartProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
}
