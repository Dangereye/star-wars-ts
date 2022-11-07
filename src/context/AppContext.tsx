import { ReactNode, useState, createContext } from "react";

type AppContextType = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextType);

type Props = {
  children: ReactNode;
};

export default function AppContextProvider({ children }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <AppContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </AppContext.Provider>
  );
}
