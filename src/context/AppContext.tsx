import { createContext, ReactNode, useState } from "react";
import { filmType } from "../components/pages/Films";

type AppContextProviderProps = {
  children: ReactNode;
};
type AppType = {
  data: AppDataType;
  setData: React.Dispatch<React.SetStateAction<AppDataType>>;
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
  const [data, setData] = useState<AppDataType>(initialData);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
