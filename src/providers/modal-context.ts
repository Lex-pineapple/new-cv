import { createContext, useContext } from "react";
import type { TProjectData } from "~components/projects/components/projects-carousel/components/project-modal/project-modal";

type TModalContext = {
  onModalClick: (data: TProjectData) => void;
};

export const ModalContext = createContext({} as TModalContext);
export const useModalContext = () => useContext(ModalContext);
