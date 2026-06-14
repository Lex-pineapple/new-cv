import { createContext, useContext } from "react";
import type { TProjectData } from "~components/projects/consts/general";

type TModalContext = {
  onModalClick: (data: TProjectData) => void;
};

export const ModalContext = createContext({} as TModalContext);
export const useModalContext = () => useContext(ModalContext);
