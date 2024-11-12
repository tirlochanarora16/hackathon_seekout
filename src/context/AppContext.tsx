import React, { createContext, useContext, useState } from "react";

interface IAppContext {
  selectedRole: string | null;
  setSelectedRole: (role: string | null) => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
  }

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ selectedRole, setSelectedRole }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};