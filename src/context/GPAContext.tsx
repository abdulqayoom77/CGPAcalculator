import React, { createContext, useReducer } from "react";
import { gpaReducer, initialState } from "./gpaReducer";
import { type GPAContextType } from "../types/types";

export const GPAContext = createContext<GPAContextType | undefined>(undefined);

export const GPAProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(gpaReducer, initialState);
  return (
    <GPAContext.Provider value={{ state, dispatch }}>
      {children}
    </GPAContext.Provider>
  );
};

