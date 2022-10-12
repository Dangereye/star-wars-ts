import { createContext, ReactNode, useState } from "react";
import { filmType } from "../components/pages/Films";

type AppContextProviderProps = {
  children: ReactNode;
};
type AppType = {
  appData: AppDataType;
  setAppData: React.Dispatch<React.SetStateAction<AppDataType>>;
};
type AppDataType = {
  films: filmType[];
  isLoading: boolean;
  isError: boolean;
};

const initialData = {
  films: [] as filmType[],
  isLoading: false,
  isError: false,
};

export const AppContext = createContext({} as AppType);

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [appData, setAppData] = useState<AppDataType>(initialData);
  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
}
