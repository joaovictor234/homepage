import { Dispatch, SetStateAction } from "react";
import { INewsValues } from "../interface/INewsValues";

export interface NewsValuesContextType {
  newsValues: INewsValues,
  setNewsValues: Dispatch<SetStateAction<INewsValues>>
}