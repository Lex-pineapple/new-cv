import { useState, type PropsWithChildren } from "react";
import { ModalContext } from "~/providers/modal-context";
import { ProjectModal } from "~components/projects/components/projects-carousel/components/project-modal";
import type { TProjectData } from "~components/projects/components/projects-carousel/components/project-modal/project-modal";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalData, setModalData] = useState<TProjectData>({
    title: "",
    desc: "",
    items: [],
    stack: [],
    colors: {
      bg: "",
      accent: "",
      accentGlass: "",
      textAccent: "",
      textMain: "",
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const onModalClick = (data: TProjectData) => {
    setModalData(data);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        onModalClick,
      }}
    >
      {children}
      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...modalData}
      />
    </ModalContext.Provider>
  );
};
