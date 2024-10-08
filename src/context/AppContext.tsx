"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface IAppState {
  innerWidth: number;
  isSticky: boolean;
}

interface AppContextType {
  state: IAppState;
  updateState: (newState: Partial<IAppState>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<IAppState>({
    innerWidth: 1024,
    isSticky: true,
  });

  const updateState = (newState: Partial<IAppState>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
