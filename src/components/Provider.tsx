import React, { createContext, ReactNode, useState } from "react";

export interface AppContextInterface {
  onboarded: boolean;
  isLogedIn: boolean;
  setOnBoarded: (boolean: boolean) => void;
  setIsLogedIn: (boolean: boolean) => void;
}

export const Context = createContext<AppContextInterface | null>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  const [onboarded, setOnBoarded] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <Context.Provider
      value={{ onboarded, isLogedIn, setOnBoarded, setIsLogedIn }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
