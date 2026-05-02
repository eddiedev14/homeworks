/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import { useEcommerceState } from "../hooks/useEcommerceState";

interface IProvider {
  children: ReactNode;
}

//* Create context
export const EcommerceContext = createContext<ReturnType<
  typeof useEcommerceState
> | null>(null);

export function EcommerceContextProvider({ children }: IProvider) {
  const data = useEcommerceState();

  return (
    <EcommerceContext.Provider value={data}>
      {children}
    </EcommerceContext.Provider>
  );
}
