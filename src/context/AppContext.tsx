import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllDecks } from "../api/DeckService";

interface IAppContext {
  selectedRole: string | null;
  setSelectedRole: (role: string | null) => void;
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
  decks: any;
  setDecks: (decks: any) => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [currentScreen, setCurrentScreen] = useState<string>("SelectRole");
  const [decks, setDecks] = useState<any>(null);

  const fetchDecks = async () => {
    const response = await getAllDecks();
    setDecks(response);
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedRole,
        setSelectedRole,
        currentScreen,
        setCurrentScreen,
        decks,
        setDecks,
      }}
    >
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
