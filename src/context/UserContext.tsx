import { IData } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";

interface IUserContext {
  userData: IData | undefined;
  setUserData: Dispatch<SetStateAction<IData | undefined>>;
}

export const UserContext = createContext<IUserContext | null>(null);
