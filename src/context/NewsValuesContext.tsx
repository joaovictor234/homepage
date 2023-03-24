import { createContext, useState } from "react";
import { NewsValuesContextType } from "../@types/NewsValuesContextType";
import { INewsValues } from "../interface/INewsValues";

export const NewsValuesContext = createContext<NewsValuesContextType | null>(null);

interface IProps {
  children: JSX.Element
}

const NewsValuesContextProvider = ({children}: IProps) => {
  const [newsValues, setNewsValues] = useState<INewsValues>({numberPage: 0, qtdViews: 5});

  return <NewsValuesContext.Provider value={{newsValues, setNewsValues}}>
    {children}
  </NewsValuesContext.Provider>
}

export default NewsValuesContextProvider;