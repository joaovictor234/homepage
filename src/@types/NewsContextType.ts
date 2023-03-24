import { Dispatch, SetStateAction } from "react";
import { INews } from "../interface/INews";

export interface NewsContextType {
  news: INews[],
  setNews: Dispatch<SetStateAction<INews[]>>
}